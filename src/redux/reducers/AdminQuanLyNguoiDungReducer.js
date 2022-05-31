import {
  ADMIN_LAY_DS_NGUOI_DUNG_CHO_XAC_THUC,
  ADMIN_LAY_DS_NGUOI_DUNG_CHUA_GHI_DANH,
} from "../types/AdminKhoaHocType";
import {
  ADMIN_CAPNHAT_THONGTIN_NGUOIDUNG,
  ADMIN_CHI_TIET_THONG_TIN_NGUOI_DUNG,
  ADMIN_LAY_DS_HOC_VIEN_DA_THAM_GIA,
  ADMIN_THEM_NGUOI_DUNG,
} from "../types/AdminNguoiDungType";

let stateDefault = {
  arrUser: {},
  editUser: [],
  dsChiTietNguoiDung: [],
  dsNguoiDungChuaGhiDanh: [],
  dsHocVienChoXacThuc: [],
  dsHocVienDaThamGia: [],
};
export const AdminQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADMIN_THEM_NGUOI_DUNG:
      state.arrUser = action.payload;
      return { ...state };
    case ADMIN_CAPNHAT_THONGTIN_NGUOIDUNG:
      state.editUser = action.payload;
      return { ...state };
    case ADMIN_CHI_TIET_THONG_TIN_NGUOI_DUNG:
      state.dsChiTietNguoiDung = action.payload;
      return { ...state };
    case ADMIN_LAY_DS_NGUOI_DUNG_CHUA_GHI_DANH:
      state.dsNguoiDungChuaGhiDanh = action.payload;
      return { ...state };
    case ADMIN_LAY_DS_NGUOI_DUNG_CHO_XAC_THUC:
      state.dsHocVienChoXacThuc = action.payload;
      return { ...state };
    case ADMIN_LAY_DS_HOC_VIEN_DA_THAM_GIA:
      state.dsHocVienDaThamGia = action.payload;
      return { ...state };
    default:
      return state;
  }
};
