import React from "react";
import "./RenderCardKhoaHoc.scss";
import { useHistory } from "react-router-dom";
// import { Avatar, Card, Col, Row } from "antd";

export default function RenderCardKhoaHoc({ item }) {
  // const { Meta } = Card;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/chitietkhoahoc/${item.maKhoaHoc}`);
  };
  return (
    <div className="card project text-center" onClick={handleClick}>
      <div className="overlay">
        <div className="thumbnail">
          <img className="card-img-top w-100" src={item.hinhAnh} />
        </div>
        <span className="text-hover">
          <p className="btn btn-warning more__detail">More Detail</p>
        </span>
      </div>

      <div className="card-body p-3">
        <div className="text-header">
          <h4 className="mb-1">{item.tenKhoaHoc}</h4>
          <h5 className="mt-2">Lượt xem: {item.luotXem}</h5>
        </div>
      </div>
    </div>
  );
}
