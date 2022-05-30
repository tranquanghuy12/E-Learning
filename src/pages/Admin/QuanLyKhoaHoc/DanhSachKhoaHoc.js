import { Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import ModalCapNhatKhoaHoc from "../../../components/ModalCapNhatKhoaHoc/ModalCapNhatKhoaHoc";
import { xoaKhoaHocAdminAction } from "../../../redux/actions/AdminQuanLyKhoaHocAction";
import { layDanhSachPhimAction } from "../../../redux/actions/QuanLyKhoaHocAction";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
export default function DanhSachKhoaHoc() {
  const dispatch = useDispatch();

  //danh mục khóa học
  const { mangKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );
  console.log("mảng ", mangKhoaHoc);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modaldata, setModaldata] = useState([]);
  const showModal = (record) => {
    console.log(record);
    setModaldata(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
      title: "Thao tác",
      dataIndex: "action",
      key: "action",

      render: (text, record, index) => {
        return (
          <>
            <button
              className="btn__edit_user mr-2"
              onClick={() => showModal(record)}
            >
              <EditOutlined />
            </button>
            <button
              className="btn__delete_user text-white mr-2"
              onClick={() => xoaKhoaHocAdmin(record.maKhoaHoc)}
            >
              <DeleteOutlined />
            </button>
            <Link
              to={`/admin/quanlykhoahoc/ghidanhkhoahoc/${record.maKhoaHoc}`}
            >
              <button className="btn__ghidanh_user">Ghi Danh</button>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <div className="container mt-5">
      <Modal
        title="Cập nhật thông tin khoá học"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalCapNhatKhoaHoc modaldata={modaldata} />
      </Modal>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
