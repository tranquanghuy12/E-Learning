import {
  ADMIN_GHI_DANH_KHOA_HOC,
  ADMIN_LAY_DS_KHOA_HOC_CHO_XET_DUYET,
  ADMIN_LAY_DS_KHOA_HOC_CHUA_GHI_DANH,
} from "../types/AdminNguoiDungType";

let stateDefault = {
  dsKhoaHocChuaGhiDanh: [],
  ghiDanhKhoaHoc: [],
  dsKhoaHocChoXetDuyet:[]
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

    default:
      return state;
  }
};
