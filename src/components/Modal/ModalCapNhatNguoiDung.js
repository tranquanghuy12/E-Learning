import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import styles from "./ModalCapNhatNguoiDung.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import { capNhatThongTinNguoiDung } from "../../redux/actions/QuanLyNguoiDungAction";
import { CapNhatNguoiDungSchema } from "../../services/NguoiDungSchema";

const ModalCapNhatNguoiDung = (props) => {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );

  const suaThongTinNguoiDung = (values) => {
    swal({
      title: "Bạn có chắc chắn muốn sửa không?",
      text: "Bạn sẽ không thể phục hồi",
      showCancelButton: true,
      icon: "warning",
      confirmButtonText: "Chắc chắn",
    }).then((result) => {
      if (result === true) {
        console.log("suaThongTin", values);
        dispatch(capNhatThongTinNguoiDung(values));
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
        taiKhoan: userProfile.taiKhoan,
        matKhau: userProfile.matKhau,
        hoTen: userProfile.hoTen,
        soDT: userProfile.soDT,
        maNhom: userProfile.maNhom ? userProfile.maNhom : "GP01",
        email: userProfile.email,
        maLoaiNguoiDung: userProfile.maLoaiNguoiDung
          ? userProfile.maLoaiNguoiDung
          : "HV",
      }}
      onSubmit={(values) => {
        suaThongTinNguoiDung(values);
      }}
      validationSchema={CapNhatNguoiDungSchema}
      render={(formikProps) => (
        <Form>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fas fa-edit"></i>
            Sửa thông tin
          </button>
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sửa thông tin người dùng</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
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
                  <div className="form-group">
                    <label>Mật khẩu</label>
                    <Field
                      className="form-control"
                      value={formikProps.values.matKhau}
                      type={passwordShow ? "text" : "password"}
                      name="matKhau"
                      onChange={formikProps.handleChange}
                    />
                    {passwordShow ? (
                      <i
                        className={`fas fa-eye ${styles.flexIcon}`}
                        onClick={togglePassword}
                      ></i>
                    ) : (
                      <i
                        className={`far fa-eye-slash ${styles.flexIcon}`}
                        onClick={togglePassword}
                      ></i>
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
                      <option>HV</option>
                      <option>GV</option>
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
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    />
  );
};
export default ModalCapNhatNguoiDung;
