import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";
import { DangKySchema } from "../../services/NguoiDungSchema";
import signUp from "../../assets/img/signup.jpg";
import styles from "../Register/Register.module.css";

export default function Register(props) {
  
  const dispatch = useDispatch();
  return (
    <div className={`${styles.containerRegister}`}>
      
      <div className="vh-100 mx-auto">
        <div className="container">
          <div className={`row align-items-center ${styles.contentRegister}`}>
            <div className="col-md-6 mb-3 ">
              <img src={signUp} className="img-fluid" alt="đăng ký" />
            </div>
            <div className="col-md-6">
              <h1 className={`${styles.signupText} text-center`}>Đăng ký</h1>
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
                        className={`form-control ${styles.formControlRegister}`}
                        name="taiKhoan"
                        onChange={formikProps.handleChange}
                        placeholder='Nhập tài khoản'
                      />
                      <ErrorMessage name="taiKhoan" />
                    </div>
                    <div className="form-group">
                      <label>Mật khẩu</label>
                      <Field
                        className={`form-control ${styles.formControlRegister}`}
                        name="matKhau"
                        type="password"
                        onChange={formikProps.handleChange}
                        placeholder='Nhập nhập khẩu'
                      />
                      <ErrorMessage name="matKhau" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        className={`form-control ${styles.formControlRegister}`}
                        name="email"
                        type="email"
                        onChange={formikProps.handleChange}
                        placeholder='Nhập email'
                      />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="form-group">
                      <label>Họ tên: </label>
                      <Field
                        placeholder="Nhập họ tên"
                        className={`form-control ${styles.formControlRegister}`}
                        name="hoTen"
                        onChange={formikProps.handleChange}
                      />
                      <ErrorMessage name="hoTen" />
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại: </label>
                      <Field
                        placeholder="Số điện thoại"
                        className={`form-control ${styles.formControlRegister}`}
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
                        className={`form-control ${styles.formControl}`}
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

                      <div className="d-flex justify-content-center mt-5">
                        <button
                          className={`btn ${styles.btnClassReturn} mr-2 `}
                          type="submit"
                        >
                          Trở về
                        </button>
                        <button
                          className={`btn ${styles.btnClass}`}
                          type="submit"
                        >
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
      </div>
    </div>
  );
}
