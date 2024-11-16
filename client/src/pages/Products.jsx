import { useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";

import Categories from "../components/Categories";
import { StoreContext } from "../hooks/StoreContext";
import Loader from "../components/Loader/Loader";
export default function Products() {
  const { filters } = useContext(StoreContext);
  console.log(filters);

  const { data, loading, error } = useFetch(filters);
  useEffect(() => {
    data && setProducts(data);
    console.log(data);
  }, [data]);
  const [products, setProducts] = useState([]);
  return (
    <section className=" py-5" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          {loading && <Loader />}
          {products.map((product) => (
            <div
              key={product.id}
              className="col-md-12 col-lg-4 mb-4 mb-lg-0 mb-lg-4"
            >
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Todays Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                  >
                    <p className="text-white mb-0 small">x4</p>
                  </div>
                </div>
                <img
                  src={import.meta.env.VITE_APP_URL + product.image[0].url}
                  className="card-img-top w-100"
                  alt="Laptop"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        {product.categories[0].title}
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>${product.price + 10}</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{product.title}</h5>
                    <h5 className="text-dark mb-0">${product.price}</h5>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">6</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Categories />
      </div>
    </section>
  );
}
