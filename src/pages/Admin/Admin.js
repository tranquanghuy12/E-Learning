import React from "react";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import "./main.scss";
export default function Admin() {
  const token = JSON.parse(localStorage.getItem("userLogin"));

  if (token && token.maLoaiNguoiDung === "GV") {
    return <></>;
  } else {
    swal({
      title: "Bạn không đủ quyền truy cập",
      icon: "error",
    });
    return <Redirect to="/"></Redirect>;
  }
}
