import {
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_DATA,
  LAY_MA_LOAI_NGUOI_DUNG,
} from "../types/QuanLyNguoiDungType";

let stateDefault = {
  maLoaiNguoiDung: [],
  danhSachNguoiDungPhanTrang: [],
  danhSachNguoiDungPhanTrangData: [],
};

export const MaLoaiNguoiDungReducer = (state = stateDefault, action) => {
  const { payload } = action;
  switch (action.type) {
    case LAY_MA_LOAI_NGUOI_DUNG:
      state.maLoaiNguoiDung = payload;
      return { ...state };
    case LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG:
      state.danhSachNguoiDungPhanTrang = payload;
      return { ...state };
    case LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_DATA:
      state.danhSachNguoiDungPhanTrangData = payload;
      return { ...state };
    default:
      return state;
  }
};
