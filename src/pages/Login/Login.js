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
      <div className='row contentLogin align-items-center'>
        <div className="col-md-6 mb-3">
          <img src={loginSvg} className="img-fluid" alt="image" />
        </div>
        <div className="col-md-6">
          <h2 className='signinText mb-3 text-center'>Đăng nhập</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label className="signin__label" htmlFor="taiKhoan">Tài khoản</label>
              <input
                className='form-control'
                type="text"
                name="taiKhoan"
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="signin__label" htmlFor="password">Mật khẩu</label>
              <input
                className='form-control'
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
              />
            </div>
            <div className='form-check'>
              <input
                type="checkbox"
                name="checkbox"
                className="form-check-input signin__label"
                id="checkbox"
              />
              <label className="form-check-label signin__label" htmlFor="checkbox">
                Duy trì đăng nhập
              </label>
            </div>
            <p className="text-center text-white">
              Nếu bạn quên mật khẩu. <Link href="/">Nhấp vào đây</Link>
            </p>
            <div className="row text-center mt-5">
              <div className="col-6">
                <button type="submit" className="btn btn-custom">
                  Tiếp theo
                </button>
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-custom-1">
                  Đăng ký
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
