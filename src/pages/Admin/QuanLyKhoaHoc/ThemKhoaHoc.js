import React, { useEffect, useState } from "react";
import { Form, Input, Radio, Select, DatePicker, InputNumber } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { layDanhMucKhoaHocAction } from "../../../redux/actions/DanhMucKhoaHocAction";
import { useDispatch, useSelector } from "react-redux";
import { themKhoaHocAdminAction } from "../../../redux/actions/AdminQuanLyKhoaHocAction";

const ThemKhoaHoc = () => {
  const taiKhoanNguoiTao = JSON.parse(localStorage.getItem("userLogin"));
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );
  const renderDanhMucKhoaHoc = () => {
    return mangDanhMucKhoaHoc.map((item, index) => {
      return (
        <Select.Option key={index} value={item.maDanhMuc}>
          {item.tenDanhMuc}
        </Select.Option>
      );
    });
  };
  const handleChangeSelect = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  useEffect(() => {
    const action = layDanhMucKhoaHocAction();
    dispatch(action);
  }, []);
  const handleChangeDatePicker = (value) => {
    let ngayTao = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  // const handleChangeFile = (e) => {
  //   //Lấy file ra từ e
  //   let file = e.target.files[0];
  //   console.log("file", file);
  //   if (
  //     file.type === "image/jpg" ||
  //     file.type === "image/jpeg" ||
  //     file.type === "image/png"
  //   ) {
  //     //Tạo đối tượng đọc file
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = (e) => {
  //       //load hình khi chọn hình khác
  //       //hình base64

  //       setImgSrc(e.target.result);
  //     };
  //     formik.setFieldValue("hinhAnh", file);
  //   } else {
  //     console.log("Dịnh dạnh không phù hợp");
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: taiKhoanNguoiTao.taiKhoan,
    },
    onSubmit: (values) => {
      // values.maNhom = GROUPID;
      // //Tạo formData
      // let formData = new FormData();
      // for (let key in values) {
      //   if (key === "hinhAnh") {
      //     formData.append("file", values.hinhAnh, values.hinhAnh.name);
      //   } else {
      //     formData.append(key, values[key]);
      //   }
      // }
      //Gọi api
      dispatch(themKhoaHocAdminAction(values));
    },
  });
  const { TextArea } = Input;
  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Mã khoá học">
        <Input name="maKhoaHoc" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Tên khoá học">
        <Input name="tenKhoaHoc" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Bí danh">
        <Input name="biDanh" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Lượt xem">
        <Input name="luotXem" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Tài khoản">
        <Input
          name="taiKhoanNguoiTao"
          onChange={formik.handleChange}
          value={taiKhoanNguoiTao.taiKhoan}
          disabled
        />
      </Form.Item>
      <Form.Item label="Danh mục">
        <Select onChange={handleChangeSelect("maDanhMucKhoaHoc")}>
          {renderDanhMucKhoaHoc()}
        </Select>
      </Form.Item>
      <Form.Item label="Mã nhóm">
        <Select onChange={handleChangeSelect("maNhom")}>
          <Select.Option value="GP01">GP01</Select.Option>
          <Select.Option value="GP02">GP02</Select.Option>
          <Select.Option value="GP03">GP03</Select.Option>
          <Select.Option value="GP04">GP04</Select.Option>
          <Select.Option value="GP05">GP05</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Ngày tạo">
        <DatePicker
          name="ngayTao"
          format={"DD/MM/YYYY"}
          onChange={handleChangeDatePicker}
        />
      </Form.Item>
      <Form.Item label="Upload Hình">
        <Input type="file" name="hinhAnh" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Đánh giá">
        <InputNumber
          name="danhGia"
          onChange={handleChangeInputNumber("danhGia")}
          min={0}
          max={10}
        />
      </Form.Item>
      {/* <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formik.handleChange} />
      </Form.Item> */}
      <Form.Item label="Mô tả">
        <TextArea
          allowClear
          name="moTa"
          showCount
          maxLength={100}
          style={{
            height: 120,
          }}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button className="btn btn-primary mr-2" type="submit">
          Thêm
        </button>
        <button onClick={formik.handleReset} className="btn btn-warning">
          Đặt lại
        </button>
      </Form.Item>
    </Form>
  );
};

export default ThemKhoaHoc;
