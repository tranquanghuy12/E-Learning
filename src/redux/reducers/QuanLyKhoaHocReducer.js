import {
  CHI_TIET_KHOA_HOC,
  DANG_KY_KHOA_HOC_ACTION,
  LAY_DANH_SACH_KHOA_HOC_ACTION,
  LAY_DS_KHOA_HOC_PHAN_TRANG_ACTION,
  TIM_KIEM_KHOA_HOC_ACTION,
} from "../types/QuanLyKhoaHocType";
let stateDefault = {
  chiTietKhoaHoc: {},
  mangKhoaHoc: [],
  mangKhoaHocPhanTrang: [],
  mangKhoaHocPhanTrangData: [],
  timKiemKhoaHoc: [],
  dangKyKhoaHoc: [],
};

const QuanLyKhoaHocReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHI_TIET_KHOA_HOC:
      state.chiTietKhoaHoc = payload;
      return { ...state };
    case LAY_DANH_SACH_KHOA_HOC_ACTION:
      state.mangKhoaHoc = payload;
      return { ...state };
    case LAY_DS_KHOA_HOC_PHAN_TRANG_ACTION:
      state.mangKhoaHocPhanTrangData = payload.items;
      state.mangKhoaHocPhanTrang = payload;
      return { ...state };
    case TIM_KIEM_KHOA_HOC_ACTION:
      state.timKiemKhoaHoc = payload;
      return { ...state };
    case DANG_KY_KHOA_HOC_ACTION:
      state.dangKyKhoaHoc = payload;
      return { ...state };
    default:
      return state;
  }
};
export default QuanLyKhoaHocReducer;
