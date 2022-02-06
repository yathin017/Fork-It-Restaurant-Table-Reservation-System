import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-spy="affix" data-offset-top="197">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Fork-It
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select city
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Ahmedabad
                  </a>
                  <a className="dropdown-item" href="#">
                    Banglore
                  </a>
                  <a className="dropdown-item" href="#">
                    Hyderabad
                  </a>
                  <a className="dropdown-item" href="#">
                    Raipur
                  </a>
                  
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
