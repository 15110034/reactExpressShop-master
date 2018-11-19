import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getAuth from "./components/getAuth";

const auth = {
  async getAuth() {
    const res = await getAuth();
    console.log(res);
    return res;
  }
};

const PrivateRouteAdmin = ({ component: Component = null, ...rest }) => {
  const { isLogin = null } = rest;

  return (
    <Route
      {...rest}
      render={props =>
        auth.getAuth === 1 && isLogin === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
const mapStateToProps = ({ isLogin }) => ({
  isLogin
});

export default connect(mapStateToProps)(PrivateRouteAdmin);
