import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch, useSelector } from "react-redux";
import { DangKySchema } from "../../services/NguoiDungSchema";

export default function Register(props) {
  const dispatch = useDispatch();
  return (
    <div className="w-50 mx-auto container">
      <h3>Đăng ký</h3>
      <Formik
        initialValues={{
          email: "",
          hoTen: "",
          maNhom: "GP01",
          soDT: "",
          taiKhoan: "",
          matKhau: "",
        }}
        validationSchema={DangKySchema}
        onSubmit={(values) => {
          const action = dangKyAction(values);
          dispatch(action);
        }}
        render={(formikProps) => (
          <Form>
            <div className="form-group">
              <label>Tài khoản</label>
              <Field
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="taiKhoan" />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <Field
                className="form-control"
                name="matKhau"
                type="password"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="matKhau" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <Field
                className="form-control"
                name="email"
                type="email"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="email" />
            </div>
            <div className="form-group">
              <label>Họ tên: </label>
              <Field
                placeholder="Nhập họ tên"
                className="form-control"
                name="hoTen"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="hoTen" />
            </div>
            <div className="form-group">
              <label>Số điện thoại: </label>
              <Field
                placeholder="Số điện thoại"
                className="form-control"
                name="soDT"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="soDT" />
            </div>
            <div className="form-group">
              <label>Mã nhóm: </label>
              <Field
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
              </Field>
              <ErrorMessage name="maNhom" />
            </div>
            <button className="btn btn-secondary mr-2" type="submit">
              Trở về
            </button>

            <button className="btn btn-primary" type="submit">
              Đăng ký
            </button>
          </Form>
        )}
      />
    </div>
  );
}
