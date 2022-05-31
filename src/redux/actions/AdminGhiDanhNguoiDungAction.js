import { createAction } from ".";
import {
  API_LAY_DS_HOC_VIEN_CHO_XAC_THUC,
  API_LAY_DS_NGUOI_DUNG_CHUA_GHI_DANH,
  API_LAY_HOC_VIEN_DA_THAM_GIA,
  http,
} from "../../util/setting/config";
import {
  ADMIN_LAY_DS_NGUOI_DUNG_CHO_XAC_THUC,
  ADMIN_LAY_DS_NGUOI_DUNG_CHUA_GHI_DANH,
} from "../types/AdminKhoaHocType";
import { ADMIN_LAY_DS_HOC_VIEN_DA_THAM_GIA } from "../types/AdminNguoiDungType";

export const layDsNguoiDungChuaGhiDanhAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await http.post(
        API_LAY_DS_NGUOI_DUNG_CHUA_GHI_DANH,
        maKhoaHoc
      );
      dispatch(
        createAction(ADMIN_LAY_DS_NGUOI_DUNG_CHUA_GHI_DANH, result.data)
      );
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const layDsHocVienChoXacThucAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_LAY_DS_HOC_VIEN_CHO_XAC_THUC, maKhoaHoc);
      dispatch(createAction(ADMIN_LAY_DS_NGUOI_DUNG_CHO_XAC_THUC, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const layDsHocVienDaThamGiaAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_LAY_HOC_VIEN_DA_THAM_GIA, maKhoaHoc);
      dispatch(createAction(ADMIN_LAY_DS_HOC_VIEN_DA_THAM_GIA, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
