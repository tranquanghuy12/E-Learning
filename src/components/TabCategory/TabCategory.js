import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderCardKhoaHoc from "../RenderCardKhoaHoc/RenderCardKhoaHoc";
import { layKhoaHocTheoDanhMucAction } from "../../redux/actions/KhoaHocTheoDanhMucAction";
import { Tabs } from "antd";
import { FixedSizeList as List } from "react-window";
import "./TabCategory.scss";

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

  const renderKhoaHocTheoDanhMuc = () => {
    return mangKhoaHocTheoDanhMuc.map((item, index) => {
      return <RenderCardKhoaHoc item={item} key={index} />;
    });
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

  return (
    <div className="container">
      <Tabs defaultActiveKey="1" centered onChange={changeTab}>
        {renderMangDanhMuc()}
      </Tabs>
    </div>
  );
}
