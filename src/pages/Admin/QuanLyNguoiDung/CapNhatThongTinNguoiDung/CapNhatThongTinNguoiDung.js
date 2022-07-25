import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  adminCapNhatThongTinNguoiDungAction,
  adminChiTietNguoiDungAction,
} from "../../../../redux/actions/AdminQuanLyAction";
import { CapNhatNguoiDungSchema } from "../../../../services/NguoiDungSchema";

export default function CapNhatThongTinNguoiDung(props) {
  const dispatch = useDispatch();
  const { taiKhoan } = useParams();
  const [passwordShow, setPasswordShow] = useState(false);

  useEffect(() => {
    dispatch(adminChiTietNguoiDungAction());
  }, [dispatch]);

  const { dsChiTietNguoiDung } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyNguoiDungReducer
  );
  let nguoiDung = {};
  if (dsChiTietNguoiDung) {
    for (const iterator of dsChiTietNguoiDung) {
      if (iterator.taiKhoan === taiKhoan) {
        nguoiDung = iterator;
      }
    }
  }
  const capNhatThongTinNguoiDung = (values) => {
    swal({
      title: "Bạn có chắc chắn muốn sửa không?",
      text: "Bạn sẽ không thể phục hồi",
      icon: "warning",
      buttons: ["Cancel", "Submit"],
    }).then((result) => {
      if (result === true) {
        dispatch(adminCapNhatThongTinNguoiDungAction(values));
      }
    });
  };

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <Formik
      enableReinitialize="true"
      initialValues={{
        taiKhoan: nguoiDung.taiKhoan || "",
        matKhau: nguoiDung.matKhau || "",
        hoTen: nguoiDung.hoTen || "",
        soDT: nguoiDung.soDt || "",
        maNhom: nguoiDung.maNhom ? nguoiDung.maNhom : "GP01",
        email: nguoiDung.email || "",
        maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung
          ? nguoiDung.maLoaiNguoiDung
          : "",
      }}
      onSubmit={(values) => {
        capNhatThongTinNguoiDung(values);
      }}
      validationSchema={CapNhatNguoiDungSchema}
      render={(formikProps) => {
        return (
          <Form className="container mb-5 mt-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className="style__navlink" to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="style__navlink" to="/admin">
                    Admin
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link className="style__navlink" to="/admin/quanlykhoahoc">
                    Quản lý người dùng
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cập nhật thông tin người dùng
                </li>
              </ol>
            </nav>

            <div className="container mt-5">
              <h2 className="text-center">Sửa thông tin người dùng</h2>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Tài khoản</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="taiKhoan"
                      onChange={formikProps.handleChange}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group position-relative">
                    <label>Mật khẩu</label>
                    <Field
                      className="form-control"
                      type={passwordShow ? "text" : "password"}
                      name="matKhau"
                      onChange={formikProps.handleChange}
                    />
                    {passwordShow ? (
                      <i
                        style={{ top: "42px", right: "8px" }}
                        className={`fas fa-eye position-absolute`}
                        onClick={togglePassword}
                      ></i>
                    ) : (
                      <i
                        style={{ top: "42px", right: "8px" }}
                        className={`far fa-eye-slash position-absolute`}
                        onClick={togglePassword}
                      ></i>
                    )}
                    <ErrorMessage name="matKhau">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Email</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="email"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="email">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="soDT"
                      onChange={formikProps.handleChange}
                    />
                    <ErrorMessage name="soDT">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Họ tên</label>
                <Field
                  className="form-control"
                  type="text"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hoTen">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Mã loại người dùng</label>
                    <Field
                      as="select"
                      className="form-control"
                      name="maLoaiNguoiDung"
                      onChange={formikProps.handleChange}
                    >
                      <option value="HV">Học viên</option>
                      <option value="GV">Giáo vụ</option>
                    </Field>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Mã nhóm</label>
                    <Field
                      className="form-control"
                      as="select"
                      name="maNhom"
                      onChange={formikProps.handleChange}
                    >
                      <option value="GP01">GP01</option>
                      <option value="GP02">GP02</option>
                      <option value="GP03">GP03</option>
                      <option value="GP04">GP04</option>
                      <option value="GP05">GP05</option>
                    </Field>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4 mb-5 p-0 ml-0 mr-0">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button type="submit" className="ml-3 btn btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    />
  );
}
