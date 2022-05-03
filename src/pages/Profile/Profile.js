import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import ModalCapNhatNguoiDung from "../../components/Modal/ModalCapNhatNguoiDung";

import {
  huyGhiDanhKhoaHoc,
  layThongTinNguoiDungAction,
} from "../../redux/actions/QuanLyNguoiDungAction";
import { ACCESSTOKEN } from "../../util/setting/config";

export default function Profile() {
  const dispatch = new useDispatch();
  const { userProfile } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );
  let chiTietKhoaHocDaDangKy = userProfile.chiTietKhoaHocGhiDanh;

  useEffect(() => {
    //Gọi api lấy thông tin người dùng để load lên redux
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);
  const xoaKhoaHoc = (maKhoaHoc) => {
    if (userProfile) {
      let taiKhoan = userProfile.taiKhoan;
      console.log("taiKhoan", taiKhoan);
      let data = {
        taiKhoan: taiKhoan,
        maKhoaHoc: maKhoaHoc,
      };
      console.log("data", data);
      swal({
        title: "Xoá khoá học",
        text: "Bạn có chắc chắc muốn xoá?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Chắc chắn!",
      });

      dispatch(huyGhiDanhKhoaHoc(data));
    }
  };
  const khoaHocDaDangKy = () => {
    return chiTietKhoaHocDaDangKy?.map((khoaHoc, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card text-white bg-primary">
            <img
              className="w-100"
              src={khoaHoc.hinhAnh}
              alt="Hình ảnh khoá học"
            />
            <div className="card-body">
              <h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
              <button
                onClick={() => xoaKhoaHoc(khoaHoc.maKhoaHoc)}
                className="btn btn-danger"
              >
                Huỷ khoá học
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  if (!localStorage.getItem(ACCESSTOKEN)) {
    swal("Yêu cầu đăng nhập tài khoản !");
    return <Redirect to="/login" />;
  }
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <h3 className="text-center">Thông tin tài khoản</h3>
      <div className="row mt-5">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center p-3 py-5">
            <img
              src="https://picsum.photos/200"
              alt="ảnh đại diện"
              className="rounded-circle mt-5"
            />
            <span className="font-weight-bold">{userProfile.taiKhoan}</span>
            <span className="text-black-50">{userProfile.email}</span>
            <span></span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-group">
            <h5>Tài khoản</h5>
            <p>{userProfile.taiKhoan}</p>
          </div>
          <div className="form-group border-top">
            <h5 className="mt-2">Họ Tên</h5>
            <p>{userProfile.hoTen}</p>
          </div>
          <div className="form-group border-top">
            <h5 className="mt-2">Email</h5>
            <p>{userProfile.email}</p>
          </div>
          <div className="form-group border-top">
            <h5 className="mt-2">Số điện thoại</h5>
            <p>{userProfile.soDT}</p>
          </div>
          <div className="form-group border-top">
            <h5 className="mt-2">Mã nhóm</h5>
            <p>{userProfile.maNhom}</p>
          </div>
          <div className="form-group border-top">
            <h5 className="mt-2">Mã loại người dùng</h5>
            <p>{userProfile.maLoaiNguoiDung}</p>
          </div>
          <div className="d-flex justify-content-center">
            <ModalCapNhatNguoiDung userProfile={userProfile} />
            <NavLink className="ml-3 btn btn-danger" to="/">
              Rời khỏi
            </NavLink>
          </div>
        </div>
      </div>

      {/* Khoá học đã đăng ký */}
      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="text-center">Khoá học đã đăng ký</h3>
          <div className="mt-5">
            {!userProfile.chiTietKhoaHocGhiDanh ? (
              <h3>Bạn chưa đăng ký khoá học nào</h3>
            ) : (
              <div className="row">{khoaHocDaDangKy()}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
