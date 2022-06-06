import React, { useEffect } from "react";
import "./main.scss";
import loginSvg from "../../assets/img/login.svg";
import { Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { Link } from "react-router-dom";

export default function Login(props) {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
    },
  });

  return (
    <div className="container containerLogin bg__login">
      <div className="row contentLogin align-items-center">
        <div className="col-md-6 mb-3">
          <img src={loginSvg} className="img" alt="image" />
        </div>
        <div className="col-md-6">
          <h2 className="signinText mb-3 text-center">Đăng nhập</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12 form-group">
                <label className="signin__label" htmlFor="taiKhoan">
                  Tài khoản
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="taiKhoan"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-12 form-group">
                <label className="signin__label" htmlFor="password">
                  Mật khẩu
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="matKhau"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-6 form-check">
                <label
                  className="signin__label form-check-label"
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="signin__label"
                    id="checkbox"
                  />
                  Duy trì đăng nhập
                </label>
              </div>
              <div className="col-6 form-group">
                <p className="text-right">
                  <Link to="#">Quên mật khẩu</Link>
                </p>
              </div>
              <div className="col-12">
                <button type="submit" className="col-12 btn btn-custom">
                  Tiếp theo
                </button>
              </div>
              <div className="col-12 mt-2">
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p className="btn-text">
                    <b>Sign in with google</b>
                  </p>
                </div>
              </div>
              <div className="col-12 text-center mt-5">
                <Link to="/register">
                  <p className="login__dangky">Đăng ký</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
