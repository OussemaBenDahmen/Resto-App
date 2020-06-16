import React from "react";
import { useDispatch } from "react-redux";
import { DeleteOrderApi } from "../../ApiRequests/ApiRequests";
import { IncrementApi } from "../../ApiRequests/ApiRequests";
import { DecrementApi } from "../../ApiRequests/ApiRequests";
export const OrderedFoodItem = (props) => {
  let dispatch = useDispatch();
  //let user = useSelector((state) => state.user);

  return (
    <div className="FoodCard OrderedFood" key={props.FoodItem.id}>
      <img src={props.FoodItem.image} alt="" width="100px" />
      <p>{props.FoodItem.name}</p>
      <p>{props.FoodItem.Price} TND</p>
      <label htmlFor="Qtty">Quantity</label>
      <input
        type="text"
        name="Qtty"
        value={props.FoodItem.Qtty}
        style={{ width: "30px", textAlign: "center" }}
      />
      <button onClick={() => dispatch(IncrementApi(props.Food, props.Food.id))}>
        +
      </button>
      <button onClick={() => dispatch(DecrementApi(props.Food, props.Food.id))}>
        -
      </button>
      <button onClick={() => dispatch(DeleteOrderApi(props.Food.id))}>X</button>
    </div>
  );
};
export default OrderedFoodItem;
