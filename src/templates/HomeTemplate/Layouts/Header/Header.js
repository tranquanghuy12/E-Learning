import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../../../util/setting/config";
import logo from "../../../../assets/img/logo-udemy.svg";
import "./main.scss";
export default function Header(props) {
  const history = useHistory();

  const onSearch = (e) => {
    console.log(e.target.value);
  };
  const userLogin =
    useSelector(
      (rootReducer) => rootReducer.QuanLyNguoiDungReducer.userLogin
    ) || {};
  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );

  const logout = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(TOKEN_CYBERSOFT);
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
        <nav className="bg-light navbar navbar-expand-md d-flex align-items-center justify-content-between flex-row px-4">
          <div className="col-sm-1 d-lg-none display__when_small">
            <div className="nav-item dropdown displayWhenSmallScreen">
              <NavLink
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                exact to="/"
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
                          ? userLogin.hoTen.substring(0, 8) + "..."
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
                      Đăng kí
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-11 col-md-8 col-lg-8 display__sm align-items-center">
            <div className="header__left d-flex justify-content-start flex-row">
              <NavLink className="navbar-brand logo__when_md" exact to="/">
                <img src={logo} alt="logo" />
              </NavLink>
              <div className="nav-item dropdown Categories">
                <NavLink
                  className="nav-link"
                  exact to="/danhmuckhoahoc"
                  id="navbarDropdown"
                >
                  <i className="fa fa-th"></i>
                  Danh Mục Khoá Học
                </NavLink>
              </div>

              <form className="form__search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for anything"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <Link
                      to="/"
                      className="btn input__group_text"
                      id="basic-addon2"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fas fa-search"></i>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col__display">
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
                          ? userLogin.hoTen.substring(0, 8) + "..."
                          : userLogin.hoTen
                      }`}
                    </NavLink>
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
                      className="nav-link btn-custom-login mr-3"
                    >
                      Đăng nhập
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/register"
                      className="nav-link btn-custom-logout"
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
