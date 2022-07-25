import React from "react";
import "./Register.scss";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
  MailOutlined,
  InfoCircleOutlined,
  GroupOutlined,
  PhoneOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { Select, Button, Input } from "antd";
import { ErrorMessage, useFormik, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../redux/actions/ThongTinNguoiDungAction";
import { SignupSchema } from "../../services/NguoiDungSchema";

const UserRegister = () => {
  const dispatch = useDispatch();
  const { Option } = Select;

  const initialValues = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    hoTen: "",
    maNhom: "GP01",
    soDT: "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
    const action = dangKyAction(values);
    dispatch(action);
  };

  return (
    <div className="container__style_register">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          {
            /* console.log("formikProps", errors); */
          }

          return (
            <Form
              onSubmit={formikProps.handleSubmit}
              style={{ height: window.innerHeight }}
            >
              <div
                className="register__form"
                style={{ height: window.innerHeight }}
              >
                <div>
                  <h3 className="text-center display-4 mb-5">ĐĂNG KÝ</h3>
                  <div className="d-flex mt-3">
                    <Input
                      className="input__style"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      size="large"
                      name="taiKhoan"
                      type="text"
                      placeholder="Nhập tài khoản"
                      prefix={<UserOutlined />}
                    />
                  </div>
                  {errors.taiKhoan && touched.taiKhoan ? (
                    <div className="text-danger">{errors.taiKhoan}</div>
                  ) : null}

                  <div className="d-flex mt-3">
                    <Input
                      className="input__style"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      name="matKhau"
                      type="password"
                      size="large"
                      placeholder="Nhập mật khẩu"
                      prefix={<LockOutlined />}
                    />
                  </div>
                  {errors.matKhau && touched.matKhau ? (
                    <div className="text-danger">{errors.matKhau}</div>
                  ) : null}

                  <div className="d-flex mt-3">
                    <Input
                      className="input__style"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      name="hoTen"
                      type="text"
                      size="large"
                      placeholder="Nhập họ tên"
                      prefix={<InfoCircleOutlined />}
                    />
                  </div>
                  {errors.hoTen && touched.hoTen ? (
                    <div className="text-danger">{errors.hoTen}</div>
                  ) : null}

                  <div className="d-flex mt-3">
                    <Input
                      className="input__style"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      name="email"
                      type="text"
                      size="large"
                      placeholder="Nhập email"
                      prefix={<MailOutlined />}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="text-danger">{errors.email}</div>
                  ) : null}

                  <div className="d-flex mt-3">
                    <Input
                      className="input__style"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      name="soDT"
                      type="text"
                      size="large"
                      placeholder="Nhập số điện thoại"
                      prefix={<PhoneOutlined />}
                    />
                  </div>
                  {errors.soDT && touched.soDT ? (
                    <div className="text-danger">{errors.soDT}</div>
                  ) : null}

                  <div className="d-flex mt-3">
                    <Select
                      className="input__style"
                      size="large"
                      // defaultValue="GP01"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      prefix={<GroupOutlined />}
                      placeholder="Nhập mã nhóm"
                    >
                      <Option value="GP01">GP01</Option>
                      <Option value="GP02">GP02</Option>
                      <Option value="GP03">GP03</Option>
                      <Option value="GP04">GP04</Option>
                      <Option value="GP05">GP05</Option>
                    </Select>
                  </div>
                  {errors.maNhom && touched.maNhom ? (
                    <div className="text-danger">{errors.maNhom}</div>
                  ) : null}

                  <button
                    className="button__register_login_style"
                    type="submit"
                  >
                    Đăng Ký
                  </button>
                  <div className="social d-flex justify-content-center align-items-center mt-3">
                    <Button
                      className="mt-2 mr-2"
                      type="primary"
                      icon={<FacebookOutlined />}
                      size="large"
                      shape="circle"
                      style={{
                        backgroundColor: "rgb(59,89,152)",
                        border: "none",
                      }}
                    ></Button>
                    <Button
                      className="mt-2 mr-2"
                      type="primary"
                      icon={<TwitterOutlined />}
                      size="large"
                      shape="circle"
                    ></Button>
                    <Button
                      className="mt-2 mr-2"
                      type="primary"
                      icon={<GoogleOutlined />}
                      size="large"
                      shape="circle"
                      style={{
                        backgroundColor: "RGB(239, 61, 61)",
                        border: "none",
                      }}
                    ></Button>
                  </div>
                  <div className="register__help mt-4">
                    <Link to="/login">Bạn đã có tài khoản?</Link>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UserRegister;

// import React from "react";
// import "./Register.scss";
// import {
//   UserOutlined,
//   LockOutlined,
//   FacebookOutlined,
//   TwitterOutlined,
//   GoogleOutlined,
//   MailOutlined,
//   InfoCircleOutlined,
//   GroupOutlined,
//   PhoneOutlined,
//   RollbackOutlined,
// } from "@ant-design/icons";
// import { Select, Button, Input, Form } from "antd";
// import { ErrorMessage, useFormik } from "formik";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { dangKyAction } from "../../redux/actions/ThongTinNguoiDungAction";
// import { SignupSchema } from "../../services/NguoiDungSchema";

// const UserRegister = () => {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       taiKhoan: "",
//       matKhau: "",
//       email: "",
//       hoTen: "",
//       maNhom: "GP01",
//       soDT: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//       const action = dangKyAction(values);
//       dispatch(action);
//     },
//     validationSchema: SignupSchema,
//   });
//   const { Option } = Select;
//   return (
//     <div className="container__style_register">
//       <form
//         onSubmit={formik.handleSubmit}
//         style={{ height: window.innerHeight }}
//       >
//         <div className="register__form" style={{ height: window.innerHeight }}>
//           <div>
//             <h3 className="text-center display-4 mb-5">ĐĂNG KÝ</h3>
//             <div className="d-flex mt-3">
//               <Input
//                 className="input__style"
//                 onChange={formik.handleChange}
//                 size="large"
//                 name="taiKhoan"
//                 type="text"
//                 placeholder="Nhập tài khoản"
//                 prefix={<UserOutlined />}
//               />
//             </div>
//             <div className="text-danger">{formik.errors.taiKhoan}</div>

//             <div className="d-flex mt-3">
//               <Input
//                 className="input__style"
//                 onChange={formik.handleChange}
//                 name="matKhau"
//                 type="password"
//                 size="large"
//                 placeholder="Nhập mật khẩu"
//                 prefix={<LockOutlined />}
//               />
//             </div>
//             <div className="text-danger">{formik.errors.matKhau}</div>

//             <div className="d-flex mt-3">
//               <Input
//                 className="input__style"
//                 onChange={formik.handleChange}
//                 name="hoTen"
//                 type="text"
//                 size="large"
//                 placeholder="Nhập họ tên"
//                 prefix={<InfoCircleOutlined />}
//               />
//             </div>
//             <div className="text-danger">{formik.errors.hoTen}</div>

//             <div className="d-flex mt-3">
//               <Input
//                 className="input__style"
//                 onChange={formik.handleChange}
//                 name="email"
//                 type="text"
//                 size="large"
//                 placeholder="Nhập email"
//                 prefix={<MailOutlined />}
//               />
//             </div>
//             <div className="text-danger">{formik.errors.email}</div>

//             <div className="d-flex mt-3">
//               <Input
//                 className="input__style"
//                 onChange={formik.handleChange}
//                 name="soDT"
//                 type="text"
//                 size="large"
//                 placeholder="Nhập số điện thoại"
//                 prefix={<PhoneOutlined />}
//               />
//             </div>
//             <div className="text-danger">{formik.errors.soDT}</div>

//             <div className="d-flex mt-3">
//               <Select
//                 className="input__style"
//                 size="large"
//                 // defaultValue="GP01"
//                 onChange={formik.handleChange}
//                 prefix={<GroupOutlined />}
//                 placeholder="Nhập mã nhóm"
//               >
//                 <Option value="GP01">GP01</Option>
//                 <Option value="GP02">GP02</Option>
//                 <Option value="GP03">GP03</Option>
//                 <Option value="GP04">GP04</Option>
//                 <Option value="GP05">GP05</Option>
//               </Select>
//             </div>
//             <div className="text-danger">{formik.errors.maNhom}</div>

//             <button className="button__register_login_style" type="submit">
//               Đăng Ký
//             </button>
//             <div className="social d-flex justify-content-center align-items-center mt-3">
//               <Button
//                 className="mt-2 mr-2"
//                 type="primary"
//                 icon={<FacebookOutlined />}
//                 size="large"
//                 shape="circle"
//                 style={{ backgroundColor: "rgb(59,89,152)", border: "none" }}
//               ></Button>
//               <Button
//                 className="mt-2 mr-2"
//                 type="primary"
//                 icon={<TwitterOutlined />}
//                 size="large"
//                 shape="circle"
//               ></Button>
//               <Button
//                 className="mt-2 mr-2"
//                 type="primary"
//                 icon={<GoogleOutlined />}
//                 size="large"
//                 shape="circle"
//                 style={{ backgroundColor: "RGB(239, 61, 61)", border: "none" }}
//               ></Button>
//             </div>
//             <div className="register__help mt-4">
//               <Link to="/login">Bạn đã có tài khoản?</Link>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserRegister;
