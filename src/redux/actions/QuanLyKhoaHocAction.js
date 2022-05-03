import { createAction } from ".";
import { http } from "../../util/setting/config";
import { LAY_DANH_SACH_KHOA_HOC_ACTION } from "../types/QuanLyKhoaHocType";

export function layDanhSachPhimAction() {
  return async (dispatch) => {
    try {
      let result = await http.get(
        "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      );
      console.log("result",result.data);
      dispatch(createAction(LAY_DANH_SACH_KHOA_HOC_ACTION,result.data))
    } catch (error) {
      console.log(error.response?.data);
    }
  };
}
