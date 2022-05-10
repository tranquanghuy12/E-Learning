import { createAction } from ".";
import { http } from "../../util/setting/config";
import { LAY_KHOA_HOC_THEO_DANH_MUC } from "../types/KhoaHocTheoDanhMucType";

export function layKhoaHocTheoDanhMucAction(maDanhMuc) {
  return async (dispatch) => {
    try {
      let result = await http.get(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`
      );
      dispatch(createAction(LAY_KHOA_HOC_THEO_DANH_MUC, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
}
