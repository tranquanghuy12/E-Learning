import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { layDanhMucKhoaHocAction } from "../../redux/actions/DanhMucKhoaHocAction";
import "./DanhMucKhoaHoc.scss";

export default function DanhMucKhoaHoc() {
  const dispatch = useDispatch();

  //danh mục khóa học
  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );

  useEffect(() => {
    const action = layDanhMucKhoaHocAction();
    dispatch(action);
  }, []);

  const renderDanhMucKhoaHoc = () => {
    return mangDanhMucKhoaHoc.map((item, index) => {
      return (
        <div key={index} className="col-4 p-4 d-flex justify-content-center">
          <Link
            to={`/danhmuckhoahoc/${item.maDanhMuc}`}
            className="button-link btn d-flex justify-content-center align-items-center"
          >
            {item.tenDanhMuc}
          </Link>
        </div>
      );
    });
  };

  return <div className="container row m-auto">{renderDanhMucKhoaHoc()}</div>;
}
