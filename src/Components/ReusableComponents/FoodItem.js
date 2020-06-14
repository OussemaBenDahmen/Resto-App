import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddFoodToCartApi, DeleteFoodApi } from "../../ApiRequests/ApiRequests";
import EditModal from "./EditModal";

const FoodItem = (props) => {
  const [ModalShow, setModalShow] = useState(false);
  let CloseModal = () => {
    setModalShow(false);
  };

  let dispatch = useDispatch();

  let User = useSelector((state) => state.user);
  const isLogged = useSelector((state) => state.isLogged);
  let Order = {
    name: props.Food.name,
    Price: props.Food.price,
    Qtty: 1,
    Client: User.userName,
    ClientssAddress: User.Address,
    image: props.Food.image,
  };

  return (
    <div className="FoodCard" key={props.Food.id}>
      <img src={props.Food.image} alt="" width="100px" />
      <p>{props.Food.name}</p>
      <p>{props.Food.price} TND</p>
      {User.role === "admin" ? (
        <div>
          <button onClick={() => setModalShow(true)}>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/compose+draw+edit+write+icon-1320196706045580276.png"
              alt=""
              width="20px"
            />
          </button>
          <button onClick={() => dispatch(DeleteFoodApi(props.Food.id))}>
            X
          </button>
        </div>
      ) : null}
      {isLogged && (
        <button
          onClick={() => dispatch(AddFoodToCartApi(Order, props.Food.id))}
        >
          Order
        </button>
      )}
      {ModalShow ? (
        <EditModal FoodItem={props.Food} CloseModal={CloseModal} />
      ) : null}
    </div>
  );
};

export default FoodItem;
