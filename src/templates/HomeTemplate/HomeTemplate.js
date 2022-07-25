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
        //props.location, props.history, props.match
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header {...propsRoute} />
            <div style={{ flex: 1 }}>
              <Component {...propsRoute} />
            </div>
            <Footer {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
