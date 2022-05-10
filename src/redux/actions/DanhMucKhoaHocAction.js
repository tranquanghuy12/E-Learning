import { createAction } from ".";
import { http } from "../../util/setting/config";
import { LAY_DANH_MUC_KHOA_HOC_ACTION } from "../types/DanhMucKhoaHocType";

export function layDanhMucKhoaHocAction() {
  return async (dispatch) => {
    try {
      let result = await http.get(
        "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"
      );
      dispatch(createAction(LAY_DANH_MUC_KHOA_HOC_ACTION, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
}
