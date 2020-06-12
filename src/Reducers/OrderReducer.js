let OrderReducer = (state = [], action) => {
  if (action.type === "ORDER") {
    return [...state, action.payload];
  }
  return state;
};
export default OrderReducer;
