import React from "react";
import { Route, Redirect } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...restProps }) => {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <Route
      {...restProps}
      component={(props) =>
        user && user.email ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
