import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.scss";
export default function PageNotFound() {
  return (
    <>
      <div className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-12 col-sm-offset-1 text-center">
                <div className={`${styles.four_zero_four_bg}`}>
                  <h1 className={`${styles.h1Size}`}>404</h1>
                </div>
                <div className={`${styles.content_box_404}`}>
                  <h3 className={`${styles.h3Size}`}>Không tìm thấy</h3>
                  <p className={`${styles.pSize}`}>
                    Thật không may, địa chỉ URL bạn yêu cầu không được tìm thấy
                  </p>
                  <Link className={`${styles.a_page_not_found}`} to="/">
                    Về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
