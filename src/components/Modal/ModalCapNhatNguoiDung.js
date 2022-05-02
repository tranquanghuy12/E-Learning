import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import * as yup from "yup";
import { capNhatThongTinNguoiDung } from "../../redux/actions/QuanLyNguoiDungAction";
import { ACCESSTOKEN } from "../../util/setting/config";

const ModalCapNhatNguoiDung = (props) => {
  const dispatch = useDispatch();
  const { userProfile } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );
  console.log("user", userProfile);
  const suaThongTinNguoiDung = (values) => {
    swal({
      title: "Bạn có chắc chắn muốn sửa không?",
      text: "Bạn sẽ không thể phục hồi",
      showCancelButton: true,
      icon: "warning",
      confirmButtonText: "Chắc chắn",
    });
    dispatch(capNhatThongTinNguoiDung(values));
  };
  let [edit, setEdit] = useState(true);
  const editField = (flag) => {
    setEdit(flag);
  };
  const pointerStyle = {
    pointerEvents: "none",
    cursor: "no-drop",
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: userProfile.taiKhoan,
      matKhau: userProfile.matKhau,
      hoTen: userProfile.hoTen,
      soDT: userProfile.soDT,
      maNhom: userProfile.maNhom ? userProfile.maNhom : "GP01",
      email: userProfile.email,
      maLoaiNguoiDung: userProfile.maLoaiNguoiDung
        ? userProfile.maLoaiNguoiDung
        : "HV",
    },
    onSubmit: (values) => {
      suaThongTinNguoiDung(values);
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup.string().required("* Field is required"),
      hoTen: yup.string().required("* Field is required"),
      soDT: yup
        .string()
        .matches(/^[0-9]+$/)
        .required("* Field is required"),
      email: yup
        .string()
        .email("* Email is invalid")
        .required("* Field is required"),
      matKhau: yup.string().required("* Field is required"),
      maNhom: yup.string().required("* Field is required"),
    }),
  });
  console.log(formik.validationSchema);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#modelId"
      >
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
            <form className="modal-body" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>Tài khoản</label>
                <input
                  className="form-control"
                  value={formik.values.taiKhoan}
                  type="text"
                  name="taiKhoan"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  className="form-control"
                  value={formik.values.matKhau}
                  type="password"
                  name="matKhau"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  value={formik.values.email}
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  className="form-control"
                  value={formik.values.soDT}
                  type="number"
                  name="soDT"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Họ tên</label>
                <input
                  className="form-control"
                  value={formik.values.hoTen}
                  type="text"
                  name="hoTen"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mã loại</label>
                <select
                  className="form-control"
                  value={formik.values.maLoaiNguoiDung}
                  type="select"
                  name="maLoaiNguoiDung"
                  onChange={formik.handleChange}
                >
                  <option>HV</option>
                  <option>GV</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mã nhóm</label>
                <select
                  className="form-control"
                  value={formik.values.maNhom}
                  type="select"
                  name="maNhom"
                  onChange={formik.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                </select>
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalCapNhatNguoiDung;
