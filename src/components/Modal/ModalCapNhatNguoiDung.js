import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { CapNhatNguoiDungSchema, DangKySchema } from "../../services/NguoiDungSchema";

const ModalCapNhatNguoiDung = ({ item, maLoaiNguoiDung }) => {
  const dispatch = useDispatch();
  
  const suaNguoiDung = (values) => {
    
    swal({
      title: "Bạn có chắc chắn muốn sửa không?",
      text: "Bạn sẽ không thể phục hồi",
      showCancelButton: true,
      confirmButtonText: "Chắc chắn",
    });
  };

  const loadMaLoaiNguoiDung = () => {
    return maLoaiNguoiDung.map((item, index) => {
      return (
        <option value={item.maLoaiNguoiDung} key={index}>
          {item.tenLoaiNguoiDung}
        </option>
      );
    });
  };
  const [hienMatKhau, setHienMatKhau] = useState(false);
  const batTatNutHienMatKhau = () => {
    setHienMatKhau(!hienMatKhau);
  };
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#modelId"
      >
        Sửa thông tin
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sửa thông tin người dùng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {item ? (
                <>
                  <Formik
                    initialValues={{
                      taiKhoan: item.taiKhoan || "",
                      matKhau: item.matKhau || "",
                      hoTen: item.hoTen || "",
                      soDT: item.soDT || "",
                      maNhom: item.maNhom || "GP01",
                      email: item.email || "",
                      maLoaiNguoiDung: item.maLoaiNguoiDung || "",
                    }}
                    onSubmit={(values) => {
                      suaNguoiDung(values);
                    }}
                    validationSchema={CapNhatNguoiDungSchema}
                  >
                    {({ handleChange, handleSubmit, resetForm }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="form-group pb-3">
                          <label>Tài khoản</label>
                          <Field
                            className="form-control"
                            type="text"
                            name="taiKhoan"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="taiKhoan">
                            {(msg) => <div className="text-danger">{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                          <label>Mật khẩu</label>
                          <Field
                            className="form-control"
                            type={hienMatKhau ? "text" : "password"}
                            name="matKhau"
                            id="positionInput"
                            onChange={handleChange}
                          />
                          {hienMatKhau ? (
                            <i
                              className="fas fa-eye field-icon"
                              onClick={batTatNutHienMatKhau}
                            ></i>
                          ) : (
                            <i
                              className="far fa-eye-slash field-icon"
                              onClick={batTatNutHienMatKhau}
                            ></i>
                          )}
                          <ErrorMessage name="matKhau">
                            {(msg) => <div className="text-danger">{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                          <label>Họ tên</label>
                          <Field
                            className="form-control"
                            type="text"
                            name="hoTen"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="hoTen">
                            {(msg) => <div className="text-danger">{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                          <label>Số điện thoại</label>
                          <Field
                            className="form-control"
                            type="text"
                            name="soDT"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="soDT">
                            {(msg) => <div className="text-danger">{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                          <label>Email</label>
                          <Field
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="email">
                            {(msg) => <div className="text-danger">{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                          <label>Mã lớp học</label>
                          <Field
                            className="form-control"
                            name="maNhom"
                            component="select"
                            onChange={handleChange}
                          >
                            <option>GP01</option>
                            <option>GP02</option>
                            <option>GP03</option>
                          </Field>
                        </div>
                        <div className="form-group pb-3">
                          <label>Mã loại người dùng</label>
                          <Field
                            className="form-control"
                            as="select"
                            name="maLoaiNguoiDung"
                          >
                            {loadMaLoaiNguoiDung()}
                          </Field>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Đóng
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Sửa
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </>
              ) : (
                <>Loading</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalCapNhatNguoiDung;
