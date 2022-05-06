import {
  CHI_TIET_KHOA_HOC_DA_DANG_KY,
  XOA_KHOA_HOC_DA_DANG_KY,
} from "../types/QuanLyKhoaHocType";

let stateDefault = [];

const ChiTietKhoaHocReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case XOA_KHOA_HOC_DA_DANG_KY:
      let mangKhoaHoc = [...state];
      console.log('mangKhoaHoc',mangKhoaHoc)
      const index = mangKhoaHoc.findIndex(
        (data) => data.maKhoaHoc === action.payload
      );
      console.log("index", index);
      mangKhoaHoc.splice(index, 1);
      state = mangKhoaHoc;
      console.log("state reducer", state);
      return [...state];
    case CHI_TIET_KHOA_HOC_DA_DANG_KY:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default ChiTietKhoaHocReducer;
