import { Table } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  huyGhiDanhKhoaHocAdmin,
  layDanhSachKhoaHocDaXetDuyet,
} from "../../../../redux/actions/AdminQuanLyAction";

export default function KhoaHocDaGhiDanh(props) {
  const dispatch = useDispatch();
  const taiKhoan = useParams();
  const { dsKhoaHocDaXetDuyet } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyKhoaHocReducer
  );
  useEffect(() => {
    const action = layDanhSachKhoaHocDaXetDuyet(taiKhoan);
    dispatch(action);
  }, []);

  const dataSource = dsKhoaHocDaXetDuyet;

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
      render: (text, khoaHoc) => {
        const xoaKhoaHoc = (maKhoaHoc) => {
          if (taiKhoan) {
            let data = {
              taiKhoan: taiKhoan.taiKhoan,
              maKhoaHoc: khoaHoc.maKhoaHoc,
            };
            swal({
              title: "Xoá khoá học",
              text: "Bạn có chắc chắc muốn xoá?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Chắc chắn!",
            }).then((result) => {
              if (result === true) {
                swal("Đã xoá!", "Khoá học đã được xoá.");
                dispatch(huyGhiDanhKhoaHocAdmin(data));
              }
            });
          }
        };
        return (
          <Fragment>
            <button
              className="btn btn-danger"
              onClick={() => xoaKhoaHoc(khoaHoc.maKhoaHoc)}
            >
              Huỷ
            </button>
          </Fragment>
        );
      },
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} scroll={{ y: 300 }} />
  );
}
