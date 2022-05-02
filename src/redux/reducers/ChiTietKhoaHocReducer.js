import {
  CHI_TIET_KHOA_HOC_DA_DANG_KY,
  XOA_KHOA_HOC_DA_DANG_KY,
} from "../types/QuanLyKhoaHocType";

let stateDefault = {
  mangKhoaHoc: [],
};

const ChiTietKhoaHocReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CHI_TIET_KHOA_HOC_DA_DANG_KY:
      state.stateDefault = action.stateDefault;
      return { ...state };
    case XOA_KHOA_HOC_DA_DANG_KY:
      let mangKhoaHocUpdate = [...state.mangKhoaHoc];
      mangKhoaHocUpdate = mangKhoaHocUpdate.filter(
        (khoaHoc) => khoaHoc.maKhoaHoc !== action.maKhoaHoc
      );
      state.mangKhoaHoc = mangKhoaHocUpdate;
      return { ...state };
    default:
      return state;
  }
};

export default ChiTietKhoaHocReducer;
