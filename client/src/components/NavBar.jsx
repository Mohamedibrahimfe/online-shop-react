import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import CartBadge from "./Home/cart/CartBadge";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top ">
      <button
        data-mdb-collapse-init
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a to="/" className="navbar-brand ">
          <h1 className="font-bold">
            Sixteen <em className="text-danger ">Clothing</em>
          </h1>
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 transition duration-500">
          <li className="nav-item ">
            <h3>
              <NavLink className="nav-link font-bold  " to="/">
                Home
              </NavLink>
            </h3>
          </li>
          <li className="nav-item ">
            <h3>
              {" "}
              <NavLink className="nav-link font-bold " to="/products">
                Our Products
              </NavLink>
            </h3>
          </li>
          <li className="nav-item ">
            <h3>
              {" "}
              <NavLink className="nav-link font-bold " to="/cart">
                Soppign Cart
              </NavLink>
            </h3>
          </li>
        </ul>
      </div>
      <CartBadge />
    </nav>
  );
}
