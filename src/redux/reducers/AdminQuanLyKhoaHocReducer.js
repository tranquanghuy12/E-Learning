import {
  ADMIN_CAP_NHAT_THONG_TIN_KHOA_HOC,
  ADMIN_LAY_THONG_TIN_KHOA_HOC,
  ADMIN_TIM_KIEM_KHOA_HOC,
} from "../types/AdminKhoaHocType";
import {
  ADMIN_GHI_DANH_KHOA_HOC,
  ADMIN_LAY_DS_KHOA_HOC_CHO_XET_DUYET,
  ADMIN_LAY_DS_KHOA_HOC_CHUA_GHI_DANH,
  ADMIN_LAY_DS_KHOA_HOC_DA_XET_DUYET,
} from "../types/AdminNguoiDungType";
import { ADMIN_THEM_KHOA_HOC } from "../types/AdminThemKhoaHocType";

let stateDefault = {
  dsKhoaHocChuaGhiDanh: [],
  ghiDanhKhoaHoc: [],
  dsKhoaHocChoXetDuyet: [],
  dsKhoaHocDaXetDuyet: [],
  themKhoaHoc: [],
  layThongTinKhoaHoc: [],
  capNhatKhoaHoc: [],
};
export const AdminQuanLyKhoaHocReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADMIN_LAY_DS_KHOA_HOC_CHUA_GHI_DANH:
      state.dsKhoaHocChuaGhiDanh = action.payload;
      return { ...state };
    case ADMIN_GHI_DANH_KHOA_HOC:
      state.ghiDanhKhoaHoc = action.payload;
      return { ...state };
    case ADMIN_LAY_DS_KHOA_HOC_CHO_XET_DUYET:
      state.dsKhoaHocChoXetDuyet = action.payload;
      return { ...state };
    case ADMIN_LAY_DS_KHOA_HOC_DA_XET_DUYET:
      state.dsKhoaHocDaXetDuyet = action.payload;
      return { ...state };
    case ADMIN_THEM_KHOA_HOC:
      state.themKhoaHoc = action.payload;
      return { ...state };
    case ADMIN_LAY_THONG_TIN_KHOA_HOC:
      state.layThongTinKhoaHoc = action.payload;
      return { ...state };
    case ADMIN_CAP_NHAT_THONG_TIN_KHOA_HOC:
      state.capNhatKhoaHoc = action.payload;
      return { ...state };
    case ADMIN_TIM_KIEM_KHOA_HOC:
      state.timKiemKhoaHoc = action.payload;
      return { ...state };

    default:
      return state;
  }
};
