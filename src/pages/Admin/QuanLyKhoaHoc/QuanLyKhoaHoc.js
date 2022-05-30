import React from "react";
import { Link } from "react-router-dom";
import DanhSachKhoaHoc from "./DanhSachKhoaHoc";
import ThemKhoaHoc from "./ThemKhoaHoc";

export default function QuanLyKhoaHoc(props) {
  return (
    <div className="container-fluid mt-5">
      <ul
        className="nav nav-tabs justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Danh sách khoá học
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Thêm khoá học
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <DanhSachKhoaHoc />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ThemKhoaHoc />
        </div>
      </div>
    </div>
  );
}
