import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Review from "../../components/Review/Review";
import { layDanhSachKhoaHocPhanTrang } from "../../redux/actions/QuanLyKhoaHocAction";
import CountUp from "../../components/CountUp/CountUp";
import RenderCardKhoaHoc from "./RenderCardKhoaHoc";
import "./Home.scss";
import queryString from "query-string";
import TabCategory from "../../components/TabCategory/TabCategory";
import { layDanhMucKhoaHocAction } from "../../redux/actions/DanhMucKhoaHocAction";

import banner1 from "../../assets/img/Banner/pic1.png";
import banner3 from "../../assets/img/Banner/pic3_1.png";
import { Link, useHistory } from "react-router-dom";

export default function Home(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const banner = () => {
    return (
      <div class="banner">
        <div class="container row m-auto">
          <div class="banner__info col-7">
            <h1>
              <span>Studying </span>
              Online is now much easier
            </h1>
            <p>
              We develop the relationships that underpin the next phase in your
              organisation’s growth.
            </p>
            <form className="form__search" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  value={search}
                  className="form-control"
                  placeholder="What are you looking for?"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && e.target.value.length !== 0) {
                      history.push(`/timkiemkhoahoc/${search}`);
                      setSearch("");
                    }
                  }}
                />
                <div className="input-group-append">
                  {search.length !== 0 ? (
                    <Link
                      to={`/timkiemkhoahoc/${search}`}
                      className="btn input__group_text"
                      id="basic-addon2"
                      style={{
                        textDecoration: "none",
                      }}
                    ></Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </form>
            <button className="mt-5">GET STARTED</button>
          </div>

          <div class="banner__image col-5">
            <img src={banner3} alt="a" />
            <img class="swing-image" src={banner1} alt="b" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="pb-5">{banner()}</div>

      <div className="popular__courses">
        <div className="container pt-5 ">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="m-0 text-center header__title">
              CÁC KHÓA HỌC PHỔ BIẾN
            </h3>
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
