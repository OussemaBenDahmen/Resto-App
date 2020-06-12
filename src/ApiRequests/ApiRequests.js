import axios from "axios";
import GetFoodListAction from "../Actions/GetFoodListAction";
import GetUserAction from "../Actions/GetUserAction";
import OrderAction from "../Actions/OrderAction";
import DeleteOrderAction from "../Actions/DeleteOrderAction";

export function GetUserFromApi() {
  return (dispatch) =>
    axios.get("http://localhost:4000/Users").then((res) => {
      dispatch(GetUserAction(res.data));
    });
}

export function GetFoodListFromApi() {
  return (dispatch) =>
    axios.get("http://localhost:4000/FoodList").then((res) => {
      dispatch(GetFoodListAction(res.data));
    });
}

export function AddFoodToCartApi(Order, index) {
  return (dispatch) =>
    axios.get("http://localhost:4000/Orders").then((res) => {
      if (res.data.every((el) => el.name != Order.name)) {
        axios.post(`http://localhost:4000/Orders`, Order);
      } else {
        let PrevQty;
        axios.get("http://localhost:4000/Orders").then((res) => {
          if (res.data.length > 1) {
            PrevQty = res.data[index - 1].Qtty;
          } else {
            PrevQty = res.data[0].Qtty;
          }
          Order.Qtty = PrevQty + 1;
          axios.put(`http://localhost:4000/Orders/${index}`, Order);
        });
      }
    });
}

export function DeleteOrderApi(index) {
  return (dispatch) =>
    axios.delete(`http://localhost:4000/Orders/${index}`).then((res) => {
      dispatch(DeleteOrderAction(index));
      window.location.reload(false);
    });
}

export function IncrementApi(Order, index) {
  return (dispatch) => {
    let PrevQty;
    axios.get("http://localhost:4000/Orders").then((res) => {
      if (res.data.length > 1) {
        PrevQty = res.data[index - 1].Qtty;
      } else {
        PrevQty = res.data[0].Qtty;
      }
      Order.Qtty = PrevQty + 1;
      axios
        .put(`http://localhost:4000/Orders/${index}`, Order)
        .then((res) => window.location.reload());
    });
  };
}
export function DecrementApi(Order, index) {
  return (dispatch) => {
    if (Order.Qtty > 1) {
      let PrevQty;
      axios.get("http://localhost:4000/Orders").then((res) => {
        if (res.data.length > 1) {
          PrevQty = res.data[index - 1].Qtty;
        } else {
          PrevQty = res.data[0].Qtty;
        }
        Order.Qtty = PrevQty - 1;
        axios
          .put(`http://localhost:4000/Orders/${index}`, Order)
          .then((res) => window.location.reload());
      });
    } else {
      axios
        .delete(`http://localhost:4000/Orders/${index}`)
        .then((res) => window.location.reload());
    }
  };
}
