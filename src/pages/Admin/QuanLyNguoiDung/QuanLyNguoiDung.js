import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layMaNguoiDung } from "../../../redux/actions/QuanLyNguoiDungAction";
import DanhSachNguoiDung from "../../../templates/AdminTemplate/Layouts/DanhSachNguoiDung/DanhSachNguoiDung";
import ThemNguoiDung from "../ThemNguoiDung/ThemNguoiDung";

export default function QuanLyNguoiDung() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layMaNguoiDung());
  }, [dispatch]);
  const maLoaiNguoiDung = useSelector(
    (rootReducer) => rootReducer.MaLoaiNguoiDungReducer.maLoaiNguoiDung
  );
  
  return (
    <>
      {maLoaiNguoiDung ? (
        <>
          <div className="page home-page">
            <div className="page-contents">
              <DanhSachNguoiDung maLoaiNguoiDung={maLoaiNguoiDung} />
            </div>
          </div>

          <div className="page about-page">
            <div className="page-contents">
              <ThemNguoiDung maLoaiNguoiDung={maLoaiNguoiDung} />
            </div>
          </div>
        </>
      ) : (
        <>Nothing here</>
      )}
    </>
  );
}
