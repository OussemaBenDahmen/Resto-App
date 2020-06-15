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
  return (
    <div className="ListOfOrders">
      {OrdersList.map((el) => (
        <div>
          <h2>
            {el.map((el) => (
              <OrderedFoodItem FoodItem={el} />
            ))}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ListOfOrders;
