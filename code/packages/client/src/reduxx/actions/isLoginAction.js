import { LOGIN_CHANCE } from "./types";
import getAuth from "../../router/getAuth";

const ChanceLogin = isLogin => ({
  type: LOGIN_CHANCE,
  isLogin
});

const isLoginAction = () => async (dispatch, getState) => {
  const email = await getAuth();
  dispatch(ChanceLogin(email));
};

export default isLoginAction;
