import swal from "sweetalert";
import { createAction } from ".";
import { history } from "../../App";
import {
  API_CAPNHAT_THONGTIN_NGUOIDUNG_ADMIN,
  API_CHI_TIET_NGUOI_DUNG_ADMIN,
  API_GHI_DANH_KHOA_HOC_ADMIN,
  API_HUYGHIDANH_KHOAHOC,
  API_LAY_DANH_SACH_KHOA_HOC_CHUA_GHI_DANH_ADMIN,
  API_LAY_DANH_SACH_NGUOI_DUNG,
  API_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
  API_LAY_DS_KHOA_HOC_CHO_XET_DUYET,
  API_LAY_DS_KHOA_HOC_DA_XET_DUYET,
  API_THEM_NGUOI_DUNG_ADMIN,
  API_TIM_KIEM_NGUOI_DUNG_ADMIN,
  API_XOA_NGUOI_DUNG_ADMIN,
  http,
} from "../../util/setting/config";
import {
  ADMIN_CAPNHAT_THONGTIN_NGUOIDUNG,
  ADMIN_CHI_TIET_THONG_TIN_NGUOI_DUNG,
  ADMIN_GHI_DANH_KHOA_HOC,
  ADMIN_LAY_DS_KHOA_HOC_CHO_XET_DUYET,
  ADMIN_LAY_DS_KHOA_HOC_CHUA_GHI_DANH,
  ADMIN_LAY_DS_KHOA_HOC_DA_XET_DUYET,
  ADMIN_THEM_NGUOI_DUNG,
} from "../types/AdminNguoiDungType";
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
export const layDanhSachNguoiDungSearch = (value) => {
  return async (dispatch) => {
    try {
      let res = await http.get(
        `${API_TIM_KIEM_NGUOI_DUNG_ADMIN}&tuKhoa=${value}`
      );

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

export const capNhatThongTinNguoiDungAdmin = (data) => {
  return async (dispatch) => {
    try {
      console.log('data',data)
      let result = await http.put(API_CAPNHAT_THONGTIN_NGUOIDUNG_ADMIN, data);

      if (result.status === 200) {
        swal({
          title: "Thành công",
          text: "Đã cập nhật tài khoản",
          icon: "success",
        });
        dispatch(createAction(ADMIN_CAPNHAT_THONGTIN_NGUOIDUNG, result));
        history.push("/admin/quanlynguoidung");
      }
    } catch (error) {
      console.log('error',error.response?.data)
    }
  };
};

export const chiTietNguoiDungAdminAction = () => {
  return async (dispatch) => {
    try {
      let result = await http.get(API_CHI_TIET_NGUOI_DUNG_ADMIN);
      if (result.status === 200) {
        dispatch(
          createAction(ADMIN_CHI_TIET_THONG_TIN_NGUOI_DUNG, result.data)
        );
      }
    } catch (error) {
      swal("Error", error.response?.data);
    }
  };
};
export const layDanhSachKhoaHocChuaGhiDanh = (taiKhoan) => {
  return async (dispatch) => {
    try {
      let result = await http.post(
        `${API_LAY_DANH_SACH_KHOA_HOC_CHUA_GHI_DANH_ADMIN}&taiKhoan=${taiKhoan}`
      );
      if (result.status === 200) {
        dispatch(
          createAction(ADMIN_LAY_DS_KHOA_HOC_CHUA_GHI_DANH, result.data)
        );
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const layDanhSachKhoaHocChoXetDuyet = (taiKhoan) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_LAY_DS_KHOA_HOC_CHO_XET_DUYET, taiKhoan);
      dispatch(createAction(ADMIN_LAY_DS_KHOA_HOC_CHO_XET_DUYET, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const layDanhSachKhoaHocDaXetDuyet = (taiKhoan) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_LAY_DS_KHOA_HOC_DA_XET_DUYET, taiKhoan);
      dispatch(createAction(ADMIN_LAY_DS_KHOA_HOC_DA_XET_DUYET, result.data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
export const ghiDanhKhoaHocAdminAction = (values) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_GHI_DANH_KHOA_HOC_ADMIN, values);
      if (result.status === 200) {
        swal({
          title: "Ghi Danh Thành Công",
          icon: "success",
          button:false
        });
        dispatch(createAction(ADMIN_GHI_DANH_KHOA_HOC, result));
        window.location.reload();
      }        
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const huyGhiDanhKhoaHocAdmin = (data) => {
  return async (dispatch) => {
    try {
      let result = await http.post(API_HUYGHIDANH_KHOAHOC, data);
      swal({
        title:"Xoá thành công",
        icon:"success",
        button:false
      });
      window.location.reload();
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};


