import React from "react";
import "./CountUp.scss";
import CountUpReact from "react-countup";
export default function CountUp() {
  return (
    <div className="count">
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
    // <section className="count">
    //   <div className="count__content">
    //     <div className="count__item">
    //       <div className="icon">
    //         <span className="icon__detail">
    //           <i class="style__icon fas fa-smile"></i>
    //         </span>
    //       </div>
    //       <div className="content">
    //         <h2>
    //           <span className="counter">18</span>
    //           Ml
    //         </h2>
    //         <p>Satisfied Clients</p>
    //       </div>
    //     </div>
    //     <div className="count__item">
    //       <div className="icon">
    //         <span className="icon__detail">
    //           <i class="style__icon fas fa-chart-line"></i>
    //         </span>
    //       </div>
    //       <div className="content">
    //         <h2>
    //           <span className="counter">20</span>
    //           Ml
    //         </h2>
    //         <p>Project Completed</p>
    //       </div>
    //     </div>
    //     <div className="count__item">
    //       <div className="icon">
    //         <span className="icon__detail">
    //         <i class="style__icon fas fa-rocket"></i>
    //         </span>
    //       </div>
    //       <div className="content">
    //         <h2>
    //           <span className="counter">30</span>
    //           Ml
    //         </h2>
    //         <p>Project Lunched</p>
    //       </div>
    //     </div>
    //     <div className="count__item">
    //       <div className="icon">
    //         <span className="icon__detail">
    //         <i class="style__icon fa fa-birthday-cake"></i>
    //         </span>
    //       </div>
    //       <div className="content">
    //         <h2>
    //           <span className="counter">50</span>
    //         </h2>
    //         <p>Years Completed</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
