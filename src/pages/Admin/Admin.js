import React from "react";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import './main.scss'
export default function Admin() {
  const token = JSON.parse(localStorage.getItem("userLogin"));

  if (token && token.maLoaiNguoiDung === "GV") {
    return (
      <>
        <div className="jumbotron text-right pr-5">
          <h1 className="display-4">Quản lý người dùng</h1>
          <p className="lead">
            Trang thao tác thêm, xoá, sửa, quản lý... Chỉ admin mới có thể thực
            hiện
          </p>
          <hr className="my-4" />
          <p className="lead">
            <Link
              className="btn btn-custom"
              to="/admin/quanlynguoidung"
              role="button"
            >
              Đi đến
            </Link>
          </p>
        </div>
        <div className="jumbotron">
          <h1 className="display-4">Quản lý khoá học</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Link
              className="btn btn-primary btn-lg"
              to="/admin/quanlykhoahoc"
              role="button"
            >
              Đi đến
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
