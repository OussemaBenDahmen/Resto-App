const LoginModalReducer = (state = false, action) => {
  if (action.type === "CLOSE_LOGIN_MODAL") {
    return (state = false);
  }
  if (action.type === "OPEN_LOGIN_MODAL") {
    return (state = true);
  }
  return state;
};
export default LoginModalReducer;
