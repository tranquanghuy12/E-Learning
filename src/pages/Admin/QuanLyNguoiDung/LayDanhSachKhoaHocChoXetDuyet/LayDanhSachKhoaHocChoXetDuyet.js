import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachKhoaHocChoXetDuyet } from "../../../../redux/actions/AdminQuanLyAction";
import { useParams } from "react-router-dom";

export default function LayDanhSachKhoaHocChoXetDuyet(props) {
  
  const dispatch = useDispatch();
  const { dsKhoaHocChoXetDuyet } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyKhoaHocReducer
  );
  

  useEffect(() => {
    dispatch(layDanhSachKhoaHocChoXetDuyet(props.taiKhoan));
  }, []);


  const dataSource = dsKhoaHocChoXetDuyet
  
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
      title: "Chờ xác nhận",
      render:(text,nguoiDung) =>{
        return (
          <Fragment>
            <button className="btn btn-primary">
              Xác thực
            </button>
            <button className="btn btn-danger ml-3">
              Huỷ
            </button>
          </Fragment>
        )
      }
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
