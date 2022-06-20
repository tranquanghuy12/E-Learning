// import {
//   ErrorMessage,
//   Field,
//   Form,
//   Formik,
//   useFormik,
//   useFormikContext,
// } from "formik";
// import { forIn } from "lodash";
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ThemKhoaHocAdminAction } from "../../../redux/actions/AdminQuanLyKhoaHocAction";
// import { themKhoaHocUploadHinhAction } from "../../../redux/actions/AdminUploadHinhAnh";
// import { layDanhMucKhoaHocAction } from "../../../redux/actions/DanhMucKhoaHocAction";
// import KhoaHocSchema from "../../../services/KhoaHocSchema";

// const ThemKhoaHoc = () => {
//   const dispatch = useDispatch();
//   const [imgScr, setImgSrc] = useState("");

//   let user = "";
//   user = JSON.parse(localStorage.getItem("userLogin"));
//   const { mangDanhMucKhoaHoc } = useSelector(
//     (rootReducer) => rootReducer.DanhMucKhoaHocReducer
//   );
//   const renderDanhMucKhoaHoc = () => {
//     return mangDanhMucKhoaHoc.map((item, index) => {
//       return (
//         <option key={index} value={item.maDanhMuc}>
//           {item.tenDanhMuc}
//         </option>
//       );
//     });
//   };
//   useEffect(() => {
//     const action = layDanhMucKhoaHocAction();
//     dispatch(action);
//   }, []);

//   const [data, setData] = useState({
//     maKhoaHoc: "",
//     tenKhoaHoc: "",
//     biDanh: "",
//     moTa: "",
//     luotXem: 0,
//     danhGia: 0,
//     hinhAnh: {},
//     maNhom: "GP01" || "",
//     ngayTao: "",
//     maDanhMucKhoaHoc: "BackEnd",
//     taiKhoanNguoiTao: user.taiKhoan,
//   }||"");
//   const formik = useFormik({
//     initialValues:{data},
//     onSubmit:(values)=>{
//       console.log('values',values)
//     }
//   })
//   const handleChangeFile = (e) => {
//     //Lấy file ra từ e
//     let file = e.target.files[0];
//     console.log("day la file", file);
//     //Tạo đối tượng để đọc file
//     let reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = (e) => {
//       setImgSrc(e.target.result); //Hình base64
//     };
//     formik.setFieldValue("hinhAnh", file);
//   };

//   const handleSubmit = (values) => {
//     console.log("values", values);
//     //Tạo đ tượng formData
//     let formData = new FormData();
//     for (let key in values) {
//       if (key !== "hinhAnh") {
//         formData.append(key, values[key]);
//       } else {
//         formData.append("File", values.hinhAnh, values.hinhAnh.name);
//       }
//     }
//     dispatch(themKhoaHocUploadHinhAction(formData));
//     // dispatch(ThemKhoaHocAdminAction(values));
//     console.log("formData", formData.get("File"));
//   };
//   return (
//     <div className="container">
//       <Formik
//         // initialValues={data || ""}
//         onSubmit={(values) => {
//           handleSubmit(values);
//           // console.log(value);
//           // const action = ThemKhoaHocAdminAction(value);
//           // dispatch(action);
//         }}
//         // validationSchema={KhoaHocSchema}
//         render={(formikProps) => (
//           <Form>
//             <div className="row mt-2 mb-4">
//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="maKhoaHoc">Mã khoá học</label>
//                 <Field
//                   type="text"
//                   className="form-control"
//                   name="maKhoaHoc"
//                   placeholder="Nhập mã khoá học"
//                   onChange={formikProps.handleChange}
//                 />
//               </div>
//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="tenKhoaHoc">Tên khoá học</label>
//                 <Field
//                   type="text"
//                   className="form-control"
//                   name="tenKhoaHoc"
//                   placeholder="Nhập tên khoá học"
//                   onChange={formikProps.handleChange}
//                 />
//                 {/* <ErrorMessage name="tenKhoaHoc">
//                   {(msg) => <div className="text-danger">{msg}</div>}
//                 </ErrorMessage> */}
//               </div>

//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="luotXem">Lượt xem</label>
//                 <Field
//                   type="number"
//                   className="form-control"
//                   name="luotXem"
//                   placeholder="Lượt xem"
//                   onChange={formikProps.handleChange}
//                 />
//                 {/* <ErrorMessage name="luotXem">
//                   {(msg) => <div className="text-danger">{msg}</div>}
//                 </ErrorMessage> */}
//               </div>
//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="danhGia">Đánh giá</label>
//                 <Field
//                   type="number"
//                   className="form-control"
//                   name="danhGia"
//                   placeholder="Đánh giá"
//                   onChange={formikProps.handleChange}
//                 />
//                 {/* <ErrorMessage name="danhGia">
//                   {(msg) => <div className="text-danger">{msg}</div>}
//                 </ErrorMessage> */}
//               </div>
//               <div className="form-group col-sm-12 col-md-12 col-lg-12">
//                 <label htmlFor="hinhAnh">Hình ảnh</label>
//                 <input
//                   id="hinhAnh"
//                   name="hinhAnh"
//                   type="file"
//                   className="form-control-file"
//                   onChange={handleChangeFile}
//                   accept="image/png,image/jpg,image/jpeg"
//                 ></input>
//               </div>
//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <img src={imgScr} width={300} height={200} alt="..." />
//               </div>

//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="biDanh">Bí danh</label>
//                 <Field
//                   type="text"
//                   className="form-control"
//                   name="biDanh"
//                   placeholder="Bí danh"
//                   onChange={formikProps.handleChange}
//                 />
//                 {/* <ErrorMessage name="biDanh">
//                   {(msg) => <div className="text-danger">{msg}</div>}
//                 </ErrorMessage> */}
//               </div>
//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="maNhom">Mã nhóm</label>
//                 <Field
//                   as="select"
//                   className="form-control"
//                   name="maNhom"
//                   onChange={formikProps.handleChange}
//                 >
//                   <option value="GP01">GP01</option>
//                   <option value="GP02">GP02</option>
//                   <option value="GP03">GP03</option>
//                   <option value="GP04">GP04</option>
//                   <option value="GP05">GP05</option>
//                 </Field>
//                 {/* <ErrorMessage name="maNhom">
//                   {(msg) => <div className="text-danger">{msg}</div>}
//                 </ErrorMessage> */}
//               </div>
//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="maDanhMucKhoaHoc">Mã danh mục khoá học</label>
//                 <Field
//                   as="select"
//                   className="form-control"
//                   name="maDanhMucKhoaHoc"
//                   onChange={formikProps.handleChange}
//                 >
//                   {renderDanhMucKhoaHoc()}
//                 </Field>
//               </div>
//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="ngayTao">Ngày tạo</label>
//                 <Field
//                   type="date"
//                   className="form-control"
//                   name="ngayTao"
//                   placeholder="Ngày tạo"
//                   onChange={formikProps.handleChange}
//                 />
//                 {/* <ErrorMessage name="ngayTao">
//                   {(msg) => <div className="text-danger">{msg}</div>}
//                 </ErrorMessage> */}
//               </div>
//               <div className="form-group col-sm-12 col-md-6 col-lg-6">
//                 <label htmlFor="taiKhoanNguoiTao">Tài khoản người tạo</label>
//                 <Field
//                   type="text"
//                   className="form-control"
//                   name="taiKhoanNguoiTao"
//                   placeholder="Tài khoản người tạo"
//                   onChange={formikProps.handleChange}
//                   disabled
//                 />
//               </div>
//               <div className="form-group col-sm-12 col-md-12 col-lg-12">
//                 <label htmlFor="moTa">Mô tả</label>
//                 <Field
//                   type="text"
//                   className="form-control"
//                   name="moTa"
//                   placeholder="Mô tả khoá học"
//                   onChange={formikProps.handleChange}
//                 />
//                 {/* <ErrorMessage name="moTa">
//                   {(msg) => <div className="text-danger">{msg}</div>}
//                 </ErrorMessage> */}
//               </div>
//             </div>
//             <div className="text-center mb-5">
//               <button type="submit" className="btn btn-success mr-2">
//                 Thêm khoá học
//               </button>
//               <button
//                 className="btn btn-danger"
//                 onClick={formikProps.handleReset}
//               >
//                 Đặt lại
//               </button>
//             </div>
//           </Form>
//         )}
//       />
//     </div>
//   );
// };

// export default ThemKhoaHoc;
