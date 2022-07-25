import { Table } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { layDsHocVienKhoaHocAction } from "../../../redux/actions/AdminGhiDanhNguoiDungAction";
import { adminHuyGhiDanhKhoaHocAction } from "../../../redux/actions/AdminQuanLyAction";

export default function HocVienDaThamGiaKhoaHoc(props) {
  const dispatch = useDispatch();
  const maKhoaHoc = props.maKhoaHoc;
  const { dsHocVienDaThamGiaKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyNguoiDungReducer
  );

  useEffect(() => {
    dispatch(layDsHocVienKhoaHocAction(maKhoaHoc));
  }, []);

  const dataSource = dsHocVienDaThamGiaKhoaHoc;
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
              title: "Huỷ khoá học chờ xác thực",
              text: "Bạn có chắc chắc muốn huỷ?",
              icon: "warning",
              buttons: ["Trở về", "Chắc chắn!"],
            }).then((result) => {
              if (result === true) {
                dispatch(adminHuyGhiDanhKhoaHocAction(data));
              }
            });
          }
        };
        return (
          <>
            <Fragment>
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
