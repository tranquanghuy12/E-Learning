import swal from "sweetalert";
import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data,
        });
        swal({
          title:"Đăng nhập thành công",
          icon:"success"
        })
        if (result.data.maLoaiNguoiDung === "HV") {
          history.push("/home");
        } else {
          history.push("/admin");
        }
      }

      console.log("result dangNhapAction", result);
    } catch (error) {
      swal({
        title: "Đăng nhập thất bại",
        text: error.response?.data,
        icon: "error",
      })
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
          title:"Đăng ký thành công",
          icon:"success"
        })
        history.push("/login");
      }
      console.log("result", result);
    } catch (error) {
      swal({
        title: "Đăng ký thất bại",
        text: error.response?.data,
        icon: "error",
      })
    }
  };
};
