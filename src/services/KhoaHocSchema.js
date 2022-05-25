import React from "react";
import * as yup from "yup";
import { regexFileExtension } from "./checkFileType";
export const KhoaHocSchema = yup.object().shape({
  maKhoaHoc: yup.string().required("* Không được bỏ trống mã khoá học"),
  tenKhoaHoc: yup.string().required("* Không được bỏ trống tên khoá học"),
  moTa: yup.string().required("* Không được bỏ trống mô tả"),
  biDanh: yup.string().required("* Không được bỏ trống bí danh"),
  luotXem: yup.string().required("* Không được bỏ trống lượt xem"),
  danhGia: yup.string().required("* Không được bỏ trống đánh giá"),
  hinhAnh: yup
    .mixed()
    .required("* Vui lòng chọn file")
    .test(
      "type",
      "Chỉ hỗ trợ các định dạnh: .jpg, .png hoặc .jpeg",
      (value) => {
        let checkFileExt = regexFileExtension(value);
        switch (checkFileExt.toLowerCase()) {
          case "jpg":
            return true;
          case "png":
            return true;
          case "jpeg":
            return true;

          default:
            break;
        }
        return false;
      }
    ),
  ngayTao: yup.string().required("* Không được bỏ trống ngày tạo"),
  maNhom: yup.string().required("* Không được bỏ trống mã nhóm"),
  maDanhMucKhoaHoc: yup.string().required("* Không được bỏ trống mã danh mục"),
});
export default KhoaHocSchema;
