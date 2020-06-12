let GetUserReducer = (state = [], action) => {
  if (action.type === "GET_USER") {
    state = action.payload;
  }

  return state;
};
export default GetUserReducer;
