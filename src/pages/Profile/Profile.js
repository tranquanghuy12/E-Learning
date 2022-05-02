import { result } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import LoadingLazy from "../../components/LazyLoad/LazyLoad";
import ModalCapNhatNguoiDung from "../../components/Modal/ModalCapNhatNguoiDung";
import {
  huyGhiDanhKhoaHoc,
  layMaNguoiDungAction,
  layThongTinNguoiDungAction,
} from "../../redux/actions/QuanLyNguoiDungAction";
import { ACCESSTOKEN } from "../../util/setting/config";

export default function Profile() {
  const dispatch = new useDispatch();
  const { userProfile } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );
  let chiTietKhoaHocDaDangKy = userProfile.chiTietKhoaHocGhiDanh;
  

  const { maLoaiNguoiDung } = useSelector(
    (rootReducer) => rootReducer.MaLoaiNguoiDungReducer
  );
    const {maKhoaHoc} = useSelector(rootReducer=>rootReducer.ChiTietKhoaHocReducer)
    console.log(maKhoaHoc);
  // useEffect(() => {
  //   //Gọi api lấy thông tin người dùng để load lên redux
  //   const action = layThongTinNguoiDungAction();
  //   dispatch(action);
  // }, []);
  useEffect(() => {
    //Gọi api lấy thông tin người dùng để load lên redux
    dispatch(layThongTinNguoiDungAction());
    dispatch(layMaNguoiDungAction());
    
  }, [dispatch]);
  const xoaKhoaHoc = (maKhoaHoc) => {
    if (userProfile) {
      let taiKhoan = userProfile.taiKhoan;
      console.log('taiKhoan',taiKhoan);
      let data = {
        taiKhoan: taiKhoan,
        maKhoaHoc: maKhoaHoc,
      };
      console.log('data',data);
      // swal({
      //   title: "Xoá khoá học",
      //   text: "Bạn có chắc chắc muốn xoá?",
      //   showCancelButton: true,
      //   confirmButtonText: "Chắc chắn!",
      // });

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
    <div>
      {maLoaiNguoiDung ? (
        <div>
          {!userProfile ? (
            <div>
              <LoadingLazy />
            </div>
          ) : (
            <div className="container">
              <div className="form-group">
                <h5>Tài khoản</h5>
                <p>{userProfile.taiKhoan}</p>
              </div>
              <div className="form-group">
                <h5>Họ Tên</h5>
                <p>{userProfile.hoTen}</p>
              </div>
              <div className="form-group">
                <h5>Email</h5>
                <p>{userProfile.email}</p>
              </div>
              <div className="form-group">
                <h5>Số điện thoại</h5>
                <p>{userProfile.soDT}</p>
              </div>
              <div className="form-group">
                <h5>Mã nhóm</h5>
                <p>{userProfile.maNhom}</p>
              </div>
              <div className="form-group">
                <h5>Mã loại người dùng</h5>
                <p>{userProfile.maLoaiNguoiDung}</p>
              </div>
              <div className="d-flex justify-content-center">
                <ModalCapNhatNguoiDung
                  item={userProfile}
                  maLoaiNguoiDung={maLoaiNguoiDung}
                />
                <button className="ml-3 btn btn-danger">Rời khỏi</button>
              </div>
              <h1 className="">Khoá học đã đăng ký</h1>
              <div>
                {!userProfile.chiTietKhoaHocGhiDanh ? (
                  <h3>Bạn chưa đăng ký khoá học nào</h3>
                ) : (
                  <div className="row">{khoaHocDaDangKy()}</div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}
