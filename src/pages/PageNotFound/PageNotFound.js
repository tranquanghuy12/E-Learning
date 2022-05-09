import React from "react";
import Helmet from "react-helmet";
import styles from "./PageNotFound.module.css";
export default function PageNotFound() {
  return (
    <>
      <div className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <div className={`${styles.four_zero_four_bg}`}>
                  <h1 className={`${styles.h1Size}`}>404</h1>
                </div>
                <div className={`${styles.content_box_404}`}>
                  <h3 className={`${styles.h3Size}`}>Looks Like You're Lost</h3>
                  <p className={`${styles.pSize}`}>
                    The page you are looking for not available
                  </p>
                  <a className={`${styles.a_page_not_found}`} href="/">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
