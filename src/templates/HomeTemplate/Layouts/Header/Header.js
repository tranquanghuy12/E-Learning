import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../../../assets/img/branding-logo.png";
import DanhMucKhoaHoc from "../../../../pages/Home/DanhMucKhoaHoc";
import { timKiemTenKhoaHocAction } from "../../../../redux/actions/QuanLyKhoaHocAction";
import {
  layMaLoaiNguoiDung,
  layThongTinNguoiDungAction,
} from "../../../../redux/actions/QuanLyNguoiDungAction";

import "./main.scss";

export default function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin =
    useSelector(
      (rootReducer) => rootReducer.QuanLyNguoiDungReducer.userLogin
    ) || {};

  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );

  const { mangKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );

  const { userProfile } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );

  useEffect(() => {
    dispatch(layMaLoaiNguoiDung());
    dispatch(layThongTinNguoiDungAction());
  }, [userProfile]);

  useEffect(() => {
    dispatch(timKiemTenKhoaHocAction(mangKhoaHoc.tenKhoaHoc));
  }, []);

  const logout = () => {
    localStorage.clear();
    history.push("/home");
    window.location.reload();
  };

  const layDanhMucKhoaHoc = (mangDanhMucKhoaHoc) => {
    return mangDanhMucKhoaHoc.map((item) => {
      return (
        <Link
          key={item.maDanhMuc}
          className="dropdown-item"
          to={`/danhmuckhoahoc/${item.maDanhMuc}`}
        >
          {item.tenDanhMuc}
        </Link>
      );
    });
  };

  const danhMucKhoaHocCollapse = () => {
    return (
      <ul className="dropdown-submenu list-unstyled">
        <li>
          Danh Mục
          <ul className="dropdown-submenu">
            {layDanhMucKhoaHoc(mangDanhMucKhoaHoc)}
          </ul>
        </li>
      </ul>
    );
  };

  return (
    <>
      <header>
        <nav className="bg-light navbar navbar-expand-md d-flex align-items-center justify-content-between flex-row">
          <div className="col-sm-1 d-lg-none display__when_small">
            <div className="nav-item dropdown displayWhenSmallScreen">
              <NavLink
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                exact
                to="/"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {danhMucKhoaHocCollapse()}
                {userLogin.taiKhoan ? (
                  <>
                    <Link className="dropdown-item" to="/profile">
                      {`Xin chào, ${
                        userLogin.hoTen.toString().length > 15
                          ? userLogin.hoTen.substring(0, 5) + "..."
                          : userLogin.hoTen
                      }`}
                    </Link>
                    <Link className="dropdown-item" onClick={logout} to="/">
                      Đăng xuất
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="dropdown-item">
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                      Đăng nhập
                    </Link>
                    <Link to="/register" className="dropdown-item">
                      Đăng ký
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-11 col-md-8 col-lg-9 display__sm align-items-center">
            <div className="header__left d-flex justify-content-start flex-row">
              <div>
                <NavLink className="navbar-brand logo__when_md" exact to="/">
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
              <div className="nav-item dropdown Categories">
                <ul className="nav__menu list-unstyled d-flex align-items-center">
                  <li className="nav__menu_item">
                    <Link to={`/`}>Home</Link>
                  </li>
                  <li className="nav__menu_item">
                    <DanhMucKhoaHoc />
                  </li>
                  <li className="nav__menu_item">
                    <Link to={`/about`}>About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col__display">
            <ul className="navbar-nav float-right">
              {userLogin.taiKhoan ? (
                <>
                  <li className="nav-item mr-3">
                    <NavLink
                      exact
                      to="/profile"
                      className="nav-link btn-custom-login"
                    >
                      {`Xin chào, ${
                        userLogin.hoTen.toString().length > 10
                          ? userLogin.hoTen.substring(0, 5) + "..."
                          : userLogin.hoTen
                      }`}
                    </NavLink>
                    {userProfile.chiTietKhoaHocGhiDanh !== undefined &&
                      userProfile.chiTietKhoaHocGhiDanh.length > 0 && (
                        <span class="badge badge-warning" id="lblCartCount">
                          {" "}
                          {userProfile.chiTietKhoaHocGhiDanh !== undefined
                            ? userProfile.chiTietKhoaHocGhiDanh.length
                            : ""}{" "}
                        </span>
                      )}
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/"
                      className="nav-link btn-custom-logout"
                      onClick={logout}
                    >
                      <i className="fas fa-sign-out-alt  test__scss mr-1"></i>
                      Đăng xuất
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/login"
                      className="nav-link d-flex justify-content-center btn-custom-login"
                    >
                      Đăng nhập
                    </NavLink>
                  </li>
                  <li className="nav-item ml-3">
                    <NavLink
                      exact
                      to="/register"
                      className="nav-link d-flex justify-content-center btn-custom-logout"
                    >
                      Đăng ký
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
