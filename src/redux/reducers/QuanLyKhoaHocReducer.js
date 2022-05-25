import { LAY_DANH_SACH_KHOA_HOC_ACTION, TIM_KIEM_KHOA_HOC_ACTION } from "../types/QuanLyKhoaHocType";
let stateDefault = {
  mangKhoaHoc: [],
  timKiemKhoaHoc:[]
};

const QuanLyKhoaHocReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case LAY_DANH_SACH_KHOA_HOC_ACTION:
      state.mangKhoaHoc = payload;
      return { ...state };
    case TIM_KIEM_KHOA_HOC_ACTION:
      state.timKiemKhoaHoc = payload;
      return {...state}
    default:
      return state;
  }
};
export default QuanLyKhoaHocReducer