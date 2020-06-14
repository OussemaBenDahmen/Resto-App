import React, { useState, useEffect } from "react";

import axios from "axios";

import OrderedFoodItem from "../ReusableComponents/OrderedFoodItem";

export const OdersList = () => {
  const [Orders, setOrders] = useState([]);

  let getOrders = () => {
    axios
      .get("http://localhost:4000/Orders")
      .then((res) => setOrders(res.data));
  };
  useEffect(() => {
    getOrders();
  }, []);

  console.log(Orders);
  return (
    <div className="OrdersList">
      <div className="OrderListCard">
        <h2>Your Orders are:</h2>
        {Orders.map((el) => (
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
