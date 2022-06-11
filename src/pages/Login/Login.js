import React from "react";
import * as Yup from "yup";
import './main.scss'
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { useFormik, withFormik } from "formik";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

const UserLogin = () => {
  const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string().required("Tài khoản không được trống"),
    matKhau: Yup.string()
      .min(3, "Mật khẩu phải lớn hơn 3 và nhỏ hơn 32!")
      .max(32, "Mật khẩu phải lớn hơn 3 và nhỏ hơn 32!")
      .required("Mật khẩu không được trống"),
  });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const action = dispatch(dangNhapAction(values));
      dispatch(action);
    },
    validationSchema: SignupSchema,
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container"
      style={{ height: window.innerHeight,background:"#FFD302" }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3
          className="text-center display-4"
          style={{ fontWeight: "500", fontSize: "36px" }}
        >
          Login Elearning
        </h3>
        <div className="d-flex mt-3">
          <Input
            onChange={formik.handleChange}
            size="large"
            name="taiKhoan"
            type="text"
            placeholder="Nhập tài khoản"
            style={{ width: "100%", minWidth: "300px" }}
            prefix={<UserOutlined />}
          />
        </div>
        <div className="text-danger">{formik.errors.taiKhoan}</div>

        <div className="d-flex mt-3">
          <Input
            onChange={formik.handleChange}
            name="matKhau"
            type="password"
            size="large"
            style={{ width: "100%", minWidth: "300px" }}
            placeholder="Nhập mật khẩu"
            prefix={<LockOutlined />}
          />
        </div>
        <div className="text-danger">{formik.errors.matKhau}</div>
        <Button
          className="mt-3"
          type="primary"
          size="large"
          htmlType="submit"
          style={{
            minWidth: "300px",
            backgroundColor: "#3A17E5",
            border:'1px solid #3A17E5',
            color: "#fff",
          }}
        >
          Login
        </Button>
        <div className="social d-flex mt-3">
          <Button
            className="mt-2 mr-2"
            type="primary"
            icon={<FacebookOutlined />}
            size="large"
            shape="circle"
            style={{ backgroundColor: "rgb(59,89,152)", border: "none" }}
          ></Button>
          <Button
            className="mt-2 mr-2"
            type="primary"
            icon={<TwitterOutlined />}
            size="large"
            shape="circle"
          ></Button>
          <Button
            className="mt-2 mr-2"
            type="primary"
            icon={<GoogleOutlined />}
            size="large"
            shape="circle"
            style={{ backgroundColor: "RGB(239, 61, 61)", border: "none" }}
          ></Button>
        </div>
        <div className="register mt-5">
          <Link to="/quenmatkhau">Quên mật khẩu</Link>
        </div>
        <div className="register">
          <Link to="/register">Bạn chưa có tài khoản?</Link>
        </div>
      </div>
    </form>
  );
};

export default UserLogin;
