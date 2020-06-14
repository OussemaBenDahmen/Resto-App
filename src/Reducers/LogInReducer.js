const LogInReducer = (state = false, action) => {
  if (action.type === "CONNECT") {
    return (state = true);
  }
  if (action.type === "LOGOUT") {
    return (state = false);
  }
  return state;
};
export default LogInReducer;
