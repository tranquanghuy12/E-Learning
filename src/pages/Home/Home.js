import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Review from "../../components/Review/Review";
import { layDanhSachKhoaHocPhanTrang } from "../../redux/actions/QuanLyKhoaHocAction";
import CountUp from "../../components/CountUp/CountUp";
import HomeCarousel from "./HomeCarousel";
import RenderCardKhoaHoc from "./RenderCardKhoaHoc";
import "./Home.scss";
import queryString from "query-string";
import TabCategory from "../../components/TabCategory/TabCategory";
import { Dropdown, Menu, Space } from "antd";
import { layDanhMucKhoaHocAction } from "../../redux/actions/DanhMucKhoaHocAction";

export default function Home(props) {
  const dispatch = useDispatch();
  const { mangKhoaHocPhanTrang } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );

  const layKhoaHoc = mangKhoaHocPhanTrang.items;
  const [filters, setFilters] = useState({
    layKhoaHoc,
    page: 1,
    pageSize: 6,
  });

  useEffect(() => {
    const action = layDanhMucKhoaHocAction();
    dispatch(action);
  }, []);

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
      <div className="container pb-5">{HomeCarousel()}</div>
      <div className="container pt-5">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="m-0 text-center header__title">
            CÁC KHÓA HỌC PHỔ BIẾN
          </h4>
          <div>
            <button
              className="btn__custom_sm"
              disabled={mangKhoaHocPhanTrang.currentPage <= 1}
              onClick={() => {
                console.log(mangKhoaHocPhanTrang.currentPage);
                onPageChange(filters.page - 1);
              }}
            >
              {mangKhoaHocPhanTrang.currentPage <= 1 ? (
                <i class="fas fa-chevron-circle-left disabled_btn"></i>
              ) : (
                <i class="fas fa-chevron-circle-left"></i>
              )}
            </button>
            <button
              className="btn__custom_sm btn__color_next"
              disabled={
                mangKhoaHocPhanTrang.currentPage >=
                mangKhoaHocPhanTrang.totalPages
              }
              onClick={() => onPageChange(filters.page + 1)}
            >
              {mangKhoaHocPhanTrang.currentPage ===
              mangKhoaHocPhanTrang.totalPages ? (
                <i class="fas fa-chevron-circle-right disabled_btn"></i>
              ) : (
                <i class="fas fa-chevron-circle-right"></i>
              )}
            </button>
          </div>
        </div>
        <div className="row m-auto pt-4 pb-5">{layDanhSachKhoaHoc()}</div>
      </div>
      <div className="text-center">
        <h1 className="text-center header__title mt-5">
          KHOÁ HỌC THEO DANH MỤC
        </h1>
      </div>
      <TabCategory />
      <CountUp />
      <Review />
    </div>
  );
}
