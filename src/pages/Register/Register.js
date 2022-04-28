import { Field, Form, Formik } from "formik";
import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="w-50 mx-auto">
        <h5 className="display-4 text-center">Sign Up</h5>
        <Formik
          initialValues={{
            email: "",
            hoTen: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            soDT: "",
            taiKhoan: "",
            matKhau: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản: </label>
                <Field
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu: </label>
                <Field
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Họ tên: </label>
                <Field
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <Field
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại: </label>
                <Field
                  className="form-control"
                  name="soDT"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mã loại người dùng: </label>
                <select
                  component="select"
                  name="maLoaiNguoiDung"
                  className="form-control"
                  onChange={formikProps.handleChange}
                >
                  <option>HV</option>
                  <option>GV</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mã nhóm: </label>
                <select
                  component="select"
                  name="maNhom"
                  className="form-control"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </select>
              </div>
              <div>
                <button className="btn btn-success">Đăng ký</button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default Register;
