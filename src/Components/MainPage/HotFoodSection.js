import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "../ReusableComponents/FoodItem";

const HotFoodSection = () => {
  let TopFood = useSelector((state) => state.FoodList);
  return (
    <div className="HotFoodSection">
      <h2>Top Meals</h2>
      <div>
        {TopFood.filter((el) => el.rating === "Loved").map((el) => (
          <FoodItem Food={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default HotFoodSection;
