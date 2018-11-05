import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component = null, ...rest }) => {
  const { isLogin = null } = rest;
  const thisRender = props => {
    const isAuth = isLogin;
    console.log(isAuth);
    if (!isAuth) {
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
