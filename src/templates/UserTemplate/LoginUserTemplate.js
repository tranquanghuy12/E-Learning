import { Layout } from "antd";
import React from "react";
import { Route } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const LoginUserTemplate = (props) => {
  let { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Layout>
              <Sider
                width={window.innerWidth / 2}
                style={{
                  backgroundImage: "url(https://picsum.photos/2000)",
                  height: window.innerHeight,
                  width: "100%",
                }}
              ></Sider>
              <Layout>
                <Component {...propsRoute} />
              </Layout>
            </Layout>
          </>
        );
      }}
    />
  );
};

export default LoginUserTemplate;
