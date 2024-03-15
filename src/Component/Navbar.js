import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
 

  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/text-analyzer/">
                Textarea
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                About
              </Link>
            </li>
          </ul>
          <div class="form-check form-switch mx-2">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.toggle}
            />
            <label
              class={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlForor="flexSwitchCheckChecked"
            >
              {props.text}
            </label>
          </div>
          <span className="navbar-text">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className={`btn btn-${props.mode} me-md-2`} type="button">
                Login
              </button>
              <button className={`btn btn-${props.mode}`} type="button">
                Sign up
              </button>
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
}
