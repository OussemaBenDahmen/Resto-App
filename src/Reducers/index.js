import { combineReducers } from "redux";
import GetFoodListReducer from "./GetFoodListReducer";
import GetUserReducer from "./GetUserReducer";
import OrderReducer from "./OrderReducer";
import LogInReducer from "./LogInReducer";
import LoginModalReducer from "./LoginModalReducer";
import SignUpModalReducer from "./SignUpModalReducer";

let allReducer = combineReducers({
  FoodList: GetFoodListReducer,
  user: GetUserReducer,
  Order: OrderReducer,
  isLogged: LogInReducer,
  isLoginModalOpen: LoginModalReducer,
  isSignupModalOpen: SignUpModalReducer,
});

export default allReducer;
