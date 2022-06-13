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
import { Select, Button, Input, Form } from "antd";
import { ErrorMessage, useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { DangKySchema } from "../../services/NguoiDungSchema";

const UserRegister = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      maNhom: "GP01",
      soDT: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const action = dispatch(dangKyAction(values));
      dispatch(action);
    },
    validationSchema: DangKySchema,
  });
  const { Option } = Select;
  return (
    <form onSubmit={formik.handleSubmit} className="container__style">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3 className="text-center display-4">ĐĂNG KÝ</h3>
        <div className="d-flex mt-3">
          <Input
            className="input__style"
            onChange={formik.handleChange}
            size="large"
            name="taiKhoan"
            type="text"
            placeholder="Nhập tài khoản"
            prefix={<UserOutlined />}
          />
        </div>
        <div className="text-danger">{formik.errors.taiKhoan}</div>

        <div className="d-flex mt-3">
          <Input
            className="input__style"
            onChange={formik.handleChange}
            name="matKhau"
            type="password"
            size="large"
            placeholder="Nhập mật khẩu"
            prefix={<LockOutlined />}
          />
        </div>
        <div className="text-danger">{formik.errors.matKhau}</div>

        <div className="d-flex mt-3">
          <Input
            className="input__style"
            onChange={formik.handleChange}
            name="hoTen"
            type="text"
            size="large"
            placeholder="Nhập họ tên"
            prefix={<InfoCircleOutlined />}
          />
        </div>
        <div className="text-danger">{formik.errors.hoTen}</div>

        <div className="d-flex mt-3">
          <Input
            className="input__style"
            onChange={formik.handleChange}
            name="email"
            type="text"
            size="large"
            placeholder="Nhập email"
            prefix={<MailOutlined />}
          />
        </div>
        <div className="text-danger">{formik.errors.email}</div>
        
        <div className="d-flex mt-3">
          <Input
            className="input__style"
            onChange={formik.handleChange}
            name="soDT"
            type="text"
            size="large"
            placeholder="Nhập số điện thoại"
            prefix={<PhoneOutlined />}
          />
        </div>
        <div className="text-danger">{formik.errors.soDT}</div>

        <div className="d-flex mt-3">
          <Select
            className="input__style"
            size="large"
            // defaultValue="GP01"
            onChange={formik.handleChange}
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
        <div className="text-danger">{formik.errors.maNhom}</div>

        <Button
          className="button__register_style"
          type="primary"
          size="large"
          htmlType="submit"
        >
          Đăng Ký
        </Button>
        <div className="social d-flex mt-3">
          <Button
            className="mt-2 mr-2"
            type="primary"
            icon={<FacebookOutlined />}
            size="large"
            shape="circle"
            style={{ backgroundColor: "rgb(59,89,152)", border: "none" }}
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
            style={{ backgroundColor: "RGB(239, 61, 61)", border: "none" }}
          ></Button>
        </div>
        <div className="register mt-5">
          <Link to="/quenmatkhau">Quên mật khẩu</Link>
        </div>
        <div className="register">
          <Link to="/login">Bạn đã có tài khoản?</Link>
        </div>
      </div>
    </form>
  );
};

export default UserRegister;
