import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import isLoginAction from "./reduxx/actions/isLoginAction";
import getAuth from "./router/getAuth";
import RouterApp from "./router/Router";

class App extends Component {
  state = {
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const email = await getAuth();
    const { dispatch } = this.props;

    await dispatch(isLoginAction(email));
    this.setState({ loading: false });
  }

  render() {
    if (!this.state.loading) {
      return <RouterApp />;
    }
    return null;
  }
}

const mapStateToProps = ({ isLogin = "" }) => ({
  isLogin
});

export default connect(mapStateToProps)(App);
