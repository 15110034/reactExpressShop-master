import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import isLoginAction from "./reduxx/actions/isLoginAction";
import getAuth from "./router/getAuth";
import RouterApp from "./router/Router";

class App extends Component {
  state = { loading: true };
  componentDidMount = async () => {
    const { dispatch } = this.props;

    await dispatch(isLoginAction());
    this.setState({ loading: false });
  };

  render() {
    if (this.state.loading) {
      return null;
    }
    return <RouterApp />;
  }
}

const mapStateToProps = ({ isLogin = "" }) => ({
  isLogin
});

export default connect(mapStateToProps)(App);
