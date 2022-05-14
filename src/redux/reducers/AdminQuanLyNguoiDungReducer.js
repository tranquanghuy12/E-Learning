import {
  ADMIN_CAPNHAT_THONGTIN_NGUOIDUNG,
  ADMIN_CHI_TIET_THONG_TIN_NGUOI_DUNG,
  ADMIN_THEM_NGUOI_DUNG,
} from "../types/AdminNguoiDungType";

let stateDefault = {
  arrUser: {},
  editUser: [],
  dsChiTietNguoiDung:[]
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
    default:
      return state;
  }
};
