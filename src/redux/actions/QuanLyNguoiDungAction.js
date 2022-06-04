import swal from "sweetalert";
import { createAction } from ".";
import { history } from "../../App";

import {
  API_THONGTIN_NGUOIDUNG,
  ACCESSTOKEN,
  http,
  USER_LOGIN,
  API_DANGNHAP_NGUOIDUNG,
  API_DANGKY_NGUOIDUNG,
  API_HUYGHIDANH_KHOAHOC,
  API_CAPNHAT_THONGTIN_NGUOIDUNG,
  API_LAY_MA_LOAI_NGUOI_DUNG,
} from "../../util/setting/config";
import {
  CAP_NHAT_THONG_TIN_NGUOI_DUNG_ACTION,
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  LAY_MA_LOAI_NGUOI_DUNG,
  THONG_TIN_NGUOI_DUNG_ACTION,
} from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_DANGNHAP_NGUOIDUNG, userLogin);
      let usLogin = result.data;
      let token = usLogin.accessToken;
      localStorage.setItem(ACCESSTOKEN, token);
      localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin));
      dispatch(createAction(DANG_NHAP_ACTION, result.data));     
      if (result.data.maLoaiNguoiDung === "HV") {
        history.goBack();
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
      const result = await http.post(API_DANGKY_NGUOIDUNG, values);
      
      if (result.status === 200) {
        dispatch(createAction(DANG_KY_ACTION, result.data));
        swal({
          title: "Đăng ký thành công",
          icon: "success",
        });
        history.push("/login");
      }
      
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
      const result = await http.post(API_THONGTIN_NGUOIDUNG);

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
      let result = await http.post(API_HUYGHIDANH_KHOAHOC, data);
      console.log('huy ghi danh',result)
      swal({
        title: "Thành công",
        text: "Bạn đã xoá thành công",
      });

      await dispatch(layThongTinNguoiDungAction());
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const capNhatThongTinNguoiDung = (data) => {
  return async (dispatch) => {
    try {
      let result = await http.put(API_CAPNHAT_THONGTIN_NGUOIDUNG, data);

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

export const layMaLoaiNguoiDung = () => {
  return async (dispatch) => {
    try {
      let result = await http.get(API_LAY_MA_LOAI_NGUOI_DUNG);
      dispatch(createAction(LAY_MA_LOAI_NGUOI_DUNG, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
