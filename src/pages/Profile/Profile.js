import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import ModalCapNhatNguoiDung from "../../components/Modal/ModalCapNhatNguoiDung";
import "./Profile.scss";
import {
  layMaLoaiNguoiDung,
  layThongTinNguoiDungAction,
} from "../../redux/actions/QuanLyNguoiDungAction";
import { ACCESSTOKEN } from "../../util/setting/config";
import DanhSachKhoaHocDaDangKy from "./DanhSachKhoaHocDaDangKy";
export default function Profile() {
  const dispatch = new useDispatch();
  const { userProfile } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );

  useEffect(() => {
    dispatch(layMaLoaiNguoiDung());
    dispatch(layThongTinNguoiDungAction());
  }, [dispatch]);

  if (!localStorage.getItem(ACCESSTOKEN)) {
    swal("Yêu cầu đăng nhập tài khoản !");
    return <Redirect to="/login" />;
  }
  return (
    <div
      className="container rounded bg-white mb-5 mt-5"
      style={{ paddingTop: 126 }}
    >
      <h3 className="text-center">Thông tin tài khoản</h3>
      <div className="row mt-5">
        <div className="col-md-4 border-right border-secondary">
          <div className="d-flex flex-column align-items-center p-3 py-5">
            <img
              src="https://picsum.photos/200"
              alt="ảnh đại diện"
              className="rounded-circle mt-5"
            />
            <h5 className="font-weight-bold mt-3">
              Xin chào, {userProfile.taiKhoan}
            </h5>
            <span className="text-black-50">{userProfile.email}</span>
            <span></span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-group">
            <h5>Tài khoản</h5>
            <p>{userProfile.taiKhoan}</p>
          </div>
          <div className="form-group border-top border-danger">
            <h5 className="mt-2">Họ Tên</h5>
            <p>{userProfile.hoTen}</p>
          </div>
          <div className="form-group border-top border-danger">
            <h5 className="mt-2">Email</h5>
            <p>{userProfile.email}</p>
          </div>
          <div className="form-group border-top border-danger">
            <h5 className="mt-2">Số điện thoại</h5>
            <p>{userProfile.soDT}</p>
          </div>
          <div className="form-group border-top border-danger">
            <h5 className="mt-2">Mã nhóm</h5>
            <p>{userProfile.maNhom}</p>
          </div>
          <div className="form-group border-top border-danger">
            <h5 className="mt-2">Mã loại người dùng</h5>
            <p>{userProfile.maLoaiNguoiDung}</p>
          </div>
          <div className="d-flex justify-content-center">
            <ModalCapNhatNguoiDung userProfile={userProfile} />
            {userProfile.maLoaiNguoiDung === "GV" ? (
              <button className="btn btn-success ml-3">
                <Link to="/admin" style={{ color: "white" }}>
                  Quản Lý
                </Link>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* Khoá học đã đăng ký */}
      <h3 className="text-center mt-5">Khoá học đã đăng ký</h3>
      {!userProfile.chiTietKhoaHocGhiDanh ? (
        <>
          <div>Bạn chưa đăng ký khoá học nào</div>
        </>
      ) : (
        <>
          <div>
            <DanhSachKhoaHocDaDangKy userProfile={userProfile} />
          </div>
        </>
      )}
    </div>
  );
}
