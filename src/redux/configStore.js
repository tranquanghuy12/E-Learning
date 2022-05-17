import { combineReducers } from "redux";
import ChiTietKhoaHocReducer from "./reducers/ChiTietKhoaHocReducer";
import QuanLyKhoaHocReducer from "./reducers/QuanLyKhoaHocReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { MaLoaiNguoiDungReducer } from "./reducers/MaLoaiNguoiDungReducer";
import DanhMucKhoaHocReducer from "./reducers/DanhMucKhoaHocReducer";
import KhoaHocTheoDanhMucReducer from "./reducers/KhoaHocTheoDanhMucReducer";
import { AdminQuanLyNguoiDungReducer } from "./reducers/AdminQuanLyNguoiDungReducer";
import { AdminQuanLyKhoaHocReducer } from "./reducers/AdminQuanLyKhoaHocReducer";
const rootReducer = combineReducers({
  //state ứng dụng
  QuanLyNguoiDungReducer,
  ChiTietKhoaHocReducer,
  QuanLyKhoaHocReducer,
  MaLoaiNguoiDungReducer,
  DanhMucKhoaHocReducer,
  KhoaHocTheoDanhMucReducer,
  AdminQuanLyNguoiDungReducer,
  AdminQuanLyKhoaHocReducer
});
export default rootReducer;