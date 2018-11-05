import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component = null, ...rest }) => {
  const thisRender = props => {
    const { isLogin = null } = rest;
    if (!isLogin) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      );
    }
    return <Component {...props} />;
  };
  return <Route {...rest} render={thisRender} />;
};
const mapStateToProps = ({ isLogin }) => ({
  isLogin
});

export default connect(mapStateToProps)(PrivateRoute);
