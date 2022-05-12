import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyKhoaHocAction";

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
          <div className="card text-white bg-primary" key={index}>
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
  return <div className="row">{layDanhSachKhoaHoc()}</div>;
}
