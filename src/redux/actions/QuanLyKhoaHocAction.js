import { createAction } from ".";
import {
  API_LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG,
  API_TIM_KIEM_KHOA_HOC,
  http,
} from "../../util/setting/config";
import {
  LAY_DANH_SACH_KHOA_HOC_ACTION,
  LAY_DS_KHOA_HOC_PHAN_TRANG_ACTION,
  TIM_KIEM_KHOA_HOC_ACTION,
} from "../types/QuanLyKhoaHocType";

export function layDanhSachPhimAction() {
  return async (dispatch) => {
    try {
      let result = await http.get(
        "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      );
      dispatch(createAction(LAY_DANH_SACH_KHOA_HOC_ACTION, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
}

export function timKiemTenKhoaHocAction(text) {
  return async (dispatch) => {
    try {
      let result = await http.get(`${API_TIM_KIEM_KHOA_HOC}${text}`);
      dispatch(createAction(TIM_KIEM_KHOA_HOC_ACTION, result.data));
      
    } catch (error) {
      console.log(error.response?.data);
    }
  };
}

export function layDanhSachKhoaHocPhanTrang(params) {
  return async (dispatch) => {
    try {
      let result = await http.get(
        `${API_LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG}${params}`
      );
      dispatch(createAction(LAY_DS_KHOA_HOC_PHAN_TRANG_ACTION, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
}
