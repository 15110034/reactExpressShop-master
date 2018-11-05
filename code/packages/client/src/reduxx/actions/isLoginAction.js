import { LOGIN_CHANCE } from "./types";

const ChanceLogin = isLogin => ({
  type: LOGIN_CHANCE,
  isLogin
});

const isLoginAction = (email = null) => async (dispatch, getState) => {
  dispatch(ChanceLogin(email));
};

export default isLoginAction;
