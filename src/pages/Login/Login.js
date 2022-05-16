import React, { useEffect } from "react";
import "./main.scss";
import loginSvg from "../../assets/img/login.svg";
import { Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

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
    <div className="container-fluid bg__login">
      <div className='row contentLogin align-items-center'>
        <div className="col-md-6 mb-3">
          <img src={loginSvg} className="img-fluid" alt="image" />
        </div>
        <div className="col-md-6">
          <h2 className={`signinText mb-3`}>Đăng nhập</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="taiKhoan">Tài khoản</label>
              <input
                className='form-control'
                type="text"
                name="taiKhoan"
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                className='form-control'
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
              />
            </div>
            <div className='form-check pl-0'>
              <input
                type="checkbox"
                name="checkbox"
                className="form-check-input"
                id="checkbox"
              />
              <label className="form-check-label ml-4" htmlFor="checkbox">
                Duy trì đăng nhập
              </label>
            </div>
            <p className="text-center">
              Nếu bạn quên mật khẩu. <a href="#">Nhấp vào đây</a>
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
