import React from "react";
import FoodItem from "../ReusableComponents/FoodItem";
import { useSelector } from "react-redux";
const MenuList = () => {
  let FoodList = useSelector((state) => state.FoodList);
  return (
    <div className="MenuList">
      {FoodList.map((el) => (
        <FoodItem Food={el} key={el.id} />
      ))}
    </div>
  );
};

export default MenuList;
