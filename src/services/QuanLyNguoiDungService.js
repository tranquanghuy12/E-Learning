import { Component } from "react";
import { http } from "../util/setting/config";


// import { http } from "../util/settings/config";



export class QuanLyNguoiDungService extends Component {
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap) => {
    //{taiKhoan:'',matKhau:''}
    return http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
