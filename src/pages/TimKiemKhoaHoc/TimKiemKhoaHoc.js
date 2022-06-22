import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ghiDanhKhoaHocAdminAction } from "../../redux/actions/AdminQuanLyAction";
import { timKiemTenKhoaHocAction } from "../../redux/actions/QuanLyKhoaHocAction";
import "./TimKiemKhoaHoc.scss";

const TimKiemKhoaHoc = (props) => {
  const { value } = useParams();
  const dispatch = useDispatch();
  const { timKiemKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );

  console.log("value", value.length);

  useEffect(() => {
    dispatch(timKiemTenKhoaHocAction(value));
    renderTimKiemKhoaHoc();
  }, [value]);

  const renderTimKiemKhoaHoc = () => {
    if (timKiemKhoaHoc.length === 0) {
      return (
        <h3 className="text-center">
          Không tìm thấy khoá học cho từ khóa "{value}"
        </h3>
      );
    } else {
      return timKiemKhoaHoc.map((item, index) => {
        return (
          <div
            className="course__item row justify-content-center align-items-center"
            key={index}
          >
            <div className="course__img col-12 col-sm-8 col-md-7 col-lg-6">
              <img
                src={item.hinhAnh}
                style={{ height: "auto", width: "70%" }}
              />
            </div>
            <div className="course__info col-12 col-sm-4 col-md-5 col-lg-6">
              <h4>{item.tenKhoaHoc}</h4>
              <p>{item.maKhoaHoc}</p>
              <p>{item.luotXem}</p>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div style={{ paddingTop: 126 }}>
      {timKiemKhoaHoc.length !== 0 ? (
        <h3 className="text-center">
          Tìm thấy {timKiemKhoaHoc.length} kết quả cho từ khóa "{value}"
        </h3>
      ) : (
        ""
      )}
      {renderTimKiemKhoaHoc()}
    </div>
  );
};

export default TimKiemKhoaHoc;
