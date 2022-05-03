import { Route } from "react-router-dom";

export const AdminTemplate = (props) => {
  //props => props.path = '/login' , props.component = LoginComponent

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div className="text-center">
           
              <props.Component {...propsRoute} />
            
          </div>
        );
      }}
    />
  );
};
