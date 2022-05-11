import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from "sweetalert";
import { Avatar, Breadcrumb, Layout, Menu, Typography } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
  LogoutOutlined,
  DatabaseFilled,
  ReadOutlined,
} from "@ant-design/icons";
import Home from "../Home/Home";
import QuanLyNguoiDung from "./QuanLyNguoiDung/QuanLyNguoiDung";
import QuanLyKhoaHoc from "./QuanLyKhoaHoc/QuanLyKhoaHoc";
import DanhSachNguoiDungTest from "../../templates/AdminTemplate/Layouts/DanhSachNguoiDung/DanhSachNguoiDungTest";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/setting/config";

export default function Admin() {
  const { Header, Sider, Content, Footer } = Layout;
  const { Title } = Typography;
  const [state, setState] = useState({ collapsed: true });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  const history = useHistory();

  const tuChoiTruyCap = () => {
    swal({
      title: "Truy cập thất bại",
      icon: "error",
      text: "Vui lòng đăng nhập bằn tài khoản quản trị",
      confirmButtonText: "Đăng nhập",
    });
    localStorage.removeItem("userLogin");
    localStorage.removeItem("accessToken");
    history.push("/login");
  };
  const token = JSON.parse(localStorage.getItem("userLogin"));
  console.log("token", token);

  return (
    <Router>
      <Layout>
        <Header style={{ padding: 12 }}>
          <Avatar style={{ float: "right" }} icon={<UserOutlined />} />
          <Title style={{ color: "white" }} level={3}>
            Admin Page
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <HomeOutlined />
                <span>Home</span>
                <Link to="/admin/"></Link>
              </Menu.Item>
              <Menu.Item key="2">
                <UserOutlined />
                <span>Quản lý người dùng</span>
                <Link to="/admin/quanlynguoidung"></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <ReadOutlined />
                <span>Quản lý khoá học</span>
                <Link to="/admin/quanlykhoahoc"></Link>
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN_CYBERSOFT);
                  history.push("/home");
                  window.location.reload();
                }}
                key="4"
              >
                <LogoutOutlined />
                <span>Đăng xuất</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280,
              }}
            >
              <Route exact path="/admin/" component={Home} />
              <Route
                path="/admin/quanlynguoidung"
                component={DanhSachNguoiDungTest}
              />
              <Route path="/admin/quanlykhoahoc" component={QuanLyKhoaHoc} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}
