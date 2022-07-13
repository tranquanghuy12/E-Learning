import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("* Tài khoản không để trống"),
  hoTen: Yup.string().required("* Họ tên không để trống"),
  soDT: Yup.string()
    .matches(/^[0-9]+$/)
    .max(10, "* Tối đa 10 số")
    .required("* Số điện thoại không được để trống"),
  email: Yup.string()
    .email("* Email không hợp lệ")
    .required("* Email không được bỏ trống"),
  matKhau: Yup.string().required("* Mật khẩu không được bỏ trống"),
  maNhom: Yup.string().required("* Mã nhóm không được bỏ trống"),
});

export const CapNhatNguoiDungSchema = Yup.object().shape({
  hoTen: Yup.string().required("* Họ tên không được trống"),
  soDT: Yup.string()
    .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ")
    .required("* Số điện thoại không được trống"),
  email: Yup.string()
    .email("* Email không đúng định dạng")
    .required("* Email không được trống"),
  matKhau: Yup.string().required("* Mật khẩu không được trống"),
});

export const LoginSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("Tài khoản không được trống"),
  matKhau: Yup.string()
    .min(3, "Mật khẩu phải lớn hơn 3 và nhỏ hơn 32!")
    .max(32, "Mật khẩu phải lớn hơn 3 và nhỏ hơn 32!")
    .required("Mật khẩu không được trống"),
});
