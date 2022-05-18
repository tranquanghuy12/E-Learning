import React,{ Fragment } from "react";
import { Route } from "react-router-dom";
import Review from "../../components/Review/Review";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";


export const HomeTemplate = (props) => {
  //path,exact,Component
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        //props.location, props.history, props.match
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
