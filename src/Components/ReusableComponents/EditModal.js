import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EditFoodApi } from "../../ApiRequests/ApiRequests";
export const EditModal = (props) => {
  const [Image, setImage] = useState(props.FoodItem.image);
  const [Name, setName] = useState(props.FoodItem.name);
  const [Price, setPrice] = useState(props.FoodItem.price);
  let dispatch = useDispatch();
  return (
    <form className="Modal">
      <div className="Food">
        <img src={props.FoodItem.image} alt="" width="40%" />
        <span>
          <p>{props.FoodItem.name}</p>
          <p>{props.FoodItem.price}</p>
        </span>
      </div>
      <input
        type="text"
        placeholder="Image Link"
        defaultValue={props.FoodItem.image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        defaultValue={props.FoodItem.name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        defaultValue={props.FoodItem.price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={() => props.CloseModal()}>Cancel</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            EditFoodApi({
              id: props.FoodItem.id,
              image: Image,
              name: Name,
              price: Price,
            })
          );
        }}
      >
        Change
      </button>
    </form>
  );
};

export default EditModal;
