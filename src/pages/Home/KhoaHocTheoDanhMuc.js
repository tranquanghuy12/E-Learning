import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layKhoaHocTheoDanhMucAction } from "../../redux/actions/KhoaHocTheoDanhMucAction";

export default function KhoaHocTheoDanhMuc() {
  const dispatch = useDispatch();
  const { madanhmuc } = useParams();

  //khóa học theo danh mục
  const { mangKhoaHocTheoDanhMuc } = useSelector(
    (rootReducer) => rootReducer.KhoaHocTheoDanhMucReducer
  );

  useEffect(() => {
    const action = layKhoaHocTheoDanhMucAction(madanhmuc);
    dispatch(action);
  }, []);

  const renderKhoaHocTheoDanhMuc = () => {
    return mangKhoaHocTheoDanhMuc.map((item, index) => {
      return (
        <div key={index} className="col-3">
          <div className="card text-white bg-primary">
            <img
              className="card-img-top w-100"
              src={item.hinhAnh}
              alt="Hình ảnh khoá học"
            />
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="row">{renderKhoaHocTheoDanhMuc()}</div>;
}
