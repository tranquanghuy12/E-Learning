import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/setting/config";
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  THONG_TIN_NGUOI_DUNG_ACTION,
} from "../types/QuanLyNguoiDungType";

let userLogin;
// Kiểm tra xem localstorage có giá trị hay không để load giá trị mặc định cho userLogin
if (localStorage.getItem(USER_LOGIN)) {
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: userLogin,
  arrUser: [],
  userProfile: [],
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      
      state.userProfile = action.userProfile;
      return { ...state};
    }
    case DANG_KY_ACTION: {
      state.arrUser = [...state.arrUser, action.thongTinDangKy];
      return { ...state };
    }
    case THONG_TIN_NGUOI_DUNG_ACTION: {
      state.userProfile = action.userProfile;
      return { ...state };
    }
    default:
      return state;
  }
};
