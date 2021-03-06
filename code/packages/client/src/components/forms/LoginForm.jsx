// import Button, Checkbox, Col, Form, Icon, Input, Row component from antd
import { Button, Checkbox, Col, Form, Icon, Input, Row } from 'antd';

// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React from 'react';

// import connect function from react-redux
import { connect } from 'react-redux';

// import Route module from react-router-dom for router in react
import { Link, withRouter } from 'react-router-dom';

// import redux action
import isLoginAction from '../../reduxx/actions/isLoginAction';

// import error message module
import { errorMessage } from '../pages/utils/Message';

// create FormItem
const FormItem = Form.Item;

/**
 *
 *
 * @class NormalLoginForm
 * @extends {React.PureComponent}
 */
class NormalLoginForm extends React.PureComponent {
  /**
   *
   *
   */
  componentDidMount = () => {
    const { isLogin = false } = this.props;
    if (isLogin !== false) {
      const { history } = this.props;
      history.push('/');
    }
  };

  /**
   *
   *
   * @param {*} e
   */
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const bodyRes = {
          email: values.userName,
          password: values.password,
        };
        const res = await Axios.post('api/users/login', bodyRes).catch(
          error => {
            return console.log(error.response);
          }
        );
        if (!res) {
          return null;
        }
        if (res.status === 504) {
          errorMessage("Can't connect to server");
        }
        const {
          code = 0,
          msg = 'error not found please reload page and try again',
          data = {},
          token,
        } = res.data;
        console.log(msg, data, data.role);
        if (data.role === 'admin') {
          localStorage.setItem('token', `JWT ${token}`);
          localStorage.setItem('userid', data.userId);
          const { dispatch } = this.props;
          await dispatch(isLoginAction(code));

          // return this.props.history.push('/dashboard');
          window.location = '/dashboard';
        } else {
          if (code === 1) {
            localStorage.setItem('token', `JWT ${token}`);
            localStorage.setItem('userid', data.userId);
            const { dispatch } = this.props;
            await dispatch(isLoginAction(code));
            if (data.role === 'admin') {
              return this.props.history.push('/dashboard');
            } else {
              return (window.location.href = '/account');
              // return this.props.history.push('/');
            }
          }
        }

        return true;
      }
    });
  };

  /**
   *
   *
   * @returns
   * @memberof NormalLoginForm
   */
  render() {
    const { getFieldDecorator } = this.props.form;
    const { isAdmin = false } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username/Email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {isAdmin ? (
            <>
              <p>user:'admin@admin.com' password:'admin@admin.com'</p>
            </>
          ) : null}
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox style={isAdmin ? { display: 'none' } : {}}>
              Remember me
            </Checkbox>
          )}
          <a
            className="login-form-forgot"
            href="#0"
            style={isAdmin ? { display: 'none' } : {}}
          >
            Forgot password
          </a>
          <Row>
            <Col xs={24} lg={24}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '-webkit-fill-available' }}
              >
                Log in
              </Button>
            </Col>
          </Row>
          {isAdmin ? null : 'Or'}{' '}
          <Link
            to="/register"
            style={isAdmin ? { display: 'none' } : { color: 'blue' }}
          >
            Register now!
          </Link>
        </FormItem>
      </Form>
    );
  }
}

// Wrapped component to antd function
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

/**
 *
 *
 * @param {*} { isLogin }
 */
const mapStateToProps = ({ isLogin }) => ({
  isLogin,
});

// export component
export default withRouter(connect(mapStateToProps)(WrappedNormalLoginForm));
