import { Route } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

export const AdminTemplate = (props) => {
  //props => props.path = '/login' , props.component = LoginComponent

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div>
            
            <props.Component {...propsRoute} />
            
          </div>
        );
      }}
    />
  );
};
