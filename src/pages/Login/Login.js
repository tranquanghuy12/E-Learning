import React from "react";
import "./Login.scss";
import * as Yup from "yup";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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
      console.log("values", values);
      const action = dispatch(dangNhapAction(values));
      dispatch(action);
    },
    validationSchema: SignupSchema,
  });
  return (
    <div className="container__style_login">
      <form
        onSubmit={formik.handleSubmit}
        style={{ height: window.innerHeight }}
      >
        <div className="login__form" style={{ height: window.innerHeight }}>
          <div>
            <h3 className="text-center display-4">ĐĂNG NHẬP</h3>
            <div className="d-flex mt-3">
              <Input
                className="input__style"
                onChange={formik.handleChange}
                size="large"
                name="taiKhoan"
                type="text"
                placeholder="Nhập tài khoản"
                prefix={<UserOutlined />}
              />
            </div>
            <div className="text-danger">{formik.errors.taiKhoan}</div>

            <div className="d-flex mt-3">
              <Input
                className="input__style"
                onChange={formik.handleChange}
                name="matKhau"
                type="password"
                size="large"
                placeholder="Nhập mật khẩu"
                prefix={<LockOutlined />}
              />
            </div>
            <div className="text-danger">{formik.errors.matKhau}</div>
            <button className="mt-5 button__register_login_style" type="submit">
              Đăng nhập
            </button>
          </div>

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

          <div className="login__help">
            <Link className="mb-2" to="/quenmatkhau">
              Quên mật khẩu?
            </Link>
            <Link to="/register">Bạn chưa có tài khoản?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
