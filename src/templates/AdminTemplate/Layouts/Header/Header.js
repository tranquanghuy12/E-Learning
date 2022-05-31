import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import "./main.scss";
export default function Header() {
  const history = useHistory();
  const userLogin =
    useSelector(
      (rootReducer) => rootReducer.QuanLyNguoiDungReducer.userLogin
    ) || {};
  const logout = () => {
    localStorage.clear();
    history.push("/home");
    window.location.reload();
  };
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg__primary_darkblue rounded-0">
        <NavLink className="navbar-brand nav__color_label" exact to="/">
          Admin Page
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars style__hamburger"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link nav__color" exact to="/admin">
                Home Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link nav__color"
                exact
                to="/admin/quanlynguoidung"
              >
                Quản lý người dùng
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link nav__color"
                to="/admin/quanlykhoahoc"
              >
                Quản lý khoá học
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Avatar
                className="nav-link"
                style={{
                  backgroundColor: "#10152F",
                  marginTop: "2px",
                  color: "#ffd302",
                }}
                icon={<UserOutlined />}
              />
            </li>
            {userLogin.taiKhoan ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link nav__color" to='/profile'>
                    {`Xin chào, ${
                      userLogin.hoTen.toString().length > 15
                        ? userLogin.hoTen.substring(0, 8) + "..."
                        : userLogin.hoTen
                    }`}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='#' className="nav-link nav__color" onClick={logout}>
                    Đăng xuất
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link nav__color">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                    Đăng nhập
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link nav__color">
                    Đăng kí
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
