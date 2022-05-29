import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Review from "../../components/Review/Review";
import { layDanhSachKhoaHocPhanTrang } from "../../redux/actions/QuanLyKhoaHocAction";
import CountUp from "./CountUp";
import HomeCarousel from "./HomeCarousel";
import RenderCardKhoaHoc from "./RenderCardKhoaHoc";
import "./Home.scss";
import queryString from "query-string";
export default function Home(props) {
  const dispatch = useDispatch();
  const { mangKhoaHocPhanTrang } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );
  const layKhoaHoc = mangKhoaHocPhanTrang.items;
  const [filters, setFilters] = useState({
    layKhoaHoc,
    page: 1,
    pageSize: 9,
  });

  useEffect(() => {
    const paramsString = queryString.stringify(filters);
    dispatch(layDanhSachKhoaHocPhanTrang(paramsString));
  }, [dispatch, filters]);

  function onPageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    });
  }
  const layDanhSachKhoaHoc = () => {
    return layKhoaHoc?.map((item, index) => {
      return (
        <div className="mb-4 col-sm-12 col-md-3 col-lg-4" key={index}>
          <RenderCardKhoaHoc item={item} />
        </div>
      );
    });
  };
  return (
    <div className="container-fluid">
      <div>{HomeCarousel()}</div>
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="text-center header__title">CÁC KHÓA HỌC PHỔ BIẾN</h1>
        </div>
        <div className="row m-auto pt-5 pb-5">{layDanhSachKhoaHoc()}</div>
        <div className="text-center">
          <button
            className="btn__custom_sm"
            disabled={mangKhoaHocPhanTrang.currentPage <= 1}
            onClick={() => {
              console.log(mangKhoaHocPhanTrang.currentPage);
              onPageChange(filters.page - 1);
            }}
          >
            Prev
          </button>
          <button
            className="btn__custom_sm btn__color_next"
            disabled={
              mangKhoaHocPhanTrang.currentPage >=
              mangKhoaHocPhanTrang.totalPages
            }
            onClick={() => onPageChange(filters.page + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <CountUp />
      <Review />
    </div>
  );
}
