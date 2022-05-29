import React from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { history } from "../../../../App";
import { dangKyKhoaHocAntion } from "../../../../redux/actions/AdminQuanLyKhoaHocAction";

export default function ChiTietKhoaHocItem({ chiTietKhoaHoc }) {
  const dispatch = useDispatch();
  const dangKyKhoaHocClick = () => {
    if (localStorage.getItem("userLogin")) {
      const taiKhoan = JSON.parse(localStorage.getItem("userLogin")).taiKhoan;
      let data = {
        taiKhoan: taiKhoan,
        maKhoaHoc: chiTietKhoaHoc.maKhoaHoc,
      };
      dispatch(dangKyKhoaHocAntion(data));
    } else {
      swal({
        title: "Bạn chưa đăng nhập!",
        text: "Bạn có muốn đến trang đăng nhập",
        icon: "warning",
        buttons: ["Đăng ký", "Đăng nhập"],
      }).then((result) => {
        if (result === true) {
          history.push("/login");
        } else {
          history.push("/register");
        }
      });
    }
  };
  return (
    <>
      <div className="row align-items-center justify-content-center m-0">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <img
            src={chiTietKhoaHoc.hinhAnh}
            className="card-img-top"
            width={"200px"}
            height={"200px"}
            alt="Hình ảnh khoá học"
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2>{chiTietKhoaHoc.tenKhoaHoc}</h2>
          <p>{chiTietKhoaHoc.ngayTao}</p>
          <p>{chiTietKhoaHoc.luotXem}</p>
          <button onClick={dangKyKhoaHocClick} className="btn btn-success">
            ENROLL
          </button>
        </div>
      </div>
      <div className="row m-0 mt-3">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>Giới thiệu khoá học</h3>
          <p>{chiTietKhoaHoc.moTa}</p>
        </div>
      </div>
    </>
  );
}
