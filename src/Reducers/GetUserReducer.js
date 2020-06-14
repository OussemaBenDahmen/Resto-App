let GetUserReducer = (
  state = {
    userName: "",
    Address: "",
    role: "",
  },
  action
) => {
  if (action.type === "GET_USER") {
    state = action.payload;
  }
  if (action.type === "LOGOUT") {
    return (state = {
      userName: "",
      Address: "",
      role: "",
    });
  }
  return state;
};
export default GetUserReducer;
