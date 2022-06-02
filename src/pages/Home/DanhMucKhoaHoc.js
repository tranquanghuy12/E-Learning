import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhMucKhoaHocAction } from "../../redux/actions/DanhMucKhoaHocAction";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import "./DanhMucKhoaHoc.scss";

export default function DanhMucKhoaHoc() {
  const style = {
    color: "#ffd302",
  };
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
        <NavLink activeStyle={style} to={`/danhmuckhoahoc/${item.maDanhMuc}`}>
          {item.tenDanhMuc}
        </NavLink>
      ),
    };
  });

  const menu = <Menu items={mangDanhMucKhoaHocDropdown} />;

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="danhmuc-dropdown">
          Danh mục khóa học
          <i class="fa fa-angle-down"></i>
        </Space>
      </a>
    </Dropdown>
  );
}
