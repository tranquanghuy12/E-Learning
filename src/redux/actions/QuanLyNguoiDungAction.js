import axios from "axios";
import swal from "sweetalert";
import { createAction } from ".";
import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";

import {
  TOKEN_CYBERSOFT,
  DOMAIN,
  ACCESSTOKEN,
  http,
  USER_LOGIN,
} from "../../util/setting/config";
import {XOA_KHOA_HOC_DA_DANG_KY} from '../types/QuanLyKhoaHocType'
import {
  CAP_NHAT_THONG_TIN_NGUOI_DUNG_ACTION,
  DANG_KY_ACTION,
  THONG_TIN_NGUOI_DUNG_ACTION,
} from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: userLogin,
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      });
      let usLogin = result.data;
      
      let token = usLogin.accessToken;
      
      localStorage.setItem(ACCESSTOKEN, token);
      localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin));
      swal({
        title: "Đăng nhập thành công",
        icon: "success",
      });
      if (result.data.maLoaiNguoiDung === "HV") {
        history.push("/home");
      } else {
        history.push("/admin");
      }
    } catch (error) {
      swal({
        title: "Đăng nhập thất bại",
        text: error.response?.data,
        icon: "error",
      });
    }
  };
};
export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      if (result.status === 200) {
        dispatch({
          type: DANG_KY_ACTION,
          thongTinDangKy: result.data,
        });
        swal({
          title: "Đăng ký thành công",
          icon: "success",
        });
        history.push("/login");
      }
      console.log("result", result);
    } catch (error) {
      swal({
        title: "Đăng ký thất bại",
        text: error.response?.data,
        icon: "error",
      });
    }
  };
};
export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();

      if (result.status === 200) {
        dispatch({
          type: THONG_TIN_NGUOI_DUNG_ACTION,
          userProfile: result.data,
        });
      } else if (result.status === 404) {
        //
        alert("Đường dẫn không hợp lệ!");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        //
        alert("Đường dẫn không hợp lệ!");
      }
      console.log(error.response?.data);
    }
  };
};
export const huyGhiDanhKhoaHoc = (khoaHoc) =>{
  return async (dispatch)=>{
    try {
      let result = await http.post('/api/QuanLyKhoaHoc/HuyGhiDanh',khoaHoc)
      
      swal({
        title:'Thành công',
        text:'Bạn đã xoá thành công'        
      })
      dispatch({
        type:XOA_KHOA_HOC_DA_DANG_KY,
        khoaHoc:result
      })
      
    } catch (error) {
      console.log(error.response?.data);
    }
  }
}

export const capNhatThongTinNguoiDung=(data)=>{
  return async (dispatch)=>{
    try {
      let result = await http.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',data);
      
      if(result.status === 200){
        swal({
          title:'Thành công',
          text:'Đã cập nhật tài khoản',
          icon:'success'
        })
      }      
      dispatch(createAction(CAP_NHAT_THONG_TIN_NGUOI_DUNG_ACTION,result))      
    } catch (error) {
      console.log(error.response?.data);
    }
  }
}

