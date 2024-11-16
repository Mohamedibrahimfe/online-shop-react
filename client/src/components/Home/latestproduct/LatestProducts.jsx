import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
export default function LatestProducts() {
  const { data, loading, error } = useFetch(`products?populate=*`);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    data && setProducts(data.slice(12, 18));
  }, [data]);
  // setTimeout(() => {
  //   page < 3 ? setPage(page + 1) : setPage(1);
  // }, 5000);
  return (
    <div className="products container">
      <div className="row">
        <div className="col-md-12">
          <div className="head">
            {" "}
            <h1 className="title">Latest Products</h1>{" "}
            <Link
              to="/products"
              className="btn  cursor-pointer font-bold btn-outline-danger"
            >
              View All Products
            </Link>
          </div>
        </div>
        {loading && <p>Loading...</p>}
        {products.map((product) => (
          <Link
            key={product.id}
            className="product col-md-4 border-1 shadow-lg  my-2 realative"
            to={`/products/${product.id}`}
          >
            <div className="product-item">
              <span className={product.isFeatured ? "featured" : ""}></span>
              <a href="#">
                <img
                  className="card-img py-2"
                  src={import.meta.env.VITE_APP_URL + product.image[0].url}
                  alt=""
                />
              </a>
              <div className="down-content ">
                <div className="tag d-flex justify-content-between px-1 py-1">
                  <a href="#">
                    <h4 className="font-bold text-black">{product.title}</h4>
                  </a>
                  <h6 className="font-bold text-primary ">${product.price}</h6>
                </div>
                <p className="mb-0 lead text-small font-bold px-1">
                  {product.Desc}
                </p>
                <ul className="stars py-2 my-2 px-1">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
                <div className="reviews mb-4 px-1">
                  Available:{" "}
                  {product.categories.map((cat) => (
                    <span
                      className="mx-1 px-1 mb-4 rounded text-white bg-info font-bold text-small "
                      key={cat.id}
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
