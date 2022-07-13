import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ghiDanhKhoaHocAdminAction } from "../../redux/actions/AdminQuanLyAction";
import { timKiemTenKhoaHocAction } from "../../redux/actions/QuanLyKhoaHocAction";
import "./TimKiemKhoaHoc.scss";

const TimKiemKhoaHoc = (props) => {
  const { value } = useParams();
  const dispatch = useDispatch();
  const { timKiemKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );

  console.log("timKiemKhoaHoc", timKiemKhoaHoc);

  useEffect(() => {
    dispatch(timKiemTenKhoaHocAction(value));
    renderTimKiemKhoaHoc();
  }, [value]);

  const renderTimKiemKhoaHoc = () => {
    if (timKiemKhoaHoc.length === 0) {
      return (
        <h1 className="text-center">
          Không tìm thấy khoá học cho từ khóa "{value}"
        </h1>
      );
    } else {
      return timKiemKhoaHoc.map((item, index) => {
        return (
          <Link
            to={`/chitietkhoahoc=${item.maKhoaHoc}`}
            className="course__item row justify-content-center align-items-center"
            key={index}
          >
            <div className="course__img col-12 col-sm-12 col-md-7 col-lg-6">
              <img src={item.hinhAnh} />
            </div>
            <div className="course__info col-12 col-sm-12 col-md-5 col-lg-6">
              <h4>{item.tenKhoaHoc}</h4>
              <p>Mã khóa học: {item.maKhoaHoc}</p>
              <p>Lượt xem: {item.luotXem}</p>
            </div>
          </Link>
        );
      });
    }
  };

  return (
    <div className="mt-5">
      {timKiemKhoaHoc.length !== 0 ? (
        <h1 className="text-center">
          Tìm thấy {timKiemKhoaHoc.length} kết quả cho từ khóa "{value}"
        </h1>
      ) : (
        ""
      )}
      {renderTimKiemKhoaHoc()}
    </div>
  );
};

export default TimKiemKhoaHoc;
