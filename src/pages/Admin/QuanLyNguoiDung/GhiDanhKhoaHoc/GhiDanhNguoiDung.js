import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  chiTietNguoiDungAdminAction,
  ghiDanhKhoaHocAdminAction,
  layDanhSachKhoaHocChuaGhiDanh,
} from "../../../../redux/actions/AdminQuanLyAction";
import LayDanhSachKhoaHocChoXetDuyet from "../LayDanhSachKhoaHocChoXetDuyet/LayDanhSachKhoaHocChoXetDuyet";
import KhoaHocDaGhiDanh from "./KhoaHocDaGhiDanh";

export default function GhiDanhNguoiDung(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { taiKhoan } = useParams();

  //   const taikhoan = props.match.params;
  const { dsKhoaHocChuaGhiDanh } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyKhoaHocReducer
  );

  useEffect(() => {
    dispatch(layDanhSachKhoaHocChuaGhiDanh(taiKhoan));
    dispatch(chiTietNguoiDungAdminAction());
  }, [dispatch]);

  const layDsKhoaHocChuaGhiDanh = () => {
    return dsKhoaHocChuaGhiDanh?.map((course, index) => {
      return (
        <option value={course.maKhoaHoc} key={index}>
          {course.tenKhoaHoc}
        </option>
      );
    });
  };

  const [data, setData] = useState({ maKhoaHoc: "", taiKhoan: "" });
  const handleChangeInput = (e) => {
    let { value, maKhoaHoc, taiKhoan } = e.target;
    setData({
      maKhoaHoc: value,
      taiKhoan: props.match.params.taiKhoan,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = ghiDanhKhoaHocAdminAction(data);
    dispatch(action);
  };

  return (
    <div className="container">
      <label>Chọn khoá học</label>
      <form onSubmit={handleSubmit} className="input-group">
        <div className="form-group row">
          <div className="col-8">
            <select
              onChange={handleChangeInput}
              className="input-large form-control"
              name=""
              id=""
            >
              {layDsKhoaHocChuaGhiDanh()}
            </select>
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-success">
              Ghi Danh
            </button>
            <button
              onClick={() => {
                history.push("/admin/quanlynguoidung");
              }}
              className="btn btn-success"
            >
              Trở về
            </button>
          </div>
        </div>
      </form>
      <hr />
      <div className="row align-items-center">
        <div className="col-6">
          <label>Học viên chờ xác thực</label>
        </div>
        <div className="col-6 form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Nhập tên học viên"
          />
        </div>
      </div>
      <LayDanhSachKhoaHocChoXetDuyet taiKhoan={props.match.params} />
      <hr />
      <KhoaHocDaGhiDanh taiKhoan={props.match.params} />
    </div>
  );
}
