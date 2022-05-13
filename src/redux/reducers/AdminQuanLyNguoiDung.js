import { ADMIN_THEM_NGUOI_DUNG } from "../types/AdminNguoiDungType";

let stateDefault = {
  arrUser: {},
};
export const AdminQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADMIN_THEM_NGUOI_DUNG:
      state.arrUser = action.payload;
      return { ...state };

    default:
      return state;
  }
};
