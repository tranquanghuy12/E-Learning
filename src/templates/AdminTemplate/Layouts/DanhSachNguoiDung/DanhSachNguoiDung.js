import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhSachNguoiDungPhanTrang } from "../../../../redux/actions/AdminQuanLyAction";
import queryString from "query-string";
export default function DanhSachNguoiDung({ maLoaiNguoiDung }) {
  const dispatch = useDispatch();
  const nguoiDung = useSelector(
    (rootReducer) =>
      rootReducer.MaLoaiNguoiDungReducer.danhSachNguoiDungPhanTrangData
  );

  const nguoiDungPhanTrang = useSelector(
    (rootReducer) =>
      rootReducer.MaLoaiNguoiDungReducer.danhSachNguoiDungPhanTrang
  );
  console.log('object',nguoiDungPhanTrang);
  const [filters, setFilters] = useState({
    user: nguoiDung,
    page: 1,
    pageSize: 16,
    MaNhom: "GP01",
  });

  const chuyenTrang = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  useEffect(() => {
    let convertString = queryString.stringify(filters);
    dispatch(layDanhSachNguoiDungPhanTrang(convertString));
  }, [dispatch,filters]);

  const renderWithMap = () => {
    let count = 0;
    for (const object of nguoiDung) {
      if (object) {
        count++;
      }
    }
    if (count === 0) {
      return (
        <tr>
          <td colSpan="7">Không tìm thấy kết quả</td>
        </tr>
      );
    }
    return nguoiDung.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.taiKhoan}</th>
          <td>{item.hoTen}</td>
          <td>
            {item.email.length < 20
              ? item.email
              : item.email.substring(0, 20) + "..."}
          </td>
          <td>{item.soDT}</td>
          <td>{item.tenLoaiNguoiDung}</td>
          <td>
            <NavLink to="/admin/quanlynguoidung/:taiKhoan">
              <i className="fas fa-edit"></i>
            </NavLink>
          </td>
          <td>
            <NavLink to="/admin/quanlynguoidung">
              <i className="fa-solid fa-trash-can"></i>
            </NavLink>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <h2>Quản lý người dùng</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Danh sách người dùng</h3>
        </div>
        <div className="col-md-6">
          <div className="d-flex form-group no-gutters">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append">
              <button className="btn btn-success" type="submit">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Mã người dùng</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>{renderWithMap()}</tbody>
      </table>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className="btn btn-primary mr-3"
          disabled={nguoiDungPhanTrang.currentPage <= 1}
          onClick={() => chuyenTrang(filters.page - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-success"
          disabled={nguoiDungPhanTrang.currentPage >= nguoiDungPhanTrang.totalPages}
          onClick={() => chuyenTrang(filters.page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
