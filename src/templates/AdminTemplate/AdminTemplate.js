import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../HomeTemplate/Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
// import Header from "./Layouts/Header/Header";
import SideBar from "./Layouts/SideBar/SideBar";
export const AdminTemplate = (props) => {
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
            <Header {...propsRoute} />

            <div className="row ml-0 mr-0" style={{ flex: 1, marginTop: 126 }}>
              <div className="col-lg-2">
                <SideBar />
              </div>
              <div className="col-lg-10">
                <Component {...propsRoute} />
              </div>
            </div>

            <Footer {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
