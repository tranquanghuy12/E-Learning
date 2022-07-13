import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { layKhoaHocTheoDanhMucAction } from "../../../redux/actions/KhoaHocTheoDanhMucAction";
import "./KhoaHocTheoDanhMuc.scss";
import RenderCardKhoaHoc from "../../../components/RenderCardKhoaHoc/RenderCardKhoaHoc";
import { layDanhMucKhoaHocAction } from "../../../redux/actions/DanhMucKhoaHocAction";

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
    const action = layDanhMucKhoaHocAction();
    dispatch(action);
  }, []);

  useEffect(() => {
    const action = layKhoaHocTheoDanhMucAction(madanhmuc);
    dispatch(action);
  }, [madanhmuc]);

  //tìm danhMuc để lấy trường tenDanhMuc hiển thị ra banner
  const danhMuc = mangDanhMucKhoaHoc?.find(
    (item) => item.maDanhMuc === madanhmuc
  );
  // console.log("danhMuc", danhMuc);
  const renderKhoaHocTheoDanhMuc = () => {
    return mangKhoaHocTheoDanhMuc.map((item, index) => {
      return <RenderCardKhoaHoc item={item} key={index} />;
    });
  };
  return (
    <div style={{ paddingTop: 126 }} className="container">
      <div className="banner-danhmuc text-center">
        <h3>{danhMuc?.tenDanhMuc}</h3>
      </div>
      <div className="row m-auto">{renderKhoaHocTheoDanhMuc()}</div>
    </div>
  );
}
