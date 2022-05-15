import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../../../util/setting/config";

export default function Header() {
  const history = useHistory();
  const userLogin =
    useSelector(
      (rootReducer) => rootReducer.QuanLyNguoiDungReducer.userLogin
    ) || {};
  const logout = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(TOKEN_CYBERSOFT);
    history.push("/home");
    window.location.reload();
  };
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-0">
        <NavLink className="navbar-brand" to="/">
          Admin page
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Home Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/quanlynguoidung">
                Quản lý người dùng
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/quanlykhoahoc">
                Quản lý khoá học
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <Avatar
                className="nav-link"
                style={{ backgroundColor: "#87d068", marginTop: "6px" }}
                icon={<UserOutlined />}
              />
            </li>
            {userLogin.taiKhoan ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    {`Xin chào, ${
                      userLogin.hoTen.toString().length > 15
                        ? userLogin.hoTen.substring(0, 8) + "..."
                        : userLogin.hoTen
                    }`}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={logout} to="">
                    Đăng xuất
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                    Đăng nhập
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
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
