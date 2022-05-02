
import {combineReducers} from 'redux'
import ChiTietKhoaHocReducer from './reducers/ChiTietKhoaHocReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
export const rootReducer = combineReducers({
    //state ứng dụng
    QuanLyNguoiDungReducer,
    ChiTietKhoaHocReducer
})

