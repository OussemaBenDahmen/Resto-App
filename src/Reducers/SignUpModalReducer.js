const SignUpModalReducer = (state = false, action) => {
  if (action.type === "OPEN_SIGNUP_MODAL") {
    return (state = true);
  }
  if (action.type === "CLOSE_SIGNUP_MODAL") {
    return (state = false);
  }
  return state;
};
export default SignUpModalReducer;
