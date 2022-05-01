import axios from "axios";
import swal from "sweetalert";
import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";

import {TOKEN_CYBERSOFT, DOMAIN,ACCESSTOKEN, http, USER_LOGIN } from "../../util/setting/config";

import {
  DANG_KY_ACTION,
  
  LAY_MA_LOAI_NGUOI_DUNG,
  THONG_TIN_NGUOI_DUNG_ACTION,
} from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url:`${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
        method:'POST',
        data:userLogin,
        headers:{
          'TokenCybersoft': TOKEN_CYBERSOFT
        }
      })

      let usLogin = result.data;
      console.log(usLogin);
      let token = usLogin.accessToken;
      console.log(token);
      localStorage.setItem(ACCESSTOKEN, token);
      localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin));
      console.log("result dangNhapAction", result.data);
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
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy)
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
      console.log("get user info", result);

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

export const layMaNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        "/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"
      );
      dispatch({
        type: LAY_MA_LOAI_NGUOI_DUNG,
        maLoaiNguoiDung: result.data,
      });
      console.log(result);
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
