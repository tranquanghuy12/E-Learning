import { Modal, Table, Input } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDung,
  adminXoaNguoiDungAction,
  layDanhSachNguoiDungSearch,
} from "../../../../redux/actions/AdminQuanLyAction";
import CapNhatThongTinNguoiDung from "../CapNhatThongTinNguoiDung/CapNhatThongTinNguoiDung";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import GhiDanhNguoiDung from "../../QuanLyGhiDanh/GhiDanhNguoiDung/GhiDanhNguoiDung";

export default function DanhSachNguoiDung() {
  const { Search } = Input;
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector(
    (rootReducer) => rootReducer.MaLoaiNguoiDungReducer
  );
  const onSearch = (value) => {
    dispatch(layDanhSachNguoiDungSearch(value));
  };

  const xoaNguoiDungAdmin = (taiKhoan) => {
    swal({
      title: "Bạn có chắn muốn xoá không?",
      showCancelButton: true,
      confirmButtonText: "Chắc chắn",
    }).then((result) => {
      if (result === true) {
        dispatch(adminXoaNguoiDungAction(taiKhoan));
      }
    });
  };
  useEffect(() => {
    dispatch(layDanhSachNguoiDung());
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, nguoiDung) => {
        return (
          <Fragment key={nguoiDung.email}>
            {nguoiDung.email.length > 20
              ? nguoiDung.email.substr(0, 20) + "..."
              : nguoiDung.email}
          </Fragment>
        );
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
    },
    {
      title: "Chức năng",
      dataIndex: "nguoiDung",
      key: "taiKhoan",
      render: (text, nguoiDung) => {
        return (
          <Fragment key={nguoiDung.taiKhoan}>
            <Link
              key={1}
              to={`/admin/quanlynguoidung/capnhatthongtinnguoidung/${nguoiDung.taiKhoan}`}
            >
              <button
                className="btn__edit_user mr-2"
                Component={CapNhatThongTinNguoiDung}
              >
                <EditOutlined />
              </button>
            </Link>
            <button
              key={2}
              className="btn__delete_user text-white mr-2"
              onClick={() => xoaNguoiDungAdmin(nguoiDung.taiKhoan)}
            >
              <DeleteOutlined />
            </button>
            <Link
              key={3}
              to={`/admin/quanlynguoidung/ghidanhnguoidung/${nguoiDung.taiKhoan}`}
            >
              <button className="btn__ghidanh_user">Ghi Danh</button>
            </Link>
          </Fragment>
        );
      },
    },
  ];

  const data = danhSachNguoiDung;

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/admin">
              Admin
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Quản lý người dùng
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-md-6">
          <h1>Quản lý người dùng</h1>
          <Link
            className="btn btn-success mb-5"
            to="/admin/quanlynguoidung/themnguoidung"
          >
            Thêm người dùng
          </Link>
        </div>
        <div className="col-md-6">
          <Search
            placeholder="Tìm kiếm mã khoá học"
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
