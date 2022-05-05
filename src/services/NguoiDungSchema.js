import * as yup from "yup";
export const DangKySchema = yup.object().shape({
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
});

export const CapNhatNguoiDungSchema = yup.object().shape({
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
});

export const DangNhapSchema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});
