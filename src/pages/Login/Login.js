import React, { useEffect } from "react";
import styles from "../Login/Login.module.css";
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
    <div className={`${styles.containerLogin}`}>
      <div className={`row ${styles.contentLogin}`}>
        <div className="col-md-6 mb-3">
          <img src={loginSvg} className="img-fluid" alt="image" />
        </div>
        <div className="col-md-6">
          <h2 className={`${styles.signinText} mb-3`}>Đăng nhập</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="taiKhoan">Tài khoản</label>
              <input
                className={`form-control ${styles.formControl}`}
                type="text"
                name="taiKhoan"
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                className={`form-control ${styles.formControl}`}
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
              />
            </div>
            <div className={`form-check ${styles.formCheck}`}>
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
                <button
                  type="submit"
                  className={`btn btn-class ${styles.btnClassLogin}`}
                >
                  Tiếp theo
                </button>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className={`btn btn-class ${styles.btnClass}`}
                >
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
