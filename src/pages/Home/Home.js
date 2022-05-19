import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Review from "../../components/Review/Review";

import { layDanhSachPhimAction } from "../../redux/actions/QuanLyKhoaHocAction";
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

  const layDanhSachKhoaHoc = () => {
    return mangKhoaHoc.map((item, index) => {
      return (
        <div className="col-sm-12 col-md-4 col-lg-3" key={index}>
          <RenderCardKhoaHoc item={item} />         
        </div>
      );
    });
  };
  return (
    <div className="container-fluid">
      <div>{HomeCarousel()}</div>
      <div className="row m-auto">{layDanhSachKhoaHoc()}</div>
      
      <Review/>
    </div>
  );
}
