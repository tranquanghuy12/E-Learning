import {
  CAP_NHAT_KHOA_HOC,
  CHI_TIET_KHOA_HOC_DA_DANG_KY,
} from "../types/QuanLyKhoaHocType";

let stateDefault = [];

const ChiTietKhoaHocReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CAP_NHAT_KHOA_HOC:
      let newList = [...state];
      let index = newList.findIndex(
        (item) => item.maKhoaHoc === action.payload
      );      
      newList.splice(index, 1);
      state = newList;      
      return [...state];

    case CHI_TIET_KHOA_HOC_DA_DANG_KY:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default ChiTietKhoaHocReducer;
