import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Review from "../../components/Review/Review";
import { layDanhSachKhoaHocPhanTrang } from "../../redux/actions/QuanLyKhoaHocAction";
import CountUp from "../../components/CountUp/CountUp";
import RenderCardKhoaHoc from "../../components/RenderCardKhoaHoc/RenderCardKhoaHoc";
import "./Home.scss";
import queryString from "query-string";
import TabCategory from "../../components/TabCategory/TabCategory";
import { layDanhMucKhoaHocAction } from "../../redux/actions/DanhMucKhoaHocAction";

import banner1 from "../../assets/img/Banner/pic1.png";
import banner3 from "../../assets/img/Banner/pic3_1.png";
import { Link, useHistory } from "react-router-dom";
import { ACCESSTOKEN } from "../../util/setting/config";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

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
      return <RenderCardKhoaHoc item={item} key={index} />;
    });
  };

  const handleClick = () => {
    if (!localStorage.getItem(ACCESSTOKEN)) {
      history.push("login");
    } else {
      // window.scrollTo(0, 890);
      document.getElementById("popular-courses").scrollIntoView();
    }
  };

  const banner = () => {
    return (
      <div className="banner">
        <div className="container row m-auto">
          <div className="banner__info col-12 col-xs-12 col-md-8 col-xl-7">
            <h1>
              <span>Studying </span>
              Online is now much easier
            </h1>
            <p>
              We develop the relationships that underpin the next phase in your
              organisation’s growth.
            </p>
            <form className="form__search" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="text"
                  value={search}
                  className="form-control"
                  placeholder="Search ..."
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
                  <Link
                    to={`/timkiemkhoahoc/${search}`}
                    className="btn input__group_text"
                    id="basic-addon2"
                    style={{
                      textDecoration: "none",
                    }}
                  ></Link>
                </div>
              </div>
            </form>
            <button className="btn__get_started mt-5" onClick={handleClick}>
              GET STARTED
            </button>
          </div>

          <div className="banner__image col-5 col-md-3 col-xl-5">
            <img src={banner3} alt="a" />
            <img className="swing-image" src={banner1} alt="b" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="pb-5">{banner()}</div>

      <div id="popular-courses" className="popular__courses">
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
                  <i className="fas fa-chevron-circle-left disabled_btn"></i>
                ) : (
                  <i className="fas fa-chevron-circle-left"></i>
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
                  <i className="fas fa-chevron-circle-right disabled_btn"></i>
                ) : (
                  <i className="fas fa-chevron-circle-right"></i>
                )}
              </button>
            </div>
          </div>
          <div className="row m-auto pt-4 pb-5">{layDanhSachKhoaHoc()}</div>
        </div>
      </div>

      <div className="course_by_category text-center">
        <h1 className="text-center header__title mt-5">
          KHOÁ HỌC THEO DANH MỤC
        </h1>
        <TabCategory />
      </div>
      <CountUp />
      <Review />
      <ScrollToTop />
    </div>
  );
}
