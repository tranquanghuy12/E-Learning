import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import './ModalCapNhatNguoiDung.scss';
import { capNhatThongTinNguoiDung } from "../../redux/actions/QuanLyNguoiDungAction";
import { CapNhatNguoiDungSchema } from "../../services/NguoiDungSchema";

const ModalCapNhatNguoiDung = (props) => {
  const dispatch = useDispatch();
  const userProfile = props.userProfile;
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
        taiKhoan: userProfile.taiKhoan || "",
        matKhau: userProfile.matKhau || "",
        hoTen: userProfile.hoTen || "",
        soDT: userProfile.soDT || "",
        maNhom: userProfile.maNhom ? userProfile.maNhom : "GP01",
        email: userProfile.email || "",
        maLoaiNguoiDung: userProfile.maLoaiNguoiDung
          ? userProfile.maLoaiNguoiDung
          : "",
      }}
      onSubmit={(values) => {
        suaThongTinNguoiDung(values);
      }}
      validationSchema={CapNhatNguoiDungSchema}
      render={(formikProps) => (
        <Form>
          <button
            type="button"
            className="btn bg__color_edit"
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
                    <label htmlFor="taiKhoan">Tài khoản</label>
                    <Field
                      className="form-control"
                      value={formikProps.values.taiKhoan}
                      type="text"
                      name="taiKhoan"
                      onChange={formikProps.handleChange}
                      disabled
                    />
                    <ErrorMessage name="taiKhoan" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="matKhau">Mật khẩu</label>
                    <Field
                      className="form-control"
                      value={formikProps.values.matKhau}
                      type={passwordShow ? "text" : "password"}
                      name="matKhau"
                      onChange={formikProps.handleChange}
                    />
                    {passwordShow ? (
                      <i className="fas fa-eye flexIcon" onClick={togglePassword}></i>
                    ) : (
                      <i
                        className="far fa-eye-slash flexIcon"
                        onClick={togglePassword}
                      ></i>
                    )}
                    <ErrorMessage name="matKhau" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="soDT">Số điện thoại</label>
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
                    <label htmlFor="hoTen">Họ tên</label>
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
                    <label htmlFor="maLoaiNguoiDung">Mã loại</label>
                    <Field
                      as="select"
                      className="form-control"
                      value={formikProps.values.maLoaiNguoiDung}
                      type="select"
                      name="maLoaiNguoiDung"
                      onChange={formikProps.handleChange}
                    >
                      <option value="HV">HV</option>
                      <option value="GV">GV</option>
                    </Field>
                    <ErrorMessage name="maLoaiNguoiDung" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="maNhom">Mã nhóm</label>
                    <Field
                      className="form-control"
                      as="select"
                      value={formikProps.values.maNhom}
                      type="select"
                      name="maNhom"
                      onChange={formikProps.handleChange}
                    >
                      <option value="GP01">GP01</option>
                      <option value="GP02">GP02</option>
                      <option value="GP03">GP03</option>
                      <option value="GP04">GP04</option>
                      <option value="GP05">GP05</option>
                      <option value="GP06">GP06</option>
                      <option value="GP07">GP07</option>
                      <option value="GP08">GP08</option>
                      <option value="GP09">GP09</option>
                      <option value="GP10">GP10</option>
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
