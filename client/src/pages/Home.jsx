import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/home.css";
export default function Home() {
  const { data, loading, error } = useFetch(`products?populate=*`);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    data && setProducts(data.slice(12, 18));
  }, [data]);
  const [page, setPage] = useState(1);
  const pagesData = [
    {
      id: 1,
      title: "Best Offer",
      subtitle: "New Arrivals On Sale",
      img: "/images/slide_01.jpg",
    },
    {
      id: 2,
      title: "Flash Deals",
      subtitle: "Get your best products",
      img: "/images/slide_02.jpg",
    },
    {
      id: 3,
      title: "Last Minute",
      subtitle: "Grab last minute deals",
      img: "/images/slide_03.jpg",
    },
  ];

  // setTimeout(() => {
  //   page < 3 ? setPage(page + 1) : setPage(1);
  // }, 5000);

  return (
    <div className="home">
      <div className="banner ">
        <h1 className="title">{pagesData[page - 1].title}</h1>
        <h3 className="subtitle ">{pagesData[page - 1].subtitle}</h3>
        <img src={pagesData[page - 1].img} alt="" />
        <div className="dots">
          <span
            className={page === 1 ? "active" : ""}
            onClick={() => setPage(1)}
          ></span>
          <span
            className={page === 2 ? "active" : ""}
            onClick={() => setPage(2)}
          ></span>
          <span
            className={page === 3 ? "active" : ""}
            onClick={() => setPage(3)}
          ></span>
        </div>
      </div>

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
                    className="card-img py-3"
                    src={import.meta.env.VITE_APP_URL + product.image[0].url}
                    alt=""
                  />
                </a>
                <div className="down-content ">
                  <div className="tag d-flex justify-content-between px-1 py-3">
                    <a href="#">
                      <h4 className="font-bold text-black">{product.title}</h4>
                    </a>
                    <h6 className="font-bold text-primary ">
                      ${product.price}
                    </h6>
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
                  <span className="reviews">
                    Available:{" "}
                    {product.categories.map((cat) => (
                      <span
                        className="mx-1 px-1 rounded text-white bg-info font-bold text-small "
                        key={cat.id}
                      >
                        {cat.title}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
