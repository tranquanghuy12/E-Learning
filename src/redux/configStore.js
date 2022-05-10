import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import ChiTietKhoaHocReducer from "./reducers/ChiTietKhoaHocReducer";
import QuanLyKhoaHocReducer from "./reducers/QuanLyKhoaHocReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import reduxThunk from "redux-thunk";
import { MaLoaiNguoiDungReducer } from "./reducers/MaLoaiNguoiDungReducer";
import DanhMucKhoaHocReducer from "./reducers/DanhMucKhoaHocReducer";
import KhoaHocTheoDanhMucReducer from "./reducers/KhoaHocTheoDanhMucReducer";
export const rootReducer = combineReducers({
  //state ứng dụng
  QuanLyNguoiDungReducer,
  ChiTietKhoaHocReducer,
  QuanLyKhoaHocReducer,
  MaLoaiNguoiDungReducer,
  DanhMucKhoaHocReducer,
  KhoaHocTheoDanhMucReducer
});

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(
  middleWare,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const store = createStore(rootReducer, composeCustom);
