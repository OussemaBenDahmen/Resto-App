import React, { useState } from "react";

import { AddFoodApi } from "../../ApiRequests/ApiRequests";
import { useDispatch } from "react-redux";

export const AddFoodForm = () => {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Rating, setRating] = useState("");
  const [Price, setPrice] = useState("");
  const [Image, setImage] = useState(
    "https://www.amityinternational.com/wp-content/uploads/2019/02/product-placeholder.jpg"
  );

  return (
    <div className="AddFormBackground">
      <form className="AddFoodForm">
        <input
          className="FormInput"
          type="text"
          placeholder="Food Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="FormInput"
          type="text"
          placeholder="Food Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="FormInput"
          type="text"
          placeholder="Food Rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          className="FormInput"
          type="text"
          placeholder="Food Price"
          value={Price}
          onChange={(e) => {
            /^\d+\.?\d*$/g.test(e.target.value)
              ? setPrice(e.target.value)
              : setPrice("");
          }}
        />
        <input
          className="FormInput"
          type="text"
          placeholder="Food Image-link"
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              AddFoodApi({
                name: Name,
                category: Category,
                rating: Rating,
                price: Price,
                image: Image,
              })
            );
          }}
        >
          Add To FoodList
        </button>
      </form>
    </div>
  );
};

export default AddFoodForm;
