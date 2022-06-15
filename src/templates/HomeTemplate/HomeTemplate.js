import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";

export const HomeTemplate = (props) => {
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <div style={{ flex: 1 }}>
              <Header {...propsRoute} />
              <Component {...propsRoute} />
            </div>
            <Footer {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
