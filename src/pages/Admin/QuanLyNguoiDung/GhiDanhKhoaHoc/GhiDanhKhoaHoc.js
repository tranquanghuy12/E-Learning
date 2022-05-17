import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ghiDanhKhoaHocAdminAction,
  layDanhSachKhoaHocChuaGhiDanh,
} from "../../../../redux/actions/AdminQuanLyAction";
import LayDanhSachKhoaHocChoXetDuyet from "../LayDanhSachKhoaHocChoXetDuyet/LayDanhSachKhoaHocChoXetDuyet";

export default function GhiDanhKhoaHoc(props) {
  const dispatch = useDispatch();
  const { dsKhoaHocChuaGhiDanh } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyKhoaHocReducer
  );
  useEffect(() => {
    dispatch(layDanhSachKhoaHocChuaGhiDanh());
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
  // const [data, setData] = useState({ maKhoaHoc: ""});
  // const handleChangeInput = (e) => {
  //   let { value, maKhoaHoc } = e.target;
  //   setData({
  //     ...data,
  //     [maKhoaHoc]: value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const action = ghiDanhKhoaHocAdminAction(data);
  //   dispatch(action);
  // };
  return (
    <>
      <div className="dropdown">
        <label>Chọn khoá học</label>
        <form className="input-group">
          <div className="form-group row align-items-center">
            <div className="col-8">
              <select
                
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
        <LayDanhSachKhoaHocChoXetDuyet />
        <hr />
      </div>
    </>
  );
}
