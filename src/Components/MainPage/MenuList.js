import React, { useEffect } from "react";
import FoodItem from "../ReusableComponents/FoodItem";
import { useSelector, useDispatch } from "react-redux";
import { GetFoodListFromApi } from "../../ApiRequests/ApiRequests";
const MenuList = () => {
  const FoodList = useSelector((state) => state.FoodList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFoodListFromApi());
  }, [dispatch]);
  return (
    <div className="MenuList">
      {FoodList.map((el) => (
        <FoodItem Food={el} key={el.id} />
      ))}
    </div>
  );
};

export default MenuList;
