import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Field, Form, Formik } from "formik";
import {
  capNhatThongTinKhoaHocAction,
  layThongTinKhoaHocAction,
} from "../../../redux/actions/AdminQuanLyKhoaHocAction";
import { layDanhMucKhoaHocAction } from "../../../redux/actions/DanhMucKhoaHocAction";
import { Link } from "react-router-dom";

export default function CapNhatThongTinKhoaHoc(props) {
  const dispatch = useDispatch();
  const { maKhoaHoc } = props.match.params;
  const { layThongTinKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.AdminQuanLyKhoaHocReducer
  );
  const item = layThongTinKhoaHoc;
  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );
  const renderDanhMucKhoaHoc = () => {
    return mangDanhMucKhoaHoc?.map((item, index) => {
      return (
        <option key={index} value={item.maDanhMuc}>
          {item.tenDanhMuc}
        </option>
      );
    });
  };
  useEffect(() => {
    dispatch(layThongTinKhoaHocAction(maKhoaHoc));
    dispatch(layDanhMucKhoaHocAction());
  }, [dispatch,maKhoaHoc]);
  const suaThongTinKhoaHoc = (values) => {
    swal({
      title: "Bạn có chắc chắn muốn sửa không?",
      text: "Bạn sẽ không thể phục hồi",
      icon: "warning",
      buttons:["Trở về","Đồng ý"]
    }).then((result) => {
      if (result === true) {  
        dispatch(capNhatThongTinKhoaHocAction(values));
      }
    });
  };

  return (
    <Formik
      enableReinitialize="true"
      initialValues={{
        maKhoaHoc: item.maKhoaHoc || "",
        tenKhoaHoc: item.tenKhoaHoc || "",
        biDanh: item.biDanh || "",
        moTa: item.moTa || "",
        luotXem: item.luotXem,
        danhGia: item.danhGia,
        hinhAnh: item.hinhAnh || "",
        maNhom: item.maNhom ? item.maNhom : "GP01",
        ngayTao: item.ngayTao || "",
        maDanhMucKhoaHoc: item.danhMucKhoaHoc?.maDanhMucKhoaHoc || "",
        taiKhoanNguoiTao: item.nguoiTao?.taiKhoan || "",
      }}
      onSubmit={(values) => {
        suaThongTinKhoaHoc(values);
      }}
      render={(formikProps) => (
        <Form className="container mb-5 mt-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="style__navlink" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link className="style__navlink" to="/admin">
                  Admin
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link className="style__navlink" to="/admin/quanlykhoahoc">
                  Quản lý khoá học
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cập nhật thông tin khoá học
              </li>
            </ol>
          </nav>
          <div className="row align-items-center justify-content-center">
          <h2>Cập nhật khoá học</h2>
            <div className="form-group col-md-12 col-lg-12">
              <label htmlFor="maKhoaHoc">Mã khoá học</label>
              <Field
                className="form-control"
                type="text"
                name="maKhoaHoc"
                onChange={formikProps.handleChange}
                disabled
              ></Field>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="ngayTao">Ngày tạo</label>
              <Field
                className="form-control"
                type="text"
                name="ngayTao"
                onChange={formikProps.handleChange}
                disabled
              ></Field>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="taiKhoanNguoiTao">Tài khoản người tạo</label>
              <Field
                className="form-control"
                type="text"
                name="taiKhoanNguoiTao"
                onChange={formikProps.handleChange}
                disabled
              ></Field>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="tenKhoaHoc">Tên khoá học</label>
              <Field
                className="form-control"
                type="text"
                name="tenKhoaHoc"
                onChange={formikProps.handleChange}
              ></Field>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="biDanh">Bí danh</label>
              <Field
                className="form-control"
                type="text"
                name="biDanh"
                onChange={formikProps.handleChange}
              ></Field>
            </div>

            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="luotXem">Lượt xem</label>
              <Field
                className="form-control"
                type="text"
                name="luotXem"
                onChange={formikProps.handleChange}
              ></Field>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="danhGia">Đánh giá</label>
              <Field
                className="form-control"
                type="text"
                name="danhGia"
                onChange={formikProps.handleChange}
              ></Field>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="maDanhMucKhoaHoc">Mã danh mục khoá học</label>
              <Field
                className="form-control"
                as="select"
                name="maDanhMucKhoaHoc"
                onChange={formikProps.handleChange}
              >
                {renderDanhMucKhoaHoc()}
              </Field>
            </div>
            <div className="form-group col-sm-12 col-md-6">
              <label htmlFor="maNhom">Mã nhóm</label>
              <Field
                as="select"
                className="form-control"
                name="maNhom"
                onChange={formikProps.handleChange}
              >
                <option value="GP01">GP01</option>
                <option value="GP02">GP02</option>
                <option value="GP03">GP03</option>
                <option value="GP04">GP04</option>
                <option value="GP05">GP05</option>
              </Field>
            </div>
            <div className="form-group col-sm-12 col-md-12">
              <label htmlFor="moTa">Mô tả</label>
              <Field
                className="form-control"         
                type="text"
                name="moTa"
                onChange={formikProps.handleChange}
              ></Field>
            </div>

            <button type="submit" className="btn btn-success mt-4">
              Submit
            </button>
          </div>
        </Form>
      )}
    />
  );
}
