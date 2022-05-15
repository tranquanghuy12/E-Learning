import {Modal, Table } from "antd";
import React, { Fragment, useEffect, useState } from "react";
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
import GhiDanh from "../GhiDanh/GhiDanh";

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
    if (danhSachNguoiDung.taiKhoan === value) {
      return value;
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

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
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder="Type text here"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
        );
      },
      filterIcon: () => {
        <SearchOutlined />;
      },
      onFilter: (value, data) => {
        return data.taiKhoan.toLowerCase().includes(value.toLowerCase());
      },
      // sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      // sortDirections: ["descend"],
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
            <Link
              className="btn bg-primary text-white mr-2"
              to={`/admin/quanlynguoidung/${nguoiDung.taiKhoan}`}
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
            <button className="btn btn-success ml-2" onClick={showModal}>
              Ghi danh
            </button>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <GhiDanh nguoiDung={nguoiDung} />
            </Modal>
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
