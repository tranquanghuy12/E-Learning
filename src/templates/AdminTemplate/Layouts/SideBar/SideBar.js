import React, { Fragment, useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";
import { useHistory } from "react-router-dom";

export default function SideBar() {
  const history = useHistory();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem("Dashboard admin", "dashboard", <AppstoreOutlined />, [
      getItem("Quản lý khóa học", "/admin/quanlykhoahoc"),
      getItem("Quản lý người dùng", "/admin/quanlynguoidung"),
    ]),
  ];

  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("/admin");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const handleClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
    history.push(e.key);
  };
  return (
    <div className="mt-5">
      {/* <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br /> */}
      <Menu
        theme={theme}
        onClick={handleClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={["dashboard"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
