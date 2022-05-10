import { LAY_DANH_MUC_KHOA_HOC_ACTION } from "../types/DanhMucKhoaHocType";

let stateDefault = {
  mangDanhMucKhoaHoc: [],
};

const DanhMucKhoaHocReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case LAY_DANH_MUC_KHOA_HOC_ACTION:
      state.mangDanhMucKhoaHoc = payload;
      return { ...state };

    default:
      return state;
  }
};
export default DanhMucKhoaHocReducer;
