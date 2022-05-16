import React from "react";
import { Card } from "antd";

export default function RenderCardKhoaHoc({ item }) {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: '100%' }}
      cover={<img alt={item.tenKhoaHoc} src={item.hinhAnh} />}
    >
      <Meta title={item.tenKhoaHoc} description={`Lượt xem: ${item.luotXem}`} />
    </Card>
  );
}