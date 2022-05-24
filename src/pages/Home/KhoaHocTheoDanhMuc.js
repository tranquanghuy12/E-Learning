import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { layKhoaHocTheoDanhMucAction } from "../../redux/actions/KhoaHocTheoDanhMucAction";
import "./KhoaHocTheoDanhMuc.scss";
import RenderCardKhoaHoc from "./RenderCardKhoaHoc";

export default function KhoaHocTheoDanhMuc() {
  const dispatch = useDispatch();
  const { madanhmuc } = useParams();

  //danh mục khóa học
  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );

  //khóa học theo danh mục
  const { mangKhoaHocTheoDanhMuc } = useSelector(
    (rootReducer) => rootReducer.KhoaHocTheoDanhMucReducer
  );

  useEffect(() => {
    const action = layKhoaHocTheoDanhMucAction(madanhmuc);
    dispatch(action);
  }, []);

  //tìm danhMuc để lấy trường tenDanhMuc hiển thị ra banner
  const danhMuc = mangDanhMucKhoaHoc.find(
    (item) => item.maDanhMuc === madanhmuc
  );

  const renderKhoaHocTheoDanhMuc = () => {
    return mangKhoaHocTheoDanhMuc.map((item, index) => {
      return (
        <div key={index} className="col-3">
          <RenderCardKhoaHoc item={item} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="banner-danhmuc text-center">
        <h3>{danhMuc.tenDanhMuc}</h3>
      </div>
      <div>
        <Link to="/danhmuckhoahoc" className="btn btn-success">
          <i className="fa fa-arrow-left"></i>
          Trở về danh mục
        </Link>
      </div>
      <div className="row m-auto p-5">{renderKhoaHocTheoDanhMuc()}</div>
    </div>
  );
}
