import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themKhoaHocAdminAction } from "../../../redux/actions/AdminQuanLyAction";
import { layDanhMucKhoaHocAction } from "../../../redux/actions/DanhMucKhoaHocAction";
import KhoaHocSchema from "../../../services/KhoaHocSchema";

export default function ThemKhoaHoc() {
  const dispatch = useDispatch();
  let user = "";
  user = JSON.parse(localStorage.getItem("userLogin"));
  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );
  const renderDanhMucKhoaHoc = () => {
    return mangDanhMucKhoaHoc.map((item, index) => {
      return (
        <option key={index} value={item.maDanhMuc}>
          {item.tenDanhMuc}
        </option>
      );
    });
  };
  useEffect(() => {
    const action = layDanhMucKhoaHocAction();
    dispatch(action);
  }, []);
  const [data, setData] = useState({
    maKhoaHoc: "",
    tenKhoaHoc: "",
    biDanh: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    hinhAnh: "",
    maNhom: "GP01" || "",
    ngayTao: "",
    maDanhMucKhoaHoc: "BackEnd",
    taiKhoanNguoiTao: user.taiKhoan,
  });
  return (
    <div className="container">
      <Formik
        initialValues={data || ""}
        onSubmit={(value) => {
          console.log(value);
          const action = themKhoaHocAdminAction(value);
          dispatch(action);
        }}
        validationSchema={KhoaHocSchema}
        render={(formikProps) => (
          <Form>
            <div className="row mt-2">
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="maKhoaHoc">Mã khoá học</label>
                <Field
                  type="text"
                  className="form-control"
                  name="maKhoaHoc"
                  placeholder="Nhập mã khoá học"
                  onChange={formikProps.handleChange}
                />
              </div>
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="tenKhoaHoc">Tên khoá học</label>
                <Field
                  type="text"
                  className="form-control"
                  name="tenKhoaHoc"
                  placeholder="Nhập tên khoá học"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="tenKhoaHoc">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="moTa">Mô tả</label>
                <Field
                  type="text"
                  className="form-control"
                  name="moTa"
                  placeholder="Mô tả khoá học"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="moTa">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="luotXem">Lượt xem</label>
                <Field
                  type="number"
                  className="form-control"
                  name="luotXem"
                  placeholder="Lượt xem"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="luotXem">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="danhGia">Đánh giá</label>
                <Field
                  type="number"
                  className="form-control"
                  name="danhGia"
                  placeholder="Đánh giá"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="danhGia">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="hinhAnh">Hình ảnh</label>
                <Field
                  type="file"
                  className="form-control-file"
                  name="hinhAnh"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hinhAnh">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="biDanh">Bí danh</label>
                <Field
                  type="number"
                  className="form-control"
                  name="biDanh"
                  placeholder="Bí danh"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="biDanh">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
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
                <ErrorMessage name="maNhom">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="maDanhMucKhoaHoc">Mã danh mục khoá học</label>
                <Field
                  as="select"
                  className="form-control"
                  name="maDanhMucKhoaHoc"
                  onChange={formikProps.handleChange}
                >
                  {renderDanhMucKhoaHoc()}
                </Field>
              </div>
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="ngayTao">Ngày tạo</label>
                <Field
                  type="date"
                  className="form-control"
                  name="ngayTao"
                  placeholder="Ngày tạo"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="ngayTao">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="taiKhoanNguoiTao">Tài khoản người tạo</label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoanNguoiTao"
                  placeholder="Tài khoản người tạo"
                  onChange={formikProps.handleChange}
                  disabled
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                Thêm khoá học
              </button>
              <button
                className="btn btn-danger"
                onClick={formikProps.handleReset}
              >
                Đặt lại
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}
