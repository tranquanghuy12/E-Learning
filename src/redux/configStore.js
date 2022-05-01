import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { MaLoaiNguoiDungReducer } from './reducers/MaLoaiNguoiDungReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
const rootReducer = combineReducers({
    //state ứng dụng
    QuanLyNguoiDungReducer,
    MaLoaiNguoiDungReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))