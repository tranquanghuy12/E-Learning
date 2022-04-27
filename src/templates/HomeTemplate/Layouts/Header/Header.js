import React from "react";
import { Link } from "react-router-dom";
import { history } from "../../../../App";
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
          alt="Logo Cyberlearn"
        />
      </a>
      <button
        className="navbar-toggler d-lg-none"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              to="/"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Danh mục khoá học
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <Link className="dropdown-item" to="">
                Contact
              </Link>
              <Link className="dropdown-item" to="">
                News
              </Link>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 input-group"
            placeholder="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0">
            Search
          </button>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="btn btn-success mr-2 ml-2"
              to="/login"
            >
              Đăng nhập
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" to="/register">
              Đăng ký
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
