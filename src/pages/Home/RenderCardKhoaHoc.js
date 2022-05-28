import React from "react";
import "./RenderCardKhoaHoc.scss";
import { useHistory } from "react-router-dom";
// import { Avatar, Card, Col, Row } from "antd";

export default function RenderCardKhoaHoc({ item }) {
  // const { Meta } = Card;
  const history = useHistory();
  const handleClick = () => {
    history.push("/chitietkhoahoc");
  };
  return (
    <div className="card project text-center" onClick={handleClick}>
      <div className="overlay">
        <div className="thumbnail">
          <img className="card-img-top w-100" src={item.hinhAnh} />
        </div>
      </div>
      <div className="card-body text-block">
        <div className="text-header">
          <h4>{item.tenKhoaHoc}</h4>
          <h5>Lượt xem: {item.luotXem}</h5>
        </div>
        <span className="text-hover">
          <p className="btn btn-warning more__detail">More Detail</p>
        </span>
      </div>
    </div>
  );
}
