import swal from "sweetalert";
import { createAction } from ".";
import {
  API_CAPNHAT_THONG_TIN_KHOA_HOC,
  API_DANG_KY_KHOA_HOC,
  API_LAY_THONG_TIN_KHOA_HOC_ACTION,
  API_THEM_KHOA_HOC_ADMIN,
  API_TIM_KIEM_KHOA_HOC,
  API_XOA_KHOA_HOC_ADMIN,
  http,
} from "../../util/setting/config";
import {
  ADMIN_CAP_NHAT_THONG_TIN_KHOA_HOC,
  ADMIN_LAY_THONG_TIN_KHOA_HOC,
  ADMIN_TIM_KIEM_KHOA_HOC,
} from "../types/AdminKhoaHocType";
import { ADMIN_THEM_KHOA_HOC } from "../types/AdminThemKhoaHocType";
import {
  DANG_KY_KHOA_HOC_ACTION,
  LAY_DANH_SACH_KHOA_HOC_ACTION,
} from "../types/QuanLyKhoaHocType";
import { layDanhSachKhoaHocAction } from "./QuanLyKhoaHocAction";
import { layThongTinNguoiDungAction } from "./QuanLyNguoiDungAction";

export const themKhoaHocAdminAction = (values) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_THEM_KHOA_HOC_ADMIN, values);
      console.log("result them khoá học", result);
      swal({
        title: "Thêm khoá học thành công",
      });
      dispatch(createAction(ADMIN_THEM_KHOA_HOC, result));
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const xoaKhoaHocAdminAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await http.delete(`${API_XOA_KHOA_HOC_ADMIN}${maKhoaHoc}`);
      console.log(result);
      if (result.status === 200) {
        swal({
          title: "Thành công",
          icon: "success",
          text: "Bạn đã xoá thành công",
        });
        await dispatch(layDanhSachKhoaHocAction());
      }
    } catch (error) {
      swal({
        title: "Không thành công",
        text: error.response?.data,
        button: "Trở về",
      });
    }
  };
};
export const capNhatThongTinKhoaHocAction = (values) => {
  return async (dispatch) => {
    try {
      let result = await http.put(API_CAPNHAT_THONG_TIN_KHOA_HOC, values);
      dispatch(createAction(ADMIN_CAP_NHAT_THONG_TIN_KHOA_HOC, result));
      window.location.reload();
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const dangKyKhoaHocAction = (data) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_DANG_KY_KHOA_HOC, data);
      if (result.status === 200) {
        swal({
          title: "Đăng ký thành công",
          icon: "success",
        });
        dispatch(createAction(DANG_KY_KHOA_HOC_ACTION, result));
        //cập nhật card hiển thị số lượng khóa học
        dispatch(layThongTinNguoiDungAction());
      }
    } catch (error) {
      console.log(error.response?.data);
      swal({
        title: error.response?.data,
        icon: "error",
      });
    }
  };
};

export const layThongTinKhoaHocAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        `${API_LAY_THONG_TIN_KHOA_HOC_ACTION}${maKhoaHoc}`
      );
      dispatch(createAction(ADMIN_LAY_THONG_TIN_KHOA_HOC, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const timKiemKhoaHocAction = (tenKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`${API_TIM_KIEM_KHOA_HOC}${tenKhoaHoc}`);
      console.log("result", result.data);
      dispatch(createAction(LAY_DANH_SACH_KHOA_HOC_ACTION, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
