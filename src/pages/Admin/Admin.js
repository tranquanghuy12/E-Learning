import { createBrowserHistory } from "history";
import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from "sweetalert";

export default function Admin() {
  const history = useHistory();
  // const history = createBrowserHistory();
  const tuChoiTruyCap = () => {
    swal({
      title: "Truy cập thất bại",
      icon: "error",
      text: "Vui lòng đăng nhập bằn tài khoản quản trị",
      confirmButtonText: "Đăng nhập",
    });
    localStorage.removeItem("userLogin");
    localStorage.removeItem("accessToken");
    history.push("/login");
  };
  const token = JSON.parse(localStorage.getItem("userLogin"));
  console.log("token", token);
  return (
    <>
      {token && token.maLoaiNguoiDung === "GV" ? (
        <div className="container">
          <div className="row">
            <NavLink to="admin/quanlynguoidung" className="col-md-6">
              <button className="btn btn-success">Quản lý người dùng</button>
            </NavLink>
            <NavLink className="col-md-6" to="/home">
              <button className="btn btn-dark">Quản lý khoá học</button>
            </NavLink>
          </div>
        </div>
      ) : (
        tuChoiTruyCap()
      )}
    </>
  );
}
