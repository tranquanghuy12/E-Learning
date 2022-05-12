import "./App.css";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import QuanLyNguoiDung from "./pages/Admin/QuanLyNguoiDung/QuanLyNguoiDung";
import CapNhatThongTinNguoiDung from "./pages/Admin/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
import DanhMucKhoaHoc from "./pages/Home/DanhMucKhoaHoc";
import KhoaHocTheoDanhMuc from "./pages/Home/KhoaHocTheoDanhMuc";
import 'antd/dist/antd.css'
import XoaNguoiDung from "./pages/Admin/QuanLyNguoiDung/XoaNguoiDung";
import QuanLyKhoaHoc from "./pages/Admin/QuanLyKhoaHoc/QuanLyKhoaHoc";
import ThemNguoiDung from "./pages/Admin/QuanLyNguoiDung/ThemNguoiDung";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/danhmuckhoahoc" exact Component={DanhMucKhoaHoc} />
        <HomeTemplate path="/danhmuckhoahoc/:madanhmuc" exact Component={KhoaHocTheoDanhMuc} />
        <HomeTemplate path="/profile" exact Component={Profile} />
        <HomeTemplate path="/login" exact Component={Login} />
        <HomeTemplate path="/register" exact Component={Register} />
        <HomeTemplate path="/" exact Component={Home} />
        
        <AdminTemplate path="/admin" exact Component={Admin} />
        <AdminTemplate path='/admin/quanlynguoidung' exact Component={QuanLyNguoiDung}/>
        <AdminTemplate path='/admin/quanlynguoidung/themnguoidung' exact Component={ThemNguoiDung}/>
        <AdminTemplate path='/admin/quanlynguoidung/:taiKhoan' exact Component={CapNhatThongTinNguoiDung}/>
        <AdminTemplate path='/admin/quanlykhoahoc' exact Component={QuanLyKhoaHoc}/>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
