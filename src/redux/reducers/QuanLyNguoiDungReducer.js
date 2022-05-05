import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/setting/config";
import {
  CAP_NHAT_THONG_TIN_NGUOI_DUNG_ACTION,
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
console.log('usLogin reducer',userLogin);

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      
      state.userLogin = action.payload;
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
    case CAP_NHAT_THONG_TIN_NGUOI_DUNG_ACTION:{
      state.info = action.payload;
      return {...state}
    }
    default:
      return state;
  }
};
