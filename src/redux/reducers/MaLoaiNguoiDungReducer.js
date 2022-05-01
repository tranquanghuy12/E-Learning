import { LAY_MA_LOAI_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";

let stateDefault = {
  maLoaiNguoiDung: [],
};

export const MaLoaiNguoiDungReducer = (state = stateDefault, action) => {
  
  switch (action.type) {
      case LAY_MA_LOAI_NGUOI_DUNG:
          state.maLoaiNguoiDung=action.maLoaiNguoiDung;
          return {...state}
    default:
      return state;
  }
};
