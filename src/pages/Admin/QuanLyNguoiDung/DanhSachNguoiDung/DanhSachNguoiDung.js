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
import GhiDanhNguoiDung from "../GhiDanhKhoaHoc/GhiDanhNguoiDung";

export default function DanhSachNguoiDung({ maLoaiNguoiDung }) {
  const { Search } = Input;
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector(
    (rootReducer) => rootReducer.MaLoaiNguoiDungReducer
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text, nguoiDung) => {
        return (
          <Fragment>
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
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      render: (text, nguoiDung) => {
        return (
          <Fragment>
            <Link
              className="btn bg-primary text-white mr-2"
              to={`/admin/quanlynguoidung/capnhatthongtinnguoidung/${nguoiDung.taiKhoan}`}
              Component={CapNhatThongTinNguoiDung}
            >
              <EditOutlined />
            </Link>
            <button
              className="btn bg-danger text-white"
              onClick={() => xoaNguoiDungAdmin(nguoiDung.taiKhoan)}
            >
              <DeleteOutlined />
            </button>

            <Link
              className="btn bg-warning ml-2"
              to={`/admin/quanlynguoidung/ghidanhnguoidung/${nguoiDung.taiKhoan}`}
              Component={GhiDanhNguoiDung}
            >
              Ghi Danh
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
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/admin">Admin</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Quản lý người dùng
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-md-6">
          <h1>Quản lý người dùng</h1>
          <button className="btn btn-default mb-5">
            <Link to="/admin/quanlynguoidung/themnguoidung">
              Thêm người dùng
            </Link>
          </button>
        </div>
        <div className="col-md-6">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
