import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function RegisterPhu() {
  const initialValues = {
    email: "",
    hoTen: "",
    maNhom: "GP01",
    soDT: "",
    taiKhoan: "",
    matKhau: "",
  };
  const dispatch = useDispatch();
  const { userRegister } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setIsSubmit(true);
    setFormValues({ ...formValues, [name]: value });
  };
  console.log("userRegister", userRegister);
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     hoTen: "",
  //     maNhom: "GP01",
  //     soDT: "",
  //     taiKhoan: "",
  //     matKhau: "",
  //   },
  //   onSubmit: (values) => {
  //     const action = dangKyAction(values);
  //     dispatch(action);
  //     console.log("values dangKy", values);
  //   },
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    const action = dangKyAction(formValues);
    dispatch(action);
    console.log("values dangKy", formValues);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const regexPhoneVN = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if (!values.taiKhoan) {
      errors.taiKhoan = "* Không được để trống";
    }
    if (!values.soDT) {
      errors.soDT = "* Không được để trống";
    } else if (!regexPhoneVN.test(values.soDT)) {
      errors.soDT = "* Định dạng Số điện thoại không hợp lệ";
    }
    if (!values.email) {
      errors.email = "* Không được để trống";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "* Định dạng Email không hợp lệ";
    }
    if (!values.matKhau) {
      errors.matKhau = "* Không được để trống";
    }
    if (!values.hoTen) {
      errors.hoTen = "* Không được để trống";
    }
    return errors;
  };
  return (
    <div className="w-50 mx-auto container">
      <h5 className="display-4 text-center">Đăng ký</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tài khoản: </label>
          <input
            placeholder="Nhập tài khoản"
            value={formValues.taiKhoan}
            className="form-control"
            name="taiKhoan"
            onChange={handleChange}
          />
          <p>{formErrors.taiKhoan}</p>
        </div>
        <div className="form-group">
          <label>Mật khẩu: </label>
          <input
            placeholder="Nhập mật khẩu"
            value={formValues.matKhau}
            className="form-control"
            name="matKhau"
            onChange={handleChange}
          />
          <p>{formErrors.matKhau}</p>
        </div>
        <div className="form-group">
          <label>Họ tên: </label>
          <input
            placeholder="Nhập họ tên"
            value={formValues.hoTen}
            className="form-control"
            name="hoTen"
            onChange={handleChange}
          />
          <p>{formErrors.hoTen}</p>
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            placeholder="Nhập email"
            value={formValues.email}
            className="form-control"
            name="email"
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="form-group">
          <label>Số điện thoại: </label>
          <input
            placeholder="Số điện thoại"
            value={formValues.soDT}
            className="form-control"
            name="soDT"
            onChange={handleChange}
          />
          <p>{formErrors.soDT}</p>
        </div>
        <div className="form-group">
          <label>Mã nhóm: </label>
          <select
            value={formValues.maNhom}
            component="select"
            name="maNhom"
            className="form-control"
            onChange={handleChange}
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
          <button type="submit" className="btn btn-success">
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
}
