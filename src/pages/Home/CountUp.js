import React from "react";
import "./CountUp.scss";
import CountUpReact from "react-countup";
export default function CountUp() {
  return (
    <div className="count mt-5">
      <div className="count__content row">
        <div className="count__item col-sm-12 col-md-3 col-lg-3">
          <i className="icon style__icon fas fa-smile"></i>
          <h2 className="count__title">
            <CountUpReact end={18} duration={2} />
            Ml
          </h2>
          <p className="style__description">Học viên hài lòng</p>
        </div>
        <div className="count__item col-sm-12 col-md-3 col-lg-3">
          <i className="icon style__icon fas fa-chart-line"></i>
          <h2 className="count__title">
            <CountUpReact end={20} duration={2} />
            Ml
          </h2>
          <p className="style__description">Dự án tốt nghiệp</p>
        </div>
        <div className="count__item col-sm-12 col-md-3 col-lg-3">
          <i className="icon style__icon fas fa-rocket"></i>
          <h2 className="count__title">
            <CountUpReact end={30} duration={2} />
            Ml
          </h2>
          <p className="style__description">Dự án phát triển</p>
        </div>
        <div className="count__item col-sm-12 col-md-3 col-lg-3">
          <i className="icon style__icon fa fa-birthday-cake"></i>
          <h2 className="count__title">
            <CountUpReact end={50} duration={2} />
          </h2>
          <p className="style__description">Năm thành lập</p>
        </div>
      </div>
    </div>
  );
}
