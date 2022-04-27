import React from "react";
// import styles from "./Login.module.css";

import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function NormalLoginForm(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector(rootReducer=>rootReducer.QuanLyNguoiDungReducer)
  console.log("userLogin useSelector: ", userLogin);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("values onSubmit", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container">
      <h3 className="text-center">Đăng nhập</h3>
      <div className="form-group">
        <label>Tài khoản</label>
        <input
          type="text"
          name="taiKhoan"
          className="form-control"
          onChange={formik.handleChange}
          placeholder="Nhập vào tài khoản"
        />
      </div>
      <div className="form-group">
        <label>Mật khẩu</label>
        <input
          type="text"
          name="matKhau"
          className="form-control"
          onChange={formik.handleChange}
          placeholder="Nhập vào mật khẩu"
        />
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <button type="submit" className="btn btn-success mr-2">Đăng nhập</button>
        </div>
        <div>
          <NavLink to="/register" className="btn btn-primary">
            Đăng ký
          </NavLink>
        </div>
      </div>
    </form>
  );
}
