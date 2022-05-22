import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Review from "../../components/Review/Review";

import { layDanhSachPhimAction } from "../../redux/actions/QuanLyKhoaHocAction";
import CountUp from "./CountUp";
import HomeCarousel from "./HomeCarousel";
import RenderCardKhoaHoc from "./RenderCardKhoaHoc";

export default function Home(props) {
  const dispatch = useDispatch();
  const { mangKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );
  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);
  }, []);

  //Lấy ra 8 khóa học đầu tiên
  const mangKhoaHocDauTien = mangKhoaHoc.slice(0, 8);

  const layDanhSachKhoaHoc = () => {
    return mangKhoaHocDauTien.map((item, index) => {
      return (
        <div className="mb-4 col-sm-12 col-md-4 col-lg-3" key={index}>
          <RenderCardKhoaHoc item={item} />
        </div>
      );
    });
  };
  return (
    <div className="container-fluid">
      <div>{HomeCarousel()}</div>
      <h3 className="ml-5 pl-3">Most Popular Courses</h3>
      <div className="row m-auto p-5">{layDanhSachKhoaHoc()}</div>
      <CountUp />
      <Review />
    </div>
  );
}
