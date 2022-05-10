import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { layDanhMucKhoaHocAction } from "../../redux/actions/DanhMucKhoaHocAction";

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
        <div key={index} className="col-2">
          <Link to={`danhmuckhoahoc/${item.maDanhMuc}`} className="btn btn-success">{item.tenDanhMuc}</Link>
        </div>
      );
    });
  };

  return <div className="container row m-auto">{renderDanhMucKhoaHoc()}</div>;
}
