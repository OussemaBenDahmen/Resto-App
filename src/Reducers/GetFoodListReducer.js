let GetFoodListReducer = (state = [], action) => {
  if (action.type === "GET_LIST") {
    state = action.payload;
  }
  return state;
};
export default GetFoodListReducer;
