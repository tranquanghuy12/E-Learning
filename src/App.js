import "./App.css";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { Route, Router, Switch, useLocation } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";

import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CapNhatThongTinNguoiDung from "./pages/Admin/QuanLyNguoiDung/CapNhatThongTinNguoiDung/CapNhatThongTinNguoiDung";
import KhoaHocTheoDanhMuc from "./pages/Home/KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc";

import QuanLyKhoaHoc from "./pages/Admin/QuanLyKhoaHoc/QuanLyKhoaHoc";

import DanhSachNguoiDung from "./pages/Admin/QuanLyNguoiDung/DanhSachNguoiDung/DanhSachNguoiDung";
import Admin from "./pages/Admin/Admin";
import ThemNguoiDung from "./pages/Admin/QuanLyNguoiDung/ThemNguoiDung/ThemNguoiDung";
import GhiDanhNguoiDung from "./pages/Admin/QuanLyGhiDanh/GhiDanhNguoiDung/GhiDanhNguoiDung";
import ChiTietKhoaHoc from "./pages/Home/ChiTietKhoaHoc/ChiTietKhoaHoc";
import TimKiemKhoaHoc from "./pages/TimKiemKhoaHoc/TimKiemKhoaHoc";
import GhiDanhKhoaHoc from "./pages/Admin/QuanLyKhoaHoc/GhiDanhKhoaHoc";
import CapNhatThongTinKhoaHoc from "./pages/Admin/QuanLyKhoaHoc/CapNhatThongTinKhoaHoc";
import LoginUserTemplate from "./templates/UserTemplate/LoginUserTemplate";
import UserLogin from "./pages/Login/Login";
import UserRegister from "./pages/Register/Register";

//go to top when refresh
import ScrollRestoration from "react-scroll-restoration";
import { useEffect } from "react";

export const history = createBrowserHistory();

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router history={history}>
      {/* <ScrollRestoration /> */}
      <ScrollToTop />
      <Switch>
        <LoginUserTemplate exact path="/login" Component={UserLogin} />
        <LoginUserTemplate exact path="/register" Component={UserRegister} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate
          path="/timkiemkhoahoc/:value"
          exact
          Component={TimKiemKhoaHoc}
        />
        <HomeTemplate
          path="/timkiemkhoahoc/"
          exact
          Component={TimKiemKhoaHoc}
        />
        <HomeTemplate
          path="/danhmuckhoahoc=:madanhmuc"
          exact
          Component={KhoaHocTheoDanhMuc}
        />
        <HomeTemplate
          path={`/chitietkhoahoc=:makhoahoc`}
          exact
          Component={ChiTietKhoaHoc}
        />
        <HomeTemplate path="/profile" exact Component={Profile} />
        <HomeTemplate path="/" exact Component={Home} />

        {/* <HomeTemplate path="/login" exact Component={Login} /> */}

        <AdminTemplate path="/admin" exact Component={Admin} />
        <AdminTemplate
          path="/admin/quanlynguoidung"
          exact
          Component={DanhSachNguoiDung}
        />
        <AdminTemplate
          path="/admin/quanlynguoidung/themnguoidung"
          exact
          Component={ThemNguoiDung}
        />
        <AdminTemplate
          path="/admin/quanlynguoidung/capnhatthongtinnguoidung/:taiKhoan"
          exact
          Component={CapNhatThongTinNguoiDung}
        />
        <AdminTemplate
          path="/admin/quanlykhoahoc/capnhatthongtinkhoahoc/:maKhoaHoc"
          exact
          Component={CapNhatThongTinKhoaHoc}
        />
        <AdminTemplate
          path="/admin/quanlynguoidung/ghidanhnguoidung/:taiKhoan"
          exact
          Component={GhiDanhNguoiDung}
        />
        <AdminTemplate
          path="/admin/quanlykhoahoc/ghidanhkhoahoc/:maKhoaHoc"
          exact
          Component={GhiDanhKhoaHoc}
        />
        <AdminTemplate
          path="/admin/quanlykhoahoc"
          exact
          Component={QuanLyKhoaHoc}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
