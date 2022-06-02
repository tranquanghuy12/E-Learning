import { Table } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { layDsHocVienChoXacThucAction } from "../../../redux/actions/AdminGhiDanhNguoiDungAction";
import {
  ghiDanhKhoaHocAdminAction,
  huyGhiDanhKhoaHocAdmin,
} from "../../../redux/actions/AdminQuanLyAction";

export default function LayDanhSachHocVienChoXacThuc(props) {
  const dispatch = useDispatch();
  const { dsHocVienChoXacThuc } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyNguoiDungReducer
  );
  const maKhoaHoc = props.maKhoaHoc;
  useEffect(() => {
    dispatch(layDsHocVienChoXacThucAction(maKhoaHoc));
  }, [dispatch]);
  const dataSource = dsHocVienChoXacThuc;
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Chờ xác nhận",
      dataIndex: "action",
      render: (text, hocVien) => {
        const huyKhoaHoc = (taiKhoan) => {
          if (taiKhoan) {
            let data = {
              maKhoaHoc: maKhoaHoc.maKhoaHoc,
              taiKhoan: taiKhoan,
            };
            swal({
              title: "Xoá khoá học chờ xác thực",
              text: "Bạn có chắc chắc muốn xoá?",
              icon: "warning",
              buttons: ["Cancel", "Confirm"],
            }).then((result) => {
              if (result === true) {
                swal("Đã xoá!", "Khoá học đã được xoá.");
                dispatch(huyGhiDanhKhoaHocAdmin(data));
              }
            });
          }
        };
        const ghiDanh = (taiKhoan) => {
          if (taiKhoan) {
            let data = {
              maKhoaHoc: maKhoaHoc.maKhoaHoc,
              taiKhoan: taiKhoan,
            };
            console.log("data ghi danh", data);
            swal({
              title: "Xác thực ghi danh",
              text: "Bạn có chắc chắc muốn xác thực?",
              icon: "warning",
              buttons: ["Cancel", "Confirm"],
            }).then((result) => {
              if (result === true) {
                swal("Đã ghi danh!", "Ghi danh khoá học đã được xác nhận.");
                dispatch(ghiDanhKhoaHocAdminAction(data));
              }
            });
          }
        };
        return (
          <>
            <Fragment>
              <button
                className="btn btn-success mr-2"
                onClick={() => ghiDanh(hocVien.taiKhoan)}
              >
                Xác nhận
              </button>
              <button
                className="btn btn-danger"
                onClick={() => huyKhoaHoc(hocVien.taiKhoan)}
              >
                Huỷ
              </button>
            </Fragment>
          </>
        );
      },
    },
  ];
  return (
    <Table
      dataSource={dataSource}
      rowKey="taiKhoan"
      columns={columns}
      scroll={{ y: 300 }}
    />
  );
}
