import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddFoodToCartApi } from "../../ApiRequests/ApiRequests";

const FoodItem = (props) => {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  let User1 = user[0];
  console.log(User1);
  let Order = {
    name: props.Food.name,
    Price: props.Food.price,
    Qtty: 1,
    Client: User1.userName,
    ClientssAddress: User1.Address,
    image: props.Food.image,
  };

  return (
    <div className="FoodCard" key={props.Food.id}>
      <img src={props.Food.image} alt="" width="100px" />
      <p>{props.Food.name}</p>
      <p>{props.Food.price}</p>
      <button onClick={() => dispatch(AddFoodToCartApi(Order, props.Food.id))}>
        Order
      </button>
    </div>
  );
};

export default FoodItem;
