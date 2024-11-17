import { useSelector } from "react-redux";
export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const total = products.reduce((acc, product) => acc + product.price, 0);
  return (
    <section
      className=" h-custom"
      style={{ backgroundColor: "#eee", marginTop: "100px" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        Continue shopping
                      </a>
                    </h5>
                    <hr></hr>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">
                          You have {products.length} items in your cart
                        </p>
                      </div>
                    </div>
                    <ul className="list-group mb-3">
                      {products.map((product) => (
                        <div key={product.id} className="card  mb-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={
                                      import.meta.env.VITE_APP_URL +
                                      product.image
                                    }
                                    className="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: "65px" }}
                                  />
                                </div>
                                <div className="ms-5 ">
                                  <h5 className="h3">{product.title}</h5>
                                  <p className="small mb-0">
                                    {product.description}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "80px" }}>
                                  <h5 className="mb-0 h4">${product.price}</h5>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>

                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img
                            src={
                              "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            }
                            style={{ width: "45px" }}
                            className="img-fluid rounded-3"
                            alt="Avatar"
                          />
                        </div>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <i className="bi bi-credit-card fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="bi bi-credit-card-2-back  fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="bi bi-paypal fa-2x"></i>
                        </a>
                        <form className="mt-4">
                          <div
                            data-mdb-input-init
                            className="form-outline form-white mb-4"
                          >
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              placeholder="Cardholder's Name"
                            />
                            <label className="form-label" htmlFor="typeName">
                              Cardholders Name
                            </label>
                          </div>

                          <div
                            data-mdb-input-init
                            className="form-outline form-white mb-4"
                          >
                            <input
                              type="text"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="1234 5678 9012 3457"
                              minLength="19"
                              maxLength="19"
                            />
                            <label className="form-label" htmlFor="typeText">
                              Card Number
                            </label>
                          </div>

                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div
                                data-mdb-input-init
                                className="form-outline form-white"
                              >
                                <input
                                  type="text"
                                  id="typeExp"
                                  className="form-control form-control-lg"
                                  placeholder="MM/YYYY"
                                  size="7"
                                  minLength="7"
                                  maxLength="7"
                                />
                                <label className="form-label" htmlFor="typeExp">
                                  Expiration
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div
                                data-mdb-input-init
                                className="form-outline form-white"
                              >
                                <input
                                  type="password"
                                  id="typeText"
                                  className="form-control form-control-lg"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  size="1"
                                  minLength="3"
                                  maxLength="3"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="typeText"
                                >
                                  Cvv
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>

                        <hr className="my-4"></hr>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">${total}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">${total + 20}</p>
                        </div>

                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-info btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            {" "}
                            <span>${total + 20}</span>{" "}
                            <span>
                              {" "}
                              Checkout{" "}
                              <i className="bi bi-arrow-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
