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
import { ErrorMessage, useFormik, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/ThongTinNguoiDungAction";
import { LoginSchema } from "../../services/NguoiDungSchema";

const UserLogin = () => {
  const dispatch = useDispatch();
  const initialValues = {
    taiKhoan: "",
    matKhau: "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
    const action = dangNhapAction(values);
    dispatch(action);
  };

  return (
    <div className="container__style_login">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          console.log("formikProps", formikProps);

          return (
            <Form style={{ height: window.innerHeight }}>
              <div
                className="login__form"
                style={{ height: window.innerHeight }}
              >
                <div>
                  <h3 className="text-center display-4">ĐĂNG NHẬP</h3>
                  <div className="d-flex mt-3">
                    <Input
                      className="input__style"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      size="large"
                      name="taiKhoan"
                      type="text"
                      placeholder="Nhập tài khoản"
                      prefix={<UserOutlined />}
                    />
                  </div>
                  {/* {errors.taiKhoan && touched.taiKhoan ? (
                    <div className="text-danger">{errors.taiKhoan}</div>
                  ) : null} */}
                  <ErrorMessage name="taiKhoan">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>

                  <div className="d-flex mt-3">
                    <Input
                      className="input__style"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      name="matKhau"
                      type="password"
                      size="large"
                      placeholder="Nhập mật khẩu"
                      prefix={<LockOutlined />}
                    />
                  </div>
                  {/* {errors.matKhau && touched.matKhau ? (
                    <div className="text-danger">{errors.matKhau}</div>
                  ) : null} */}
                  <ErrorMessage name="matKhau">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>

                <button className="button__register_login_style" type="submit">
                  Đăng nhập
                </button>

                <div className="social d-flex mt-3">
                  <Button
                    className="mt-2 mr-2"
                    type="primary"
                    icon={<FacebookOutlined />}
                    size="large"
                    shape="circle"
                    style={{
                      backgroundColor: "rgb(59,89,152)",
                      border: "none",
                    }}
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
                    style={{
                      backgroundColor: "RGB(239, 61, 61)",
                      border: "none",
                    }}
                  ></Button>
                </div>

                <div className="login__help">
                  <Link className="mb-2" to="/quenmatkhau">
                    Quên mật khẩu?
                  </Link>
                  <Link to="/register">Bạn chưa có tài khoản?</Link>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UserLogin;
