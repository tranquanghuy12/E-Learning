import "./App.css";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CapNhatThongTinNguoiDung from "./pages/Admin/QuanLyNguoiDung/CapNhatThongTinNguoiDung/CapNhatThongTinNguoiDung";
import DanhMucKhoaHoc from "./pages/Home/DanhMucKhoaHoc";
import KhoaHocTheoDanhMuc from "./pages/Home/KhoaHocTheoDanhMuc";
import "antd/dist/antd.css";
import QuanLyKhoaHoc from "./pages/Admin/QuanLyKhoaHoc/QuanLyKhoaHoc";

import DanhSachNguoiDung from "./pages/Admin/QuanLyNguoiDung/DanhSachNguoiDung/DanhSachNguoiDung";
import Admin from "./pages/Admin/Admin";
import ThemNguoiDung from "./pages/Admin/QuanLyNguoiDung/ThemNguoiDung/ThemNguoiDung";

import ModalCapNhatNguoiDung from "./components/Modal/ModalCapNhatNguoiDung";
import GhiDanhNguoiDung from "./pages/Admin/QuanLyGhiDanh/GhiDanhNguoiDung/GhiDanhNguoiDung";
import ChiTietKhoaHoc from "./pages/Home/ChiTietKhoaHoc";
import TimKiemKhoaHoc from "./pages/TimKiemKhoaHoc/TimKiemKhoaHoc";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/danhmuckhoahoc" exact Component={DanhMucKhoaHoc} />        
        <HomeTemplate
          path="/danhmuckhoahoc/timkiem/:makhoahoc"
          exact
          Component={TimKiemKhoaHoc}
        />

        <HomeTemplate
          path="/danhmuckhoahoc/:madanhmuc"
          exact
          Component={KhoaHocTheoDanhMuc}
        />
        <HomeTemplate path="/chitietkhoahoc" exact Component={ChiTietKhoaHoc} />
        <HomeTemplate path="/profile" exact Component={Profile} />
        <HomeTemplate path="/" exact Component={Home} />

        <HomeTemplate path="/login" exact Component={Login} />
        <HomeTemplate path="/register" exact Component={Register} />

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
          path="/admin/quanlynguoidung/ghidanhnguoidung/:taiKhoan"
          exact
          Component={GhiDanhNguoiDung}
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
