import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import { dangKyKhoaHocAction } from "../../../redux/actions/AdminQuanLyKhoaHocAction";
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
    window.history.scrollRestoration = "manual";
  }, []);

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
      dispatch(dangKyKhoaHocAction(data));
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
    <div>
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

      <div className="row m-0 p-5">
        <div className="course_intro pl-5 pr-5 col-12 col-xs-12 col-md-6 col-lg-6">
          <h2>Giới thiệu khoá học</h2>
          <p>{chiTietKhoaHoc.moTa}</p>
        </div>

        <div className="course_info pl-5 pr-5 col-12 col-xs-12 col-md-6 col-lg-6">
          <div className="course_willable pb-5">
            <h2>Sau khi hoàn thành khóa học bạn sẽ</h2>
            <ul className="list-unstyled">
              <li>
                <i class="las la-check"></i>
                <span>Master's degree in designing</span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>Outstanding mobile design</span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>Outstanding mobile design</span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>Outstanding mobile design</span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>Outstanding mobile design</span>
              </li>
            </ul>
          </div>
          <div className="course_required">
            <h2>Yêu cầu khóa học</h2>
            <ul className="list-unstyled">
              <li>
                <i class="las la-check"></i>
                <span>User experience (UX)</span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>User interface (UI)</span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>Visual design.</span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>Coding languages including HTML and CSS.</span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>
                  Frontend web programing languages and skills such as
                  JavaScript, Ajax and web animation techniques.
                </span>
              </li>
              <li>
                <i class="las la-check"></i>
                <span>
                  Backend web programing languages such as C# or Java, PHP and
                  Ruby.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
