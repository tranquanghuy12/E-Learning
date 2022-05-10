import axios from "axios";

export const DOMAIN = "https://elearningnew.cybersoft.edu.vn/api/";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzAiLCJIZXRIYW5TdHJpbmciOiIxNC8xMC8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjU3MDU2MDAwMDAiLCJuYmYiOjE2Mzc0Mjc2MDAsImV4cCI6MTY2NTg1MzIwMH0.RAzH9H37ZyQ8ZT6A62fw3_bDfJOCq0A9vz08qT262EU";
export const GROUPID = "GP01";

export const USER_LOGIN = "userLogin";
export const ACCESSTOKEN = "accessToken";

export const API_KHOAHOC = "QuanLyKhoaHoc/";
export const API_NGUOIDUNG = "QuanLyNguoiDung/";

//API Người Dùng
export const API_DANGNHAP_NGUOIDUNG = DOMAIN + API_NGUOIDUNG + "DangNhap";
export const API_DANGKY_NGUOIDUNG = DOMAIN + API_NGUOIDUNG + "DangKy";
export const API_THONGTIN_NGUOIDUNG =
  DOMAIN + API_NGUOIDUNG + "ThongTinTaiKhoan";
export const API_CAPNHAT_THONGTIN_NGUOIDUNG =
  DOMAIN + API_NGUOIDUNG + "CapNhatThongTinNguoiDung";
export const API_LAY_MA_LOAI_NGUOI_DUNG =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachLoaiNguoiDung";
export const API_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachNguoiDung_PhanTrang?";
//API Khoá Học
export const API_HUYGHIDANH_KHOAHOC = DOMAIN + API_KHOAHOC + "HuyGhiDanh";

//config axios
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      ["TokenCybersoft"]: TOKEN_CYBERSOFT,
      ["Authorization"]: "Bearer " + localStorage.getItem(ACCESSTOKEN),
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);
