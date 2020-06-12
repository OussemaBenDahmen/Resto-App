import React, { useSelector, useState, useEffect } from "react";

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

  return (
    <div className="OrdersList">
      <div className="OrderListCard">
        <h2>Your Orders are:</h2>
        {Orders.map((el) => (
          <OrderedFoodItem Food={el} key={el.id} />
        ))}
        <span>
          <label htmlFor="Price">Total Price: </label>
          <input type="text" name="Price" value={Orders.length} />
         
        </span>
      </div>
    </div>
  );
};

export default OdersList;
