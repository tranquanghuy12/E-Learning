import { Fragment } from "react";
import { Route } from "react-router-dom";
export const AdminTemplate = (props) => {
  const { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>            
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
