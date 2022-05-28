import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { Field, Formik } from "formik";
export default function ModalCapNhatKhoaHoc(props) {
  const dispatch = useDispatch();
  const item = props.modaldata;
  const renderMaDanhMucKhoaHoc = "";
  const suaThongTinKhoaHoc = (values) => {
    swal({
      title: "Bạn có chắc chắn muốn sửa không?",
      text: "Bạn sẽ không thể phục hồi",
      icon: "warning",
    }).then((result) => {
      if (result === true) {
        console.log("sua thông tin", values);
        // dispatch(capNhatThongTinKhoaHoc(values));
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
        luotXem: item.luotXem || "",
        danhGia: item.danhGia || "",
        hinhAnh: item.hinhAnh || "",
        maNhom: item.maNhom ? item.maNhom : "GP01",
        ngayTao: item.ngayTao || "",
        danhMucKhoaHoc: item.danhMucKhoaHoc.maDanhMucKhoaHoc || "BackEnd",
        taiKhoanNguoiTao: item.nguoiTao.taiKhoan,
      }}
      onSubmit={(values) => {
        suaThongTinKhoaHoc(values);
        console.log(values);
      }}
      render={(formikProps) => (
        <div className="container row">
          <div className="form-group col-md-6">
            <label htmlFor="maKhoaHoc">Mã khoá học</label>
            <Field
              className="form-control"
              type="text"
              name="maKhoaHoc"
              value={formikProps.values.maKhoaHoc}
              onChange={formikProps.handleChange}
              disabled
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="maNhom">Mã nhóm</label>
            <Field
              className="form-control"
              type="text"
              name="maNhom"
              value={formikProps.values.maNhom}
              onChange={formikProps.handleChange}
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="tenKhoaHoc">Tên khoá học</label>
            <Field
              className="form-control"
              type="text"
              name="tenKhoaHoc"
              value={formikProps.values.tenKhoaHoc}
              onChange={formikProps.handleChange}
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="biDanh">Bí danh</label>
            <Field
              className="form-control"
              type="text"
              name="biDanh"
              value={formikProps.values.biDanh}
              onChange={formikProps.handleChange}
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="ngayTao">Ngày tạo</label>
            <Field
              className="form-control"
              type="text"
              name="ngayTao"
              value={formikProps.values.ngayTao}
              onChange={formikProps.handleChange}
              disabled
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="taiKhoanNguoiTao">Tài khoản người tạo</label>
            <Field
              className="form-control"
              type="text"
              name="taiKhoanNguoiTao"
              value={formikProps.values.taiKhoanNguoiTao}
              onChange={formikProps.handleChange}
              disabled
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="hinhAnh">Hình ảnh</label>
            <Field
              className="form-control"
              type="type"
              name="hinhAnh"
              value={formikProps.values.hinhAnh}
              onChange={formikProps.handleChange}
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="maDanhMucKhoaHoc">Mã danh mục khoá học</label>
            <Field
              className="form-control"
              type="text"
              name="maDanhMucKhoaHoc"
              value={formikProps.values.danhMucKhoaHoc}
              onChange={formikProps.handleChange}
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="luotXem">Lượt xem</label>
            <Field
              className="form-control"
              type="text"
              name="luotXem"
              value={formikProps.values.luotXem}
              onChange={formikProps.handleChange}
            ></Field>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="danhGia">Đánh giá</label>
            <Field
              className="form-control"
              type="text"
              name="danhGia"
              value={formikProps.values.danhGia}
              onChange={formikProps.handleChange}
            ></Field>
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="moTa">Mô tả</label>
            <Field
              className="form-control"
              type="text"
              name="moTa"
              value={formikProps.values.moTa}
              onChange={formikProps.handleChange}
            ></Field>
          </div>
        </div>
      )}
    />
  );
}
