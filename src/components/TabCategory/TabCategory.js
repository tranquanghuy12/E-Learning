import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import RenderCardKhoaHoc from "../../pages/Home/RenderCardKhoaHoc";
import { layKhoaHocTheoDanhMucAction } from "../../redux/actions/KhoaHocTheoDanhMucAction";
import { Tabs } from "antd";
export default function TabCategory(props) {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;
  //danh mục khóa học
  const { mangDanhMucKhoaHoc } = useSelector(
    (rootReducer) => rootReducer.DanhMucKhoaHocReducer
  );

//   console.log("mảng danh mục khoá học", mangDanhMucKhoaHoc);
  //khóa học theo danh mục
  const { mangKhoaHocTheoDanhMuc } = useSelector(
    (rootReducer) => rootReducer.KhoaHocTheoDanhMucReducer
  );

  const [maDanhMuc, setMaDanhMuc] = useState("BackEnd");
  useEffect(() => {
    const action = layKhoaHocTheoDanhMucAction(maDanhMuc);
    dispatch(action);
  }, [maDanhMuc]);

  const changeTab = (tab) => {
    setMaDanhMuc(tab);
  };

  const renderMangDanhMuc = () => {
    return mangDanhMucKhoaHoc.map((item, index) => {
      return (
        <TabPane className="row" tab={item.tenDanhMuc} key={item.maDanhMuc}>
          {renderKhoaHocTheoDanhMuc()}
        </TabPane>
      );
    });
  };
  const renderKhoaHocTheoDanhMuc = () => {
    return mangKhoaHocTheoDanhMuc.map((item, index) => {
      return (
        <div className="mb-4 col-sm-12 col-md-3 col-lg-4" key={index}>
          <RenderCardKhoaHoc item={item} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <Tabs defaultActiveKey="1" centered onChange={changeTab}>
        {renderMangDanhMuc()}
      </Tabs>
    </div>
  );
}
