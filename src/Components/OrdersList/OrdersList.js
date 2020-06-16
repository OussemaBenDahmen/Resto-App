import React, { useState, useEffect } from "react";

import axios from "axios";

import OrderedFoodItem from "../ReusableComponents/OrderedFoodItem";
import { useSelector, useDispatch } from "react-redux";
import { GetOrdersApi } from "../../ApiRequests/ApiRequests";

export const OdersList = () => {
  const dispatch = useDispatch();
  const [Orders, setOrders] = useState([]);
  const Client = useSelector((state) => state.user);
  let getOrders = () => {
    axios
      .get("http://localhost:4000/Orders")
      .then((res) => setOrders(res.data));
  };
  useEffect(() => {
    getOrders();
    // dispatch(GetOrdersApi());
  }, [dispatch]);
  return (
    <div className="OrdersList">
      <div className="OrderListCard">
        <h2>Your Orders are:</h2>
        {Orders.filter((el) => el.Client === Client.userName).map((el) => (
          <OrderedFoodItem Food={el} key={el.id} />
        ))}
        <span>
          <input type="text" name="Price" value={`Total Price: `}></input>
        </span>
      </div>
    </div>
  );
};

export default OdersList;
