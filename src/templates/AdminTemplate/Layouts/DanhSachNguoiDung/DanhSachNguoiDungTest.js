import { Table } from "antd";
import React, { Fragment, useEffect } from "react";
import { Input, Space } from "antd";
import { AudioOutlined, SearchOutlined, EditOutlined,DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachNguoiDung } from "../../../../redux/actions/AdminQuanLyAction";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const { Search } = Input;

export default function DanhSachNguoiDungTest() {
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector(
    (rootReducer) => rootReducer.MaLoaiNguoiDungReducer
  );
  console.log("dsNDPTData", danhSachNguoiDung);
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
      //defaultSortOrder: "descend",
      //sorter: (a, b) => a.hoTen.length - b.hoTen.length,
      //sortDirections: ["descend", "ascend"],
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
      // sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.soDt - b.soDt,
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      // sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ["descend"],
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      render: (text, nguoiDung) => {
        return (
          <Fragment>
            <NavLink className="btn bg-primary text-white mr-2" to="/admin/quanlynguoidung/:taiKhoan">
              <EditOutlined />
            </NavLink> 
            <NavLink className="btn bg-danger text-white" to="/">
              <DeleteOutlined />
            </NavLink>
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
      <h3>Quản lý người dùng</h3>
      <button className="btn btn-default mb-5">
          <Link to='/quanlynguoidung/themnguoidung'>
          Thêm người dùng
          </Link>
      </button>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
