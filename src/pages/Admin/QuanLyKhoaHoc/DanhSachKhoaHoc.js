import { Input, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";

import {
  timKiemKhoaHocAction,
  xoaKhoaHocAdminAction,
} from "../../../redux/actions/AdminQuanLyKhoaHocAction";
import { layDanhSachKhoaHocAction } from "../../../redux/actions/QuanLyKhoaHocAction";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
export default function DanhSachKhoaHoc(props) {
  const dispatch = useDispatch();
  //danh mục khóa học
  const { mangKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );

  const xoaKhoaHocAdmin = (maKhoaHoc) => {
    swal({
      title: "Bạn có chắc chắn muốn xoá không?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: "Huỷ bỏ",
        confirm: "Đồng ý",
      },
    }).then((result) => {
      if (result === true) {
        dispatch(xoaKhoaHocAdminAction(maKhoaHoc));
      }
    });
  };

  const onSearch = (value) => dispatch(timKiemKhoaHocAction(value));

  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction());
  }, []);
  const dataSource = mangKhoaHoc;
  const columns = [
    {
      title: "Mã khoá",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
      width: "10%",
    },
    {
      title: "Tên khoá học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
      width: "18%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "22%",
      render: (text, item) => {
        return (
          <img
            src={item.hinhAnh}
            style={{ height: "100px", width: "100%" }}
            alt="Hình ảnh khoá học"
          />
        );
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayTao",
      key: "ngayTao",
      width: "10%",
    },
    {
      title: "Tên danh mục",
      dataIndex: "tenDanhMucKhoaHoc",
      key: "tenDanhMucKhoaHoc",
      width: "12%",
      render: (text, item) => {
        return <div>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</div>;
      },
    },
    {
      title: "Mã mục",
      dataIndex: "maDanhMucKhoaHoc",
      key: "maDanhMucKhoaHoc",
      width: "10%",
      render: (text, item) => {
        return <div>{item.danhMucKhoaHoc.maDanhMucKhoahoc}</div>;
      },
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      width: "18%",
      render: (text, record) => {
        return (
          <>
            <NavLink
              to={`/admin/quanlykhoahoc/capnhatthongtinkhoahoc/${record.maKhoaHoc}`}
            >
              <button className="btn__edit_user mr-1">
                <EditOutlined />
              </button>
            </NavLink>
            <button
              className="btn__delete_user text-white mr-1"
              onClick={() => xoaKhoaHocAdmin(record.maKhoaHoc)}
            >
              <DeleteOutlined />
            </button>
            <NavLink
              to={`/admin/quanlykhoahoc/ghidanhkhoahoc/${record.maKhoaHoc}`}
            >
              <button className="btn__ghidanh_user">
                <i className="fas fa-registered"></i>
              </button>
            </NavLink>
          </>
        );
      },
    },
  ];
  return (
    <div className="container mt-5">
      <Input.Search
        className="mb-5"
        placeholder="Nhập tên khoá học muốn tìm"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table dataSource={dataSource} columns={columns} rowKey="maKhoaHoc" />
    </div>
  );
}
