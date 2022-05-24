import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { timKiemTenKhoaHocAction } from "../../redux/actions/QuanLyKhoaHocAction";

const TimKiemKhoaHoc = () => {
  const { value } = useParams();
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TimKiemKhoaHoc;
