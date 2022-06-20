import { Layout } from "antd";
import React from "react";
import { Route } from "react-router-dom";
import './LoginUserTemplate.scss'

const LoginUserTemplate = (props) => {
  
  let { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Layout>
              {/* <Sider
                className="sider__style"
                width={width / 2}
                style={{
                  backgroundImage: `url(https://picsum.photos/${Math.round(
                    width / 2
                  )}/${height})`,
                  height: height,
                  width: "100%",
                }}
              ></Sider> */}
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
