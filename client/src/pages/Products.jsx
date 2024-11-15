import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
export default function Products() {
  const { data, loading, error } = useFetch(`products?populate=*`);

  useEffect(() => {
    data && setProducts(data);
  }, [data]);
  const [products, setProducts] = useState([]);
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          {loading && <p>Loading...</p>}

          {products.map((product) => (
            <div
              key={product.id}
              className="col-md-12 col-lg-4 mb-4 mb-lg-0 mb-lg-4"
            >
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Todays Combo Offer</p>
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
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>$1099</s>
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
      </div>
    </section>
  );
}
