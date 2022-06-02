import swal from "sweetalert";
import { http } from "../../util/setting/config";

export const themKhoaHocUploadHinhAction = (formData) => {
  return async (dispatch) => {
    //co nghia la no fail ngay tu luc try catch nen khong vo duoc api
    try {
      // let object = {};
      formData.forEach(function (value, key) {
        // object[key] = value;
        console.log('value:' + value + ", key: " + key)
       });
      // let json = object;
      // console.log("testsss", json);
      console.log("action", formData.get('File'));
      let result = await http.post(
        "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh",
        formData
      );
      console.log(result);
      swal("Upload hình thành công");
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const uploadHinhAnhKhoaHoc = (formData) => {
  return async (dispatch) => {
    try {
      let result = await http.post(
        "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
        formData
      );
      console.log("result", result);
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
