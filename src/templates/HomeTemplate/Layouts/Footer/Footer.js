import React from "react";
import "./main.scss";
export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Kết nối với chúng tôi trên các mạng xã hội:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a className="me-4 text-reset ml-3">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="me-4 text-reset ml-3">
            <i className="fab fa-twitter" />
          </a>
          <a className="me-4 text-reset ml-3">
            <i className="fab fa-google" />
          </a>
          <a className="me-4 text-reset ml-3">
            <i className="fab fa-instagram" />
          </a>
          <a className="me-4 text-reset ml-3">
            <i className="fab fa-linkedin" />
          </a>
          <a className="me-4 text-reset ml-3">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text__hover">
              {/* Content */}
              <h6 className="footer__title text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                E-learning
              </h6>
              <p>
                Người học trên khắp thế giới đang bắt đầu sự nghiệp mới, thăng
                tiến trong các lĩnh vực của họ và làm phong phú thêm cuộc sống
                của họ.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="footer__title_middle text-uppercase fw-bold mb-4">
                Khoá học
              </h6>
              <p>
                <a href="#" className="text-reset style__link_a">
                  Angular
                </a>
              </p>
              <p>
                <a href="#" className="text-reset style__link_a">
                  React
                </a>
              </p>
              <p>
                <a href="#" className="text-reset style__link_a">
                  Vue
                </a>
              </p>
              <p>
                <a href="#" className="text-reset style__link_a">
                  Laravel
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="footer__title_middle text-uppercase fw-bold mb-4">
                Liên kết
              </h6>
              <p>
                <a href="#" className="text-reset style__link_a">
                  Học phí
                </a>
              </p>
              <p>
                <a href="#" className="text-reset style__link_a">
                  Liên hệ
                </a>
              </p>
              <p>
                <a href="#" className="text-reset style__link_a">
                  Về chúng tôi
                </a>
              </p>
              <p>
                <a href="#" className="text-reset style__link_a">
                  Trợ giúp
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text__hover">
              {/* Links */}
              <h6 className="footer__title text-uppercase fw-bold mb-4">
                Liên hệ
              </h6>
              <p>
                <a className="text-reset style__link_a" href="">
                  <i className="fas fa-home me-3" /> Hồ Chí Minh, Quận 7, Việt
                  Nam
                </a>
              </p>
              <p>
                <a className="text-reset style__link_a" href="">
                  <i className="fas fa-envelope me-3" />
                  elearning@example.com
                </a>
              </p>
              <p>
                <a className="text-reset style__link_a" href="">
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </a>
              </p>
              <p>
                <a className="text-reset style__link_a" href="">
                  <i className="fas fa-print me-3" /> + 01 234 567 89{" "}
                </a>
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-4 bg__footer"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Elearning.com.vn
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}
