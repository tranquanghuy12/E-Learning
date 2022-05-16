import {
  ADMIN_CAPNHAT_THONGTIN_NGUOIDUNG,
  ADMIN_CHI_TIET_THONG_TIN_NGUOI_DUNG,
  ADMIN_DANH_SACH_KHOA_HOC_CHUA_GHI_DANH,
  ADMIN_THEM_NGUOI_DUNG,
} from "../types/AdminNguoiDungType";

let stateDefault = {
  arrUser: {},
  editUser: [],
  dsChiTietNguoiDung:[],
  dsKhoaHocChuaGhiDanh:[]
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
    case ADMIN_DANH_SACH_KHOA_HOC_CHUA_GHI_DANH:
      state.dsKhoaHocChuaGhiDanh = action.payload;
      return {...state};
    default:
      return state;
  }
};
