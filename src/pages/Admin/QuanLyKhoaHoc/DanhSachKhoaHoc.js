import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { layDanhSachPhimAction } from "../../../redux/actions/QuanLyKhoaHocAction";

export default function DanhSachKhoaHoc() {
  const dispatch = useDispatch();
  //danh mục khóa học
  const { mangKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  const dataSource = mangKhoaHoc;
  const columns = [
    {
      title: "Mã khoá học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "Tên khoá học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text, item) => {
        return (
          <img
            src={item.hinhAnh}
            className="w-100"
            style={{ height: "100px" }}
            alt=""
          />
        );
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayTao",
      key: "ngayTao",
    },
    {
      title: "Tên danh mục",
      dataIndex: "tenDanhMucKhoaHoc",
      key: "tenDanhMucKhoaHoc",
      render: (text, item, index) => {
        return <div key={index}>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</div>;
      },
    },
    {
      title: "Mã danh mục",
      dataIndex: "maDanhMucKhoaHoc",
      key: "maDanhMucKhoaHoc",
      render: (text, item, index) => {
        return <div key={index}>{item.danhMucKhoaHoc.maDanhMucKhoahoc}</div>;
      },
    },
    {
      title: "Mã danh mục",
      dataIndex: "maDanhMucKhoaHoc",
      key: "maDanhMucKhoaHoc",
      render: (text, item, index) => {
        return (
          <div key={index}>
            <Link to='/'>
              <EditOutlined />
            </Link>
            <Link to='/'>
              <DeleteOutlined />
            </Link>
          </div>
        );
      },
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
