import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetOrdersApi } from "../../ApiRequests/ApiRequests";
import OrderedFoodItem from "../ReusableComponents/OrderedFoodItem";

export const ListOfOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOrdersApi());
  }, [dispatch]);
  const OrdersList = useSelector((state) => state.Order);
  console.log(OrdersList.flat("2"));
  const user = useSelector((state) => state.user);
  return (
    <div className="ListOfOrders">
      {OrdersList.flat("2").map((el) => (
        <OrderedFoodItem FoodItem={el} />
      ))}
    </div>
  );
};

export default ListOfOrders;
