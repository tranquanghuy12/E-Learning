import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhMucKhoaHocAction } from "../../../redux/actions/DanhMucKhoaHocAction";
import { Menu, Dropdown, Space } from "antd";
import "./DanhMucKhoaHoc.scss";

export default function DanhMucKhoaHoc() {
  const dispatch = useDispatch();

  //danh mục khóa học
  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );

  useEffect(() => {
    const action = layDanhMucKhoaHocAction();
    dispatch(action);
  }, []);

  //sử dụng cho dropdown menu của antd
  const mangDanhMucKhoaHocDropdown = mangDanhMucKhoaHoc.map((item, index) => {
    return {
      key: `${index}`,
      label: (
        <NavLink
          activeStyle={{ color: "#f55f8d" }}
          to={`/danhmuckhoahoc=${item.maDanhMuc}`}
        >
          {item.tenDanhMuc}
        </NavLink>
      ),
    };
  });

  // console.log("mangDangMucKhoaHoc", mangDanhMucKhoaHoc);

  const menu = <Menu items={mangDanhMucKhoaHocDropdown} />;

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="danhmuc__dropdown">
          Danh mục khóa học
          <i className="fa fa-angle-down danhmuc__dropdown_icon"></i>
        </Space>
      </a>
    </Dropdown>
  );
}
