import React, { Fragment, useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import {
  ghiDanhKhoaHocAdminAction,
  layDanhSachKhoaHocChuaGhiDanh,
} from "../../../../redux/actions/AdminQuanLyAction";

export default function GhiDanhKhoaHoc(props) {
  const dispatch = useDispatch();
  //string
  const taiKhoan = props.nguoiDung.taiKhoan;
  const { dsKhoaHocChuaGhiDanh } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyNguoiDungReducer
  );

  useEffect(() => {
    dispatch(layDanhSachKhoaHocChuaGhiDanh(taiKhoan));
  }, [dispatch]);

  const layDsKhoaHocChuaGhiDanh = () => {
    return dsKhoaHocChuaGhiDanh.map((course, index) => {
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
      ...data,
      [maKhoaHoc]: value,
      [taiKhoan]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = ghiDanhKhoaHocAdminAction(data);
    dispatch(action);
  };
  return (
    <>
      <div className="dropdown">
        <label>Chọn khoá học</label>
        <form className="input-group" onSubmit={handleSubmit}>
          <div className="form-group row align-items-center">
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
            </div>
          </div>
        </form>
        <hr />
        <div className="row">
          <div className="col-6">
            <h5>Học viên chờ xác thực</h5>
          </div>
          <div className="col-6">
            <input type="text" placeholder="Nhập tên học viên" />
          </div>
          {/* <Table columns={columns} dataSource={data} /> */}
        </div>
      </div>
    </>
  );
}
