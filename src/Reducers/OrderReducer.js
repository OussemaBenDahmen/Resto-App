let OrderReducer = (state = [], action) => {
  if (action.type === "ORDER" || action.type === "GET_ORDERS") {
    return [...state, action.payload];
  }
  return state;
};
export default OrderReducer;
