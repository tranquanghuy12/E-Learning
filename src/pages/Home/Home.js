import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <div className="col-3" key={index}>
          <RenderCardKhoaHoc item={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <div>{HomeCarousel()}</div>
      <div className="row container m-auto">{layDanhSachKhoaHoc()}</div>
    </div>
  );
}
