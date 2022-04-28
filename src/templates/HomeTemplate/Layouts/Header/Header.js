import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { history } from "../../../../App";
import {USER_LOGIN,TOKEN_CYBERSOFT} from '../../../../util/setting/config'
import _ from "lodash";
import { useSelector } from "react-redux";
export default function Header(props) {
  const { userLogin } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <li className="nav-item">
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="btn btn-success mr-2 ml-2"
            >
              Đăng nhập
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={() => history.push("/register")}
            >
              Đăng ký
            </button>
          </li>
        </Fragment>
      );
    }
    return (
      <>
        <button
          className="btn btn-success"
          onClick={() => {
            history.push("/profile");
          }}
        >
          Hello ! {userLogin.taiKhoan}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN_CYBERSOFT);
            history.push("/home");
            window.location.reload();
          }}
          className="btn btn-danger"
        >
          Đăng xuất
        </button>
      </>
    );
  };
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
          {renderLogin()}
        </ul>
      </div>
    </nav>
  );
}
