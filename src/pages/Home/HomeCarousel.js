import React from "react";
import { Carousel } from "antd";
import carousel from "../../assets/img/Carouselmg/carousel.jpeg";
import carousel1 from "../../assets/img/Carouselmg/carousel1.png";
import carousel2 from "../../assets/img/Carouselmg/carousel2.jpeg";
import carousel3 from "../../assets/img/Carouselmg/carousel3.jpeg";
export default function HomeCarousel() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel autoplay>
      <div>
        <a style={contentStyle}>
          <img src={carousel} className="w-100" alt="" />
        </a>
      </div>
      <div>
        <a style={contentStyle}>
          <img src={carousel1} className="w-100" alt="" />
        </a>
      </div>
      <div>
        <a style={contentStyle}>
          <img src={carousel2} className="w-100" alt="" />
        </a>
      </div>
      <div>
        <a style={contentStyle}>
          <img src={carousel3} className="w-100" alt="" />
        </a>
      </div>
    </Carousel>
  );
}
