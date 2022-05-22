import React from "react";
import { Avatar, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./RenderCardKhoaHoc.scss";
export default function RenderCardKhoaHoc({ item }) {
  const { Meta } = Card;
  return (
    <Link to={`/chitiet/${item.maKhoaHoc}`}>
      <Card
        hoverable
        style={{ width: "100%", position: "relative" }}
        cover={<img alt={item.tenKhoaHoc} src={item.hinhAnh} />}
      >
        <div className="card__overlay">
          <div className="card__chitiet">
            <Link>
              <button className="btn btn-primary">Chi Tiết</button>
            </Link>
          </div>
        </div>
        <Meta
          title={item.tenKhoaHoc}
          description={`Lượt xem: ${item.luotXem}`}
        />
      </Card>
    </Link>
  );
}
