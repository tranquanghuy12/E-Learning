import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ghiDanhKhoaHocAdminAction } from "../../redux/actions/AdminQuanLyAction";
import { timKiemTenKhoaHocAction } from "../../redux/actions/QuanLyKhoaHocAction";

const TimKiemKhoaHoc = (props) => {
  const { value } = useParams();
  const maKhoaHoc = value;
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { timKiemKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.QuanLyKhoaHocReducer
  );
  useEffect(() => {
    dispatch(timKiemTenKhoaHocAction(value));
  }, [value]);
  return (
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Hình ảnh</th>
          <th scope="col">Mã khoá học</th>
          <th scope="col">Tên khoá học</th>
          <th scope="col">Lượt xem</th>
          <th scope="col">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {timKiemKhoaHoc.map((item, index) => {
          return (
            <tr key={index}>
              <img
                src={item.hinhAnh}
                style={{ height: "100px", width: "200px" }}
              ></img>
              <td>{item.maKhoaHoc}</td>
              <td>{item.tenKhoaHoc}</td>
              <td>{item.luotXem}</td>
              <td>
                <button onClick={(maKhoaHoc)=>ghiDanhKhoaHocAdminAction(maKhoaHoc)} className="btn btn-success">ENROLL</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TimKiemKhoaHoc;
