import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../main.scss";
import {
  adminChiTietNguoiDungAction,
  adminGhiDanhKhoaHocAction,
  layDanhSachKhoaHocChuaGhiDanh,
} from "../../../../redux/actions/AdminQuanLyAction";

import KhoaHocDaGhiDanh from "../KhoaHocDaGhiDanh/KhoaHocDaGhiDanh";
import LayDanhSachKhoaHocChoXetDuyet from "../LayDanhSachKhoaHocChoXetDuyet/LayDanhSachKhoaHocChoXetDuyet";

export default function GhiDanhNguoiDung(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { taiKhoan } = useParams();

  const { dsKhoaHocChuaGhiDanh } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyKhoaHocReducer
  );

  useEffect(() => {
    dispatch(layDanhSachKhoaHocChuaGhiDanh(taiKhoan));
    dispatch(adminChiTietNguoiDungAction());
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
    const action = adminGhiDanhKhoaHocAction(data);
    dispatch(action);
  };

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/admin">
              Admin
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/admin/quanlynguoidung">
              Quản lý người dùng
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Ghi danh người dùng
          </li>
        </ol>
      </nav>

      <label>Chọn khoá học</label>
      <form onSubmit={handleSubmit}>
        <div className="form-group row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <select
              onChange={handleChangeInput}
              className="input-large form-control"
              name=""
              id=""
            >
              {layDsKhoaHocChuaGhiDanh()}
            </select>
          </div>
          <div className="btn__responsive_sm col-sm-12 col-md-4 col-lg-4 text-center">
            <button type="submit" className="btn btn-primary mr-3">
              Ghi Danh
            </button>
            <button
              onClick={() => {
                history.push("/admin/quanlynguoidung");
              }}
              className="btn btn-danger"
            >
              Trở về
            </button>
          </div>
        </div>
      </form>
      <hr />
      <div className="row align-items-center">
        <div className="col-12">
          <label>Khoá học chờ xác thực</label>
        </div>
      </div>
      <LayDanhSachKhoaHocChoXetDuyet taiKhoan={props.match.params} />
      <hr />
      <div className="row align-items-center">
        <div className="col-12">
          <label>Khoá học đã xác thực</label>
        </div>
      </div>
      <KhoaHocDaGhiDanh taiKhoan={props.match.params} />
    </div>
  );
}
