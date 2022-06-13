import * as yup from "yup";
export const DangKySchema = yup.object().shape({
  taiKhoan: yup.string().required("* Tài khoản không để trống"),
  hoTen: yup.string().required("* Họ tên không để trống"),
  soDT: yup
    .string()
    .matches(/^[0-9]+$/).max(10,"* Tối đa 10 số")
    .required("* Số điện thoại không được để trống"),
  email: yup
    .string()
    .email("* Email không hợp lệ")
    .required("* Email không được bỏ trống"),
  matKhau: yup.string().required("* Mật khẩu không được bỏ trống"),
  maNhom: yup.string().required("* Mã nhóm không được bỏ trống"),
});

export const CapNhatNguoiDungSchema = yup.object().shape({
  hoTen: yup.string().required("* Họ tên không được trống"),
  soDT: yup
    .string()
    .matches(/^[0-9]+$/,"Số điện thoại không hợp lệ")
    .required("* Số điện thoại không được trống"),
  email: yup
    .string()
    .email("* Email không đúng định dạng")
    .required("* Email không được trống"),
  matKhau: yup.string().required("* Mật khẩu không được trống"),
});

export const DangNhapSchema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});
