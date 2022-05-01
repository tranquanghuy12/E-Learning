import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import ModalCapNhatNguoiDung from "../../components/Modal/ModalCapNhatNguoiDung";
import { layMaNguoiDungAction, layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { ACCESSTOKEN } from "../../util/setting/config";

export default function Profile() {
  const dispatch = new useDispatch();
  const { userProfile } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );
  // const {maLoaiNguoiDung} = useSelector(rootReducer=>rootReducer.MaLoaiNguoiDungReducer)
  // console.log('maLoaiNguoiDung',maLoaiNguoiDung);
  // useEffect(() => {
  //   //Gọi api lấy thông tin người dùng để load lên redux
  //   const action = layThongTinNguoiDungAction();
  //   dispatch(action);
  // }, []);
  useEffect(() => {
    //Gọi api lấy thông tin người dùng để load lên redux
    dispatch(layThongTinNguoiDungAction())
    // dispatch(layMaNguoiDungAction())
  }, [dispatch]);
  console.log("profile.js", userProfile);
  if (!localStorage.getItem(ACCESSTOKEN)) {
    swal("Yêu cầu đăng nhập tài khoản !");
    return <Redirect to="/login" />;
  }
  return (
    <div className="container">
      <div className="form-group">
        <h5>Tài khoản</h5>
        <p>{userProfile.taiKhoan}</p>
      </div>
      <div className="form-group">
        <h5 htmlFor="">Họ Tên</h5>
        <p>{userProfile.hoTen}</p>
      </div>
      <div className="form-group">
        <h5 htmlFor="">Email</h5>
        <p>{userProfile.email}</p>
      </div>
      <div className="form-group">
        <h5 htmlFor="">Số điện thoại</h5>
        <p>{userProfile.soDT}</p>
      </div>
      <div className="form-group">
        <h5 htmlFor="">Mã nhóm</h5>
        <p>{userProfile.maNhom}</p>
      </div>
      <div className="form-group">
        <h5 htmlFor="">Mã loại người dùng</h5>
        <p>{userProfile.maLoaiNguoiDung}</p>
      </div>
      <div className="text-center">
        <ModalCapNhatNguoiDung
          item={userProfile}
          // maLoaiNguoiDung={maLoaiNguoiDung}
        />
        <button className="btn btn-danger">Rời khỏi</button>
      </div>
    </div>
  );
}
