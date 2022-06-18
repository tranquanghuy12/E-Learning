import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import './LoginUserTemplate.scss'
const { Header, Footer, Sider, Content } = Layout;
const LoginUserTemplate = (props) => {
  const [{ width, height }, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.onresize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  });
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
