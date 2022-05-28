import { createAction } from ".";
import { API_CHITIET_KHOAHOC, http } from "../../util/setting/config";
import { CHI_TIET_KHOA_HOC } from "../types/QuanLyKhoaHocType";

export function ChiTietKhoaHocAction(maKhoaHoc) {
  return async (dispatch) => {
    try {
      let result = await http.get(
        // `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
        `${API_CHITIET_KHOAHOC}${maKhoaHoc}`
      );
      dispatch(createAction(CHI_TIET_KHOA_HOC, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
}
