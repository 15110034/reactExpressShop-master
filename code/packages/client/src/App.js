import './App.css';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import getAuth from './components/getAuth';
import isLoginAction from './reduxx/actions/isLoginAction';
import AppRoutes from './Router';

const AsyncLoginPage = Loadable({
  loader: () => import("./components/pages/LoginPage"),
  loading: LoadingCompoment
});
const AsyncAccountPage = Loadable({
  loader: () => import("./components/pages/User/AccountPage/AccountPage"),
  loading: LoadingCompoment
});
const AsyncUserInfoPage = Loadable({
  loader: () => import("./components/pages/User/UserInformation/UserInfoPage"),
  loading: LoadingCompoment
});
const AsyncUserOrdersPage = Loadable({
  loader: () => import("./components/pages/User/UserOrder/UserOrders"),
  loading: LoadingCompoment
});
const AsyncRegisterPage = Loadable({
  loader: () => import("./components/pages/RegisterPage"),
  loading: LoadingCompoment
});
const AsyncCartPage = Loadable({
  loader: () => import("./components/pages/CartPage/CartPage"),
  loading: LoadingCompoment
});
const AsyncCheckoutPage = Loadable({
  loader: () => import("./components/pages/checkOut/CheckoutPage"),
  loading: LoadingCompoment
});
const AsyncCategoryPage = Loadable({
  loader: () => import("./components/pages/Category/CategoryPage"),
  loading: LoadingCompoment
});
const AsyncDashBoardPage = Loadable({
  loader: () => import("./components/pages/DashBoardPage"),
  loading: LoadingCompoment
});
/* cái này trong app render copy ra  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>*/

class App extends Component {
  async componentDidMount() {
    const email = await getAuth();
    const { dispatch } = this.props;
    await dispatch(isLoginAction(email));
  }

  render(location) {
    return (
      <Router>
        <>
          <Switch>
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
        </>
      </Router>
    );
  }
}

const mapStateToProps = ({ isLogin = '' }) => ({
  isLogin,
});

export default connect(mapStateToProps)(App);
