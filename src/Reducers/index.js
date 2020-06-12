import { combineReducers } from "redux";
import GetFoodListReducer from "./GetFoodListReducer";
import GetUserReducer from "./GetUserReducer";
import OrderReducer from "./OrderReducer";

let allReducer = combineReducers({
  FoodList: GetFoodListReducer,
  user: GetUserReducer,
  Order: OrderReducer,
});

export default allReducer;
