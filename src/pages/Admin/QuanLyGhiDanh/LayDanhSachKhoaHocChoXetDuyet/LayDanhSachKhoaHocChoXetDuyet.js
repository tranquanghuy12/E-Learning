import React, { Fragment, useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  ghiDanhKhoaHocAdminAction,
  huyGhiDanhKhoaHocAdmin,
  layDanhSachKhoaHocChoXetDuyet,
} from "../../../../redux/actions/AdminQuanLyAction";
import swal from "sweetalert";

export default function LayDanhSachKhoaHocChoXetDuyet(props) {
  const dispatch = useDispatch();
  const taiKhoan = props.taiKhoan;

  const { dsKhoaHocChoXetDuyet } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyKhoaHocReducer
  );

  useEffect(() => {
    dispatch(layDanhSachKhoaHocChoXetDuyet(taiKhoan));
  }, []);
  const dataSource = dsKhoaHocChoXetDuyet;

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
              maKhoaHoc: maKhoaHoc,
            };
            console.log("data xoaKhoaHoc", data);
            swal({
              title: "Xoá khoá học chờ xác thực",
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
        const ghiDanh = (maKhoaHoc) => {
          if(taiKhoan){
            let data = {
              taiKhoan: taiKhoan.taiKhoan,
              maKhoaHoc: maKhoaHoc,
            }
            console.log('data ghi danh',data);
            swal({
              title: "Xác thực ghi danh",
              text: "Bạn có chắc chắc muốn xác thực?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Chắc chắn!",
            }).then((result) => {
              if (result === true) {
                swal("Đã ghi danh!", "Ghi danh khoá học đã được xác nhận.");                
                dispatch(ghiDanhKhoaHocAdminAction(data));
              }
            });
          }
        }
        return (
          <>
            <Fragment>
              <button onClick={()=>ghiDanh(khoaHoc.maKhoaHoc)} className="btn btn-primary">Xác thực</button>
              <button onClick={()=>xoaKhoaHoc(khoaHoc.maKhoaHoc)} className="btn btn-danger ml-3">Huỷ</button>
            </Fragment>
          </>
        );
      },
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} scroll={{ y: 300 }} />
  );
}
