import React from "react";
import { Link } from "react-router-dom";
import DanhSachKhoaHoc from "./DanhSachKhoaHoc";
import ThemKhoaHoc from "./ThemKhoaHoc";

export default function QuanLyKhoaHoc() {
  return (
    <div>
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
            id="themkhoahoc-tab"
            data-toggle="tab"
            href="#themkhoahoc"
            role="tab"
            aria-controls="themkhoahoc"
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
          id="themkhoahoc"
          role="tabpanel"
          aria-labelledby="themkhoahoc-tab"
        >
          <ThemKhoaHoc />
        </div>
      </div>
    </div>
  );
}
