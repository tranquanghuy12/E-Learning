import React from "react";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import "./main.scss";
export default function Admin() {
  const token = JSON.parse(localStorage.getItem("userLogin"));

  if (token && token.maLoaiNguoiDung === "GV") {
    return (
      <>
        <h1 className="text-center display-4">Dashboard Admin</h1>
        <div className="rounded-0 jumbotron text-right pr-5 animate__animated animate__fadeInRight animate__delay-0.5s">
          <h1 className="display-4 jumbotron__title">Quản lý người dùng</h1>
          <hr className="my-4 hr__color" />
          <p className="lead">
            <Link to="/admin/quanlynguoidung">
              <button className="glow-on-hover" role="button">
                Đi đến
              </button>
            </Link>
          </p>
        </div>
        <div className="rounded-0 jumbotron animate__animated animate__fadeInLeft animate__delay-1s">
          <h1 className="display-4 jumbotron__title">Quản lý khoá học</h1>
          <hr className="my-4 hr__color" />
          <p className="lead">
            <Link to="/admin/quanlykhoahoc">
              <button className="glow-on-hover" role="button">
                Đi đến
              </button>
            </Link>
          </p>
        </div>
      </>
    );
  } else {
    swal({
      title: "Bạn không đủ quyền truy cập",
      icon: "error",
    });
    return <Redirect to="/"></Redirect>;
  }
}
