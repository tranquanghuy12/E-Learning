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
          <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />

            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
