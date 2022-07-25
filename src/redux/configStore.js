import { combineReducers } from "redux";
import QuanLyKhoaHocReducer from "./reducers/QuanLyKhoaHocReducer";
import { ThongTinNguoiDungReducer } from "./reducers/ThongTinNguoiDungReducer";
import { DanhSachNguoiDungReducer } from "./reducers/DanhSachNguoiDungReducer";
import DanhMucKhoaHocReducer from "./reducers/DanhMucKhoaHocReducer";
import KhoaHocTheoDanhMucReducer from "./reducers/KhoaHocTheoDanhMucReducer";
import { AdminQuanLyNguoiDungReducer } from "./reducers/AdminQuanLyNguoiDungReducer";
import { AdminQuanLyKhoaHocReducer } from "./reducers/AdminQuanLyKhoaHocReducer";
const rootReducer = combineReducers({
  //state ứng dụng
  ThongTinNguoiDungReducer,
  QuanLyKhoaHocReducer,
  DanhSachNguoiDungReducer,
  DanhMucKhoaHocReducer,
  KhoaHocTheoDanhMucReducer,
  AdminQuanLyNguoiDungReducer,
  AdminQuanLyKhoaHocReducer,
});
export default rootReducer;
