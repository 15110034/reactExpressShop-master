import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import LoadingCompoment from './components/LoadingCompoment';
import PrivateRouteAdmin from './PrivateRouteAdmin';

const AsyncHome = Loadable({
  loader: () => import('./components/pages/newHomePage/NewHomePage'),
  loading: LoadingCompoment,
});

const AsyncProduct = Loadable({
  loader: () => import('./components/pages/Product/Product'),
  loading: LoadingCompoment,
});

const AsyncLoginPage = Loadable({
  loader: () => import('./components/pages/LoginPage'),
  loading: LoadingCompoment,
});

const AsyncAccountPage = Loadable({
  loader: () => import('./components/pages/User/AccountPage/AccountPage'),
  loading: LoadingCompoment,
});
const AsyncUserInfoPage = Loadable({
  loader: () => import('./components/pages/User/UserInformation/UserInfoPage'),
  loading: LoadingCompoment,
});
const AsyncUserOrdersPage = Loadable({
  loader: () => import('./components/pages/User/UserOrder/UserOrders'),
  loading: LoadingCompoment,
});

const AsyncRegisterPage = Loadable({
  loader: () => import('./components/pages/RegisterPage'),
  loading: LoadingCompoment,
});
const AsyncCartPage = Loadable({
  loader: () => import('./components/pages/CartPage/CartPage'),
  loading: LoadingCompoment,
});
const AsyncCheckoutPage = Loadable({
  loader: () => import('./components/pages/checkOut/CheckoutPage'),
  loading: LoadingCompoment,
});
const AsyncCategoryPage = Loadable({
  loader: () => import('./components/pages/Category/CategoryPage'),
  loading: LoadingCompoment,
});
const AsyncDashBoardPage = Loadable({
  loader: () => import('./components/pages/Dashboard/DashBoardPage'),
  loading: LoadingCompoment,
});

class AppRoutes extends PureComponent {
  render() {
    const { location } = this.props;

    return (
      <Switch location={location}>
        <Route
          location={location}
          path="/login"
          exact
          component={AsyncLoginPage}
        />
        <Route
          location={location}
          path="/register"
          exact
          component={AsyncRegisterPage}
        />
        <Route
          location={location}
          path="/cart"
          exact
          component={AsyncCartPage}
        />
        <Route
          location={location}
          path="/checkout"
          component={AsyncCheckoutPage}
        />

        <Route
          location={location}
          path="/category"
          exact
          component={AsyncCategoryPage}
        />
        <Route
          location={location}
          path="/category/search/:searchvalue"
          exact
          component={AsyncCategoryPage}
        />
        <Route
          location={location}
          path="/category/:page"
          exact
          component={AsyncCategoryPage}
        />
        <Route
          location={location}
          path="/flowers/event/:typeevent/:page"
          exact
          component={AsyncCategoryPage}
        />
        <Route
          location={location}
          path="/product/:id"
          component={AsyncProduct}
        />
        <Route
          location={location}
          path="/account"
          component={AsyncAccountPage}
        />
        <Route
          location={location}
          path="/userinfo"
          component={AsyncUserInfoPage}
        />
        <Route
          location={location}
          path="/userorders"
          component={AsyncUserOrdersPage}
        />

        <PrivateRouteAdmin
          location={location}
          path="/dashboard"
          component={AsyncDashBoardPage}
        />

        <Route location={location} path="/" exact component={AsyncHome} />
        <Route location={location} component={AsyncHome} />
      </Switch>
    );
  }
}

export default AppRoutes;
