import swal from "sweetalert";
import { createAction } from ".";
import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";

import { ACCESSTOKEN, http, USER_LOGIN } from "../../util/setting/config";
import { XOA_KHOA_HOC_DA_DANG_KY } from "../types/QuanLyKhoaHocType";
import {
  CAP_NHAT_THONG_TIN_NGUOI_DUNG_ACTION,
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  THONG_TIN_NGUOI_DUNG_ACTION,
} from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/api/QuanLyNguoiDung/DangNhap", userLogin);
      let usLogin = result.data;
      let token = usLogin.accessToken;
      localStorage.setItem(ACCESSTOKEN, token);
      localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin));
      dispatch(createAction(DANG_NHAP_ACTION, result.data));
      swal({
        title: "Đăng nhập thành công",
        icon: "success",
      });
      if (result.data.maLoaiNguoiDung === "HV") {
        history.push("/home");
      } else {
        history.push("/admin");
      }
    } catch (error) {
      swal({
        title: "Đăng nhập thất bại",
        text: error.response?.data,
        icon: "error",
      });
    }
  };
};
export const dangKyAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/DangKy`, values);
      console.log("result", result);
      if (result.status === 200) {
        dispatch(createAction(DANG_KY_ACTION, result.data));
        swal({
          title: "Đăng ký thành công",
          icon: "success",
        });
        history.push("/login");
      }
      console.log("result", result);
    } catch (error) {
      swal({
        title: "Đăng ký thất bại",
        text: error.response?.data,
        icon: "error",
      });
    }
  };
};
export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await http.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");

      if (result.status === 200) {
        dispatch(createAction(THONG_TIN_NGUOI_DUNG_ACTION, result.data));
      } else if (result.status === 404) {
        //
        alert("Đường dẫn không hợp lệ!");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        //
        alert("Đường dẫn không hợp lệ!");
      }
      console.log(error.response?.data);
    }
  };
};
export const huyGhiDanhKhoaHoc = (data) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/api/QuanLyKhoaHoc/HuyGhiDanh", data);
      console.log("data action", result);
      swal({
        title: "Thành công",
        text: "Bạn đã xoá thành công",
      });
      dispatch(createAction(XOA_KHOA_HOC_DA_DANG_KY, result));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const capNhatThongTinNguoiDung = (data) => {
  return async (dispatch) => {
    try {
      let result = await http.put(
        "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data
      );

      if (result.status === 200) {
        swal({
          title: "Thành công",
          text: "Đã cập nhật tài khoản",
          icon: "success",
        });
        history.push("/profile");
      }
      dispatch(createAction(CAP_NHAT_THONG_TIN_NGUOI_DUNG_ACTION, result));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
