import React from "react";
import { Route, Redirect } from "react-router-dom";
// import  BubblePage from './BubblePage';
import './Style.css';

// ...rest = rest operator
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        // this area of the code is where you'll edit
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
