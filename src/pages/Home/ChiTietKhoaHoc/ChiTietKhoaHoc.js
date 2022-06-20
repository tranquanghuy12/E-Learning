import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import { DangKyKhoaHocAction } from "../../../redux/actions/AdminQuanLyKhoaHocAction";
import { ChiTietKhoaHocAction } from "../../../redux/actions/ChiTietKhoaHocAction";
import "./ChiTietKhoaHoc.scss";

export default function ChiTietKhoaHoc() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { makhoahoc } = useParams();

  const chiTietKhoaHoc = useSelector(
    (rootReducer) => rootReducer.ChiTietKhoaHocReducer
  );

  // console.log("chiTietKhoaHoc", chiTietKhoaHoc);

  useEffect(() => {
    const action = ChiTietKhoaHocAction(makhoahoc);
    dispatch(action);
  }, []);

  const dangKyKhoaHocClick = () => {
    if (localStorage.getItem("userLogin")) {
      const taiKhoan = JSON.parse(localStorage.getItem("userLogin")).taiKhoan;
      let data = {
        taiKhoan: taiKhoan,
        maKhoaHoc: chiTietKhoaHoc.maKhoaHoc,
      };
      dispatch(DangKyKhoaHocAction(data));
    } else {
      swal({
        title: "Bạn chưa đăng nhập!",
        text: "Bạn có muốn đến trang đăng nhập",
        icon: "warning",
        buttons: ["Đăng ký", "Đăng nhập"],
      }).then((result) => {
        if (result === true) {
          history.push("/login");
        } else {
          history.push("/register");
        }
      });
    }
  };

  return (
    <div style={{ paddingTop: 126 }}>
      <div className="black-transparent-overlay m-0">
        <div>
          <h1 className="text-white">{chiTietKhoaHoc.tenKhoaHoc}</h1>
          <p className="text-white">Lượt xem: {chiTietKhoaHoc.luotXem}</p>
          <button onClick={dangKyKhoaHocClick} className="btn btn-dangky">
            ĐĂNG KÝ
          </button>
        </div>
        <img
          src={chiTietKhoaHoc.hinhAnh}
          className="card-img-top"
          height={"100%"}
          alt="Hình ảnh khoá học"
        />
      </div>
      <div className="course-intro m-0 p-5">
        <div>
          <h2>Giới thiệu khoá học</h2>
          <p>{chiTietKhoaHoc.moTa}</p>
        </div>
      </div>
    </div>
  );
}
