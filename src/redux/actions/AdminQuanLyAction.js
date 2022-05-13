import { values } from "lodash";
import React from "react";
import swal from "sweetalert";
import { createAction } from ".";
import { history } from "../../App";
import {
  API_LAY_DANH_SACH_NGUOI_DUNG,
  API_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
  API_THEM_NGUOI_DUNG_ADMIN,
  API_XOA_NGUOI_DUNG_ADMIN,
  http,
} from "../../util/setting/config";
import { ADMIN_THEM_NGUOI_DUNG } from "../types/AdminNguoiDungType";
import {
  LAY_DANH_SACH_NGUOI_DUNG,
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
  LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_DATA,
} from "../types/QuanLyNguoiDungType";

export const layDanhSachNguoiDungPhanTrang = (param) => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        `${API_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG}${param}`
      );
      dispatch(createAction(LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG, result.data));
      dispatch(
        createAction(
          LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_DATA,
          result.data.items
        )
      );
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const layDanhSachNguoiDung = () => {
  return async (dispatch) => {
    try {
      let res = await http.get(API_LAY_DANH_SACH_NGUOI_DUNG);

      dispatch(createAction(LAY_DANH_SACH_NGUOI_DUNG, res.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const adminThemNguoiDungAction = (values) => {
  return async (dispatch) => {
    try {
      let kq = await http.post(API_THEM_NGUOI_DUNG_ADMIN, values);
      if (kq.status === 200) {
        swal({
          title: "Thêm người dùng thành công",
          icon: "success",
        });

        dispatch(createAction(ADMIN_THEM_NGUOI_DUNG, kq.data));
        history.push("/admin/quanlynguoidung");
      }
    } catch (error) {
      swal({
        title: "Thất bại",
        text: error.response?.data,
        icon: "error",
      });
    }
  };
};

export const adminXoaNguoiDungAction = (taikhoan) => {
  return async (dispatch) => {
    try {
      let res = await http.delete(`${API_XOA_NGUOI_DUNG_ADMIN}${taikhoan}`);
      console.log("result xoa nguoi dung", res);
      if (res.status === 200) {
        swal({
          title: "Thành công",
          text: "Bạn đã xoá thành công",
        });
        await dispatch(layDanhSachNguoiDung());
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};
