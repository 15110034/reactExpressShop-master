import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import LoadingCompoment from "../components/LoadingCompoment";
import PrivateRoute from "./PrivateRoute";

const AsyncHome = Loadable({
  loader: () => import("../components/pages/HomePage"),
  loading: LoadingCompoment
});
const AsyncLoginPage = Loadable({
  loader: () => import("../components/pages/LoginPage"),
  loading: LoadingCompoment
});
const AsyncRegisterPage = Loadable({
  loader: () => import("../components/pages/RegisterPage"),
  loading: LoadingCompoment
});
const AsyncCartPage = Loadable({
  loader: () => import("../components/pages/CartPage"),
  loading: LoadingCompoment
});
const AsyncCheckoutPage = Loadable({
  loader: () => import("../components/pages/checkOut/CheckoutPage"),
  loading: LoadingCompoment
});
const AsyncCategoryPage = Loadable({
  loader: () => import("../components/pages/Category/CategoryPage"),
  loading: LoadingCompoment
});
const AsyncDashBoardPage = Loadable({
  loader: () => import("../components/pages/DashBoardPage"),
  loading: LoadingCompoment
});

const RouterApp = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/login" exact component={AsyncLoginPage} />
          <Route path="/register" exact component={AsyncRegisterPage} />
          <Route path="/cart" exact component={AsyncCartPage} />
          <Route path="/checkout" exact component={AsyncCheckoutPage} />
          <Route path="/category" exact component={AsyncCategoryPage} />
          <PrivateRoute path="/dashboard" component={AsyncDashBoardPage} />
        </Switch>
      </>
    </Router>
  );
};

export default RouterApp;
