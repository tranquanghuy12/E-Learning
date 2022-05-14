import { Table } from "antd";
import React, { Fragment, useEffect } from "react";
import { Input } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDung,
  adminXoaNguoiDungAction,
} from "../../../../redux/actions/AdminQuanLyAction";
import CapNhatThongTinNguoiDung from "../../../../pages/Admin/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const { Search } = Input;

export default function DanhSachNguoiDung({ maLoaiNguoiDung }) {
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector(
    (rootReducer) => rootReducer.MaLoaiNguoiDungReducer
  );

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
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ["descend"],
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let tenUserA = a.hoTen.toLowerCase().trim();
        let tenUserB = b.hoTen.toLowerCase().trim();
        if (tenUserA > tenUserB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => {
        let tenUserA = a.email.toLowerCase().trim();
        let tenUserB = b.email.toLowerCase().trim();
        if (tenUserA > tenUserB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
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
      defaultSortOrder: "descend",
      sorter: (a, b) => a.soDt - b.soDt,
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      sortDirections: ["descend"],
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      render: (text, nguoiDung) => {
        return (
          <Fragment>
            <NavLink
              className="btn bg-primary text-white mr-2"
              to={`/admin/quanlynguoidung/${nguoiDung.taiKhoan}`}
              Component={CapNhatThongTinNguoiDung}
            >
              <EditOutlined />
            </NavLink>
            <button
              className="btn bg-danger text-white"
              onClick={() => xoaNguoiDungAdmin(nguoiDung.taiKhoan)}
            >
              <DeleteOutlined />
            </button>
          </Fragment>
        );
      },
    },
  ];

  const data = danhSachNguoiDung;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const onSearch = (value) => console.log(value);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>Quản lý người dùng</h3>
          <button className="btn btn-default mb-5">
            <Link to="/admin/quanlynguoidung/themnguoidung">
              Thêm người dùng
            </Link>
          </button>
        </div>
        <div className="col-md-5">
          <Search
            className="mb-5"
            placeholder="input search text"
            enterButton={<SearchOutlined />}
            size="large"
            onSearch={onSearch}
          />
        </div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  );
}
