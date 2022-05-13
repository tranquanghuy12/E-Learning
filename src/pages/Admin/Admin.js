import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { layMaNguoiDung } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layMaNguoiDung());
  }, [dispatch]);
  const maLoaiNguoiDung = useSelector(
    (rootReducer) => rootReducer.MaLoaiNguoiDungReducer.maLoaiNguoiDung
  );

  return (
    <>
      {maLoaiNguoiDung ? (
        <>
          <div className="page home-page">
            <div className="page-contents">
              <h1>Quản lý người dùng</h1>
              <Link to="/admin/quanlynguoidung"></Link>
            </div>
          </div>

          <div className="page about-page">
            <div className="page-contents">
              <h1>Quản lý khoá học</h1>
              <Link to="/admin/quanlykhoahoc"></Link>
            </div>
          </div>
        </>
      ) : (
        <>Nothing here</>
      )}
    </>
  );
}
