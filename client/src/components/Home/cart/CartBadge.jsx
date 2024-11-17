import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../../store/CartReducer";
import { Link } from "react-router-dom";
export default function CartBadge() {
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const toggleShowCart = () => {
    setShowCart(!showCart);
  };

  const products = useSelector((state) => state.cart.products);
  useEffect(() => {
    if (products.length > 0) {
      setShowCart(true);
    }
  }, [products]);
  return (
    <div onClick={toggleShowCart} className="d-flex align-items-center">
      <i className="cart-icon bi bi-bag">
        <span className="badge rounded-circle position-absolute badge-notification bg-danger">
          {products.length}
        </span>
      </i>

      <div className="cart-dropdown">
        <div className="cart-items">
          {showCart
            ? products.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-image">
                    <img
                      src={import.meta.env.VITE_APP_URL + product.image}
                      alt=""
                    />
                  </div>
                  <div className="cart-item-info">
                    <h5 className="cart-item-title h3 fw-semibold ">
                      {product.title}
                    </h5>
                  </div>
                  <div className="price realative">
                    <p className="cart-item-price bg-success h4  rounded-1 text-white p-2 mx-4">
                      ${product.price}
                    </p>
                    <i
                      onClick={() =>
                        dispatch(removeFromCart({ id: product.id }))
                      }
                      className="bi bi-x-lg remove-icon"
                    ></i>
                  </div>
                </div>
              ))
            : ""}
          <div className="clear-cart w-100 h3   ">
            {showCart && products.length > 0 ? (
              <div className="d-flex">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="btn btn-danger w-100 rounded-0 text-lg fs-5"
                >
                  Reset Cart
                  <i className="mx-2 bi bi-trash "></i>
                </button>
                <Link
                  to="/cart"
                  className="btn btn-success rounded-0 w-100 text-lg fs-5"
                >
                  Go To Checkout
                  <i className="mx-2 bi bi-bag-check"></i>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
