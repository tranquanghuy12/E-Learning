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
  console.log("userLoginTest", userLogin);
  console.log("danhmuckhoahoc", mangDanhMucKhoaHoc);
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
        <nav className="bg-light navbar navbar-expand-md d-flex justify-content-between flex-row px-4">
          <div className="col-sm-1 d-md-none d-lg-none">
            <div className="nav-item dropdown displayWhenSmallScreen">
              <Link
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="#"
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {danhMucKhoaHocCollapse()}
                {userLogin.taiKhoan ? (
                  <>
                    <Link className="dropdown-item" to="">
                      {`Xin chào, ${
                        userLogin.hoTen.toString().length > 15
                          ? userLogin.hoTen.substring(0, 8) + "..."
                          : userLogin.hoTen
                      }`}
                    </Link>
                    <Link className="dropdown-item" onClick={logout} to="">
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
          <div className="col-sm-11 col-md-12 col-lg-9">
            <div className="header__left d-flex justify-content-start flex-row align-items-start">
              <NavLink className="navbar-brand text-center" to="/">
                <img src={logo} alt="logo" />
              </NavLink>
              <div className="nav-item dropdown Categories">
                <Link
                  className="nav-link"
                  to="/danhmuckhoahoc"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-th"></i>
                  Danh Mục Khoá Học
                </Link>
              </div>

              <form className="form__search ml-5">
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
                      className="input-group-text"
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
          <div className="col-lg-3 d-flex justify-content-between flex-row-reverse">
            <div className="header__right">
              <ul className="navbar-nav d-flex float-right align-items-center flex-row-reverse">
                {userLogin.taiKhoan ? (
                  <>
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className="navlink logout"
                        onClick={logout}
                      >
                        <i className="fas fa-sign-out-alt  test__scss"></i>
                        Đăng xuất
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/profile" className="navlink nameUser">
                        {`Xin chào, ${
                          userLogin.hoTen.toString().length > 10
                            ? userLogin.hoTen.substring(0, 8) + "..."
                            : userLogin.hoTen
                        }`}
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink to="/login" className="navlink signIn">
                        Đăng nhập
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/register" className="navlink signUp">
                        Đăng ký
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
