import { Table } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  huyGhiDanhKhoaHocAdmin,
  layDanhSachKhoaHocDaXetDuyet,
} from "../../../../redux/actions/AdminQuanLyAction";
import { huyGhiDanhKhoaHoc } from "../../../../redux/actions/QuanLyNguoiDungAction";

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
  const xoaKhoaHoc = (maKhoaHoc) => {
    if (taiKhoan) {
      let data = {
        taiKhoan: taiKhoan.taiKhoan,
        maKhoaHoc: maKhoaHoc,
      };
      console.log("data xoaKhoaHoc", data);
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
 
  const renderDsKhoaHocDaXetDuyet = dsKhoaHocDaXetDuyet?.map((item, index) => {
    return (
      <tr key={index}>       
        <td>{item.maKhoaHoc}</td>
        <td>{item.tenKhoaHoc}</td>
        <td>
          <button
            onClick={() => xoaKhoaHoc(item.maKhoaHoc)}
            className="btn btn-warning"
          >
            Huỷ
          </button>
        </td>
      </tr>
    );
  });
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
              className="btn btn-warning"
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
    // <table class="table">
    //   <thead>
    //     <tr>
    //       <th scope="col">Mã khoá học</th>
    //       <th scope="col">Tên Khoá học</th>
    //       <th scope="col">Chờ xác nhận</th>
    //     </tr>
    //   </thead>
    //   <tbody>{renderDsKhoaHocDaXetDuyet}</tbody>
    // </table>
  );
}
