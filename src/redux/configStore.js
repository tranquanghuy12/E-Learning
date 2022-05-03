
import {combineReducers} from 'redux'
import ChiTietKhoaHocReducer from './reducers/ChiTietKhoaHocReducer';
import QuanLyKhoaHocReducer from './reducers/QuanLyKhoaHocReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
export const rootReducer = combineReducers({
    //state ứng dụng
    QuanLyNguoiDungReducer,
    ChiTietKhoaHocReducer,
    QuanLyKhoaHocReducer
})

