import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Field, Form, Formik } from "formik";
import {
  capNhatThongTinKhoaHoc,
  capNhatThongTinKhoaHocAction,
} from "../../redux/actions/AdminQuanLyKhoaHocAction";

export default function ModalCapNhatKhoaHoc(props) {
  const dispatch = useDispatch();
  const item = props.modaldata;

  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );

  console.log("mangDanhMucKhoaHoc", mangDanhMucKhoaHoc);

  const renderDanhMucKhoaHoc = () => {
    return mangDanhMucKhoaHoc.map((item, index) => {
      return (
        <option key={index} value={item.maDanhMuc}>
          {item.tenDanhMuc}
        </option>
      );
    });
  };

  const suaThongTinKhoaHoc = (values) => {
    swal({
      title: "Bạn có chắc chắn muốn sửa không?",
      text: "Bạn sẽ không thể phục hồi",
      icon: "warning",
    }).then((result) => {
      if (result === true) {
        console.log("sua thông tin", values);
        dispatch(capNhatThongTinKhoaHocAction(values));
      }
    });
  };

  return (
    <Formik
      enableReinitialize="true"
      initialValues={
        {
          maKhoaHoc: item.maKhoaHoc || "",
          tenKhoaHoc: item.tenKhoaHoc || "",
          biDanh: item.biDanh || "",
          moTa: item.moTa || "",
          luotXem: item.luotXem || "",
          danhGia: item.danhGia || 5,
          hinhAnh: item.hinhAnh || "",
          maNhom: item.maNhom ? item.maNhom : "GP01",
          ngayTao: item.ngayTao || "",
          maDanhMucKhoaHoc: item.danhMucKhoaHoc || "BackEnd",
          taiKhoanNguoiTao: item.nguoiTao || "",
        } || ""
      }
      onSubmit={(values) => {
        suaThongTinKhoaHoc(values);
        console.log("value submit", values);
      }}
      render={(formikProps) => (
        <Form>
          <div className="container row">
            <div className="form-group col-md-6">
              <label htmlFor="maKhoaHoc">Mã khoá học</label>
              <Field
                className="form-control"
                type="text"
                name="maKhoaHoc"
                onChange={formikProps.handleChange}
                disabled
              ></Field>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="ngayTao">Ngày tạo</label>
              <Field
                className="form-control"
                type="text"
                name="ngayTao"
                onChange={formikProps.handleChange}
                disabled
              ></Field>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="tenKhoaHoc">Tên khoá học</label>
              <Field
                className="form-control"
                type="text"
                name="tenKhoaHoc"
                onChange={formikProps.handleChange}
              ></Field>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="biDanh">Bí danh</label>
              <Field
                className="form-control"
                type="text"
                name="biDanh"
                onChange={formikProps.handleChange}
              ></Field>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="taiKhoanNguoiTao">Tài khoản người tạo</label>
              <Field
                className="form-control"
                type="text"
                name="taiKhoanNguoiTao"
                onChange={formikProps.handleChange}
                disabled
              ></Field>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="luotXem">Lượt xem</label>
              <Field
                className="form-control"
                type="text"
                name="luotXem"
                onChange={formikProps.handleChange}
              ></Field>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="danhMucKhoaHoc">Mã danh mục khoá học</label>
              <Field
                className="form-control"
                as="select"
                name="maDanhMucKhoaHoc"
                onChange={formikProps.handleChange}
              >
                {renderDanhMucKhoaHoc()}
              </Field>
            </div>
            <div className="form-group col-md-6">
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
            <div className="form-group col-md-12">
              <label htmlFor="moTa">Mô tả</label>
              <Field
                className="form-control"
                type="text"
                name="moTa"
                onChange={formikProps.handleChange}
              ></Field>
            </div>
            <button type="submit" className="btn btn-success">
              OK
            </button>
          </div>
        </Form>
      )}
    />
  );
}
