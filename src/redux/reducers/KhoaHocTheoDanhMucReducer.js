import { LAY_KHOA_HOC_THEO_DANH_MUC } from "../types/KhoaHocTheoDanhMucType";

let stateDefault = {
  mangKhoaHocTheoDanhMuc: [],
};

const KhoaHocTheoDanhMucReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case LAY_KHOA_HOC_THEO_DANH_MUC:
      state.mangKhoaHocTheoDanhMuc = payload;
      return { ...state };

    default:
      return state;
  }
};
export default KhoaHocTheoDanhMucReducer;
