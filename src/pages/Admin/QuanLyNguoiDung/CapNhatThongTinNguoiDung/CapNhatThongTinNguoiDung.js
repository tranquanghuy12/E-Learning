import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  capNhatThongTinNguoiDungAdmin,
  chiTietNguoiDungAdminAction,
} from "../../../../redux/actions/AdminQuanLyAction";
import { CapNhatNguoiDungSchema } from "../../../../services/NguoiDungSchema";

export default function CapNhatThongTinNguoiDung() {
  const dispatch = useDispatch();
  const { taiKhoan } = useParams();

  useEffect(() => {
    dispatch(chiTietNguoiDungAdminAction());
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
  console.log("user", nguoiDung);
  const capNhatThongTinNguoiDung = (values) => {
    swal({
      title: "Bạn có chắc chắn muốn sửa không?",
      text: "Bạn sẽ không thể phục hồi",
      showCancelButton: true,
      icon: "warning",
      confirmButtonText: "Chắc chắn",
    }).then((result) => {
      if (result === true) {
        dispatch(capNhatThongTinNguoiDungAdmin(values));
      }
    });
  };
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <Formik
      enableReinitialize="true"
      initialValues={{
        taiKhoan: nguoiDung.taiKhoan,
        matKhau: nguoiDung.matKhau,
        hoTen: nguoiDung.hoTen,
        soDT: nguoiDung.soDt,
        maNhom: nguoiDung.maNhom ? nguoiDung.maNhom : "GP01",
        email: nguoiDung.email,
        maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung
          ? nguoiDung.maLoaiNguoiDung
          : "HV",
      }}
      onSubmit={(values) => {
        capNhatThongTinNguoiDung(values);
      }}
      validationSchema={CapNhatNguoiDungSchema}
      render={(formikProps) => (
        <Form>
          <div className="container mt-5">
          <h1>Sửa thông tin người dùng</h1>
            <div className="form-group">
              <label>Tài khoản</label>
              <Field
                className="form-control"
                value={formikProps.values.taiKhoan}
                type="text"
                name="taiKhoan"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="taiKhoan" />
            </div>
            <div className="form-group position-relative">
              <label>Mật khẩu</label>
              <Field
                className="form-control"
                value={formikProps.values.matKhau}
                type={passwordShow ? "text" : "password"}
                name="matKhau"
                onChange={formikProps.handleChange}
              />
              {passwordShow ? (
                <i style={{top:'37px',right:'8px'}} className={`fas fa-eye position-absolute`} onClick={togglePassword}></i>
              ) : (
                <i style={{top:'37px',right:'8px'}} className={`far fa-eye-slash position-absolute`} onClick={togglePassword}></i>
              )}
              <ErrorMessage name="matKhau" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <Field
                className="form-control"
                value={formikProps.values.email}
                type="text"
                name="email"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="email" />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <Field
                className="form-control"
                value={formikProps.values.soDT}
                type="number"
                name="soDT"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="soDT" />
            </div>
            <div className="form-group">
              <label>Họ tên</label>
              <Field
                className="form-control"
                value={formikProps.values.hoTen}
                type="text"
                name="hoTen"
                onChange={formikProps.handleChange}
              />
              <ErrorMessage name="hoTen" />
            </div>
            <div className="form-group">
              <label>Mã loại</label>
              <Field
                component="select"
                className="form-control"
                value={formikProps.values.maLoaiNguoiDung}
                type="select"
                name="maLoaiNguoiDung"
                onChange={formikProps.handleChange}
              >
                <option>Học viên</option>
                <option>Giáo vụ</option>
              </Field>
              <ErrorMessage name="maLoaiNguoiDung" />
            </div>
            <div className="form-group">
              <label>Mã nhóm</label>
              <Field
                className="form-control"
                component="select"
                value={formikProps.values.maNhom}
                type="select"
                name="maNhom"
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
            <div className="text-center">
              <button type="submit " className="mr-5 btn btn-success">
                Sửa thông tin
              </button>
              <button type="button" className="btn btn-danger">
                Rời khỏi
              </button>
            </div>
          </div>
        </Form>
      )}
    />
  );
}
