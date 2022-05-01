import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { CapNhatNguoiDungSchema } from "../../services/NguoiDungSchema";

const ModalCapNhatNguoiDung = ({ item }) => {
  
  // console.log('modal ma loai',maLoaiNguoiDung);
  const suaNguoiDung = (values) => {
    console.log(values);
  };
  
  // const loadMaLoaiNguoiDung = () => {
  //   return maLoaiNguoiDung.map((maLoai, index) => {
  //     return (
  //       <option value={maLoai.maLoaiNguoiDung} key={index}>
  //           {item.tenLoaiNguoiDung}
  //       </option>
  //     );
  //   });
  // };
  // console.log('map loadMaLoai',loadMaLoaiNguoiDung());
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#modelId"
      >
        Launch
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
                            type="text"
                            name="matKhau"
                            onChange={handleChange}
                          />
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
                            type="text"
                            name="email"
                            onChange={handleChange}
                          />
                          <ErrorMessage name="email">
                            {(msg) => <div className="text-danger">{msg}</div>}
                          </ErrorMessage>
                        </div>
                        <div className="form-group pb-3">
                          <label>Mã lớp học</label>
                          <select
                            className="form-control"
                            name="maNhom"
                            component="select"
                            onChange={handleChange}
                          >
                            <option>GP01</option>
                            <option>GP02</option>
                            <option>GP03</option>
                          </select>
                        </div>
                        <div className="form-group pb-3">
                          <label>Mã loại người dùng</label>
                          <Field
                            className="form-control"
                            as="select"
                            name="maLoaiNguoiDung"
                          >
                            {/* {loadMaLoaiNguoiDung()} */}
                          </Field>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </>
              ) : (
                <>Loading</>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalCapNhatNguoiDung;
