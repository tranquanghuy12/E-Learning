import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { layDsNguoiDungChuaGhiDanhAction } from "../../../redux/actions/AdminGhiDanhNguoiDungAction";
import { adminGhiDanhKhoaHocAction } from "../../../redux/actions/AdminQuanLyAction";
import { layDanhSachKhoaHocAction } from "../../../redux/actions/QuanLyKhoaHocAction";
import HocVienDaThamGiaKhoaHoc from "./HocVienDaThamGiaKhoaHoc";
import LayDanhSachHocVienChoXetDuyet from "./LayDanhSachHocVienChoXetDuyet";

export default function GhiDanhKhoaHoc(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { maKhoaHoc } = useParams();
  const [data, setData] = useState({ maKhoaHoc: "", taiKhoan: "" });

  const { dsNguoiDungChuaGhiDanh } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyNguoiDungReducer
  );

  const { mangKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );

  // tim khoa hoc co maKhoaHoc trung voi maKhoaHoc tren path
  const course = mangKhoaHoc.find((course) => course.maKhoaHoc === maKhoaHoc);

  useEffect(() => {
    dispatch(layDsNguoiDungChuaGhiDanhAction({ maKhoaHoc }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction());
  }, []);

  const layDsNguoiDungChuaGhiDanhKhoaHoc = () => {
    return dsNguoiDungChuaGhiDanh.map((item, index) => {
      return (
        <option value={item.taiKhoan} key={index}>
          {item.hoTen}
        </option>
      );
    });
  };

  const handleChangeInput = (e) => {
    setData({
      maKhoaHoc: maKhoaHoc,
      taiKhoan: e.target.value,
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
              Trang chủ
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/admin">
              Quản trị
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/admin/quanlykhoahoc">
              Quản lý khoá học
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Ghi danh khoá học
          </li>
        </ol>
      </nav>

      <div className="text-center my-5">
        {course ? <h1>{course.tenKhoaHoc}</h1> : null}
        <h5>Mã khóa học: {maKhoaHoc}</h5>
      </div>

      <h4>Chọn người dùng</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <select
              className="input-large form-control"
              onChange={handleChangeInput}
            >
              <option hidden>Select a user</option>
              {layDsNguoiDungChuaGhiDanhKhoaHoc()}
            </select>
          </div>
          <div className="btn__responsive_sm col-sm-12 col-md-4 col-lg-4 text-center">
            <button type="submit" className="btn btn-primary mr-3">
              Ghi Danh
            </button>
            <button
              onClick={() => {
                history.push("/admin/quanlykhoahoc");
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
          <h4 className="mt-4">Học viên chờ xác thực</h4>
        </div>
      </div>
      <LayDanhSachHocVienChoXetDuyet maKhoaHoc={props.match.params} />
      <hr />
      <div className="row align-items-center">
        <div className="col-12">
          <h4 className="mt-4">Học viên đã tham gia khoá học</h4>
        </div>
      </div>
      <HocVienDaThamGiaKhoaHoc maKhoaHoc={props.match.params} />
    </div>
  );
}
