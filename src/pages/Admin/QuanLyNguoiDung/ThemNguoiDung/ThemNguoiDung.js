import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";

import { SignupSchema } from "../../../../services/NguoiDungSchema";
import { adminThemNguoiDungAction } from "../../../../redux/actions/AdminQuanLyAction";
import { Link } from "react-router-dom";

export default function ThemNguoiDung({ maLoaiNguoiDung }) {
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/">
              Trang chủ
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/admin">
              Quản trị
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link className="style__navlink" to="/admin/quanlynguoidung">
              Quản lý người dùng
            </Link>
          </li>
          <li className="breadcrumb-item">Thêm người dùng</li>
        </ol>
      </nav>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-12">
          <h2 className="text-center">Thêm người dùng</h2>
          <Formik
            initialValues={
              {
                email: "",
                hoTen: "",
                maNhom: "GP01",
                soDT: "",
                taiKhoan: "",
                matKhau: "",
                maLoaiNguoiDung: "GV",
              } || ""
            }
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              const action = adminThemNguoiDungAction(values);
              dispatch(action);
            }}
            render={(formikProps) => (
              <Form>
                <div className="form-group">
                  <label>Tài khoản</label>
                  <Field
                    type="text"
                    className={`form-control`}
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                    placeholder="Nhập tài khoản"
                  />
                  <ErrorMessage name="taiKhoan">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <Field
                    className={`form-control`}
                    name="matKhau"
                    type="password"
                    onChange={formikProps.handleChange}
                    placeholder="Nhập nhập khẩu"
                  />
                  <ErrorMessage name="matKhau">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <Field
                    className={`form-control`}
                    name="email"
                    type="email"
                    onChange={formikProps.handleChange}
                    placeholder="Nhập email"
                  />
                  <ErrorMessage name="email">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Họ tên: </label>
                  <Field
                    placeholder="Nhập họ tên"
                    className={`form-control`}
                    name="hoTen"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="hoTen">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Số điện thoại: </label>
                  <Field
                    placeholder="Số điện thoại"
                    className={`form-control `}
                    name="soDT"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="soDT">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label>Mã loại người dùng</label>
                  <Field
                    component="select"
                    name="maLoaiNguoiDung"
                    className="form-control"
                    onChange={formikProps.handleChange}
                  >
                    <option value="GV">Giáo vụ</option>
                    <option value="HV">Học viên</option>
                  </Field>
                </div>
                <div className="form-group">
                  <label>Mã nhóm: </label>
                  <Field
                    component="select"
                    name="maNhom"
                    className={`form-control`}
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

                  <div className="d-flex justify-content-center mt-5 mb-5">
                    <Link to="/admin/quanlynguoidung">
                      <button className="btn mr-2 btn-danger">Trở về</button>
                    </Link>
                    <button className="btn btn-success" type="submit">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
