import { NavLink } from "react-router-dom";
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary px-3">
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
          <li className="nav-item">
            <NavLink className="nav-link font-bold  " to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link font-bold " to="/products">
              Our Products
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center">
        <a className="link-secondary me-3" href="/">
          <i className="fas fa-shopping-cart"></i>
        </a>

        <div className="dropdown">
          <a
            data-mdb-dropdown-init
            className="link-secondary me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            aria-expanded="false"
          >
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">
              1
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
