import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderCardKhoaHoc from "../RenderCardKhoaHoc/RenderCardKhoaHoc";
import { layKhoaHocTheoDanhMucAction } from "../../redux/actions/KhoaHocTheoDanhMucAction";
import { Tabs } from "antd";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./TabCategory.scss";

const GAP_SIZE = 20;
const CARD_HEIGHT = 300;
const CARD_WIDTH = 200;

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

  // khoa hoc theo danh muc
  const renderKhoaHocTheoDanhMuc = () => {
    return mangKhoaHocTheoDanhMuc.map((item, index) => {
      return <RenderCardKhoaHoc item={item} key={index} />;
    });
  };

  function ListWrapper({ height, itemCount, width }) {
    // How many cards can we show per row, given the current width?
    const columnCount = Math.floor(
      (width - GAP_SIZE) / (CARD_WIDTH + GAP_SIZE)
    );
    const rowCount = Math.ceil(itemCount / columnCount);

    const itemData = useMemo(
      () => ({
        columnCount,
        itemCount,

        // These values could be dynamically calculated as well
        cardWidth: CARD_WIDTH,
        cardHeight: CARD_HEIGHT,
        gapSize: GAP_SIZE,
      }),
      [columnCount, itemCount]
    );

    return (
      <List
        className="List"
        height={height}
        itemCount={rowCount}
        itemSize={CARD_HEIGHT + GAP_SIZE}
        width={width}
        itemData={itemData}
      >
        {renderKhoaHocTheoDanhMuc}
      </List>
    );
  }

  // mang danh muc khoa hoc
  const renderMangDanhMuc = () => {
    return mangDanhMucKhoaHoc.map((item, index) => {
      return (
        <TabPane className="row" tab={item.tenDanhMuc} key={item.maDanhMuc}>
          {/* {renderKhoaHocTheoDanhMuc()} */}
        </TabPane>
      );
    });
  };

  return (
    <div className="container">
      <Tabs defaultActiveKey="1" centered onChange={changeTab}>
        {renderMangDanhMuc()}
      </Tabs>
      <AutoSizer style={{ height: "auto !important" }}>
        {({ height, width }) => (
          <ListWrapper height={500} itemCount={2} width={width} />
        )}
      </AutoSizer>
    </div>
  );
}
