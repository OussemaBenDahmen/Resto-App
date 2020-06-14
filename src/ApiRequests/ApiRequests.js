import axios from "axios";
import GetFoodListAction from "../Actions/GetFoodListAction";
import GetUserAction from "../Actions/GetUserAction";
import DeleteOrderAction from "../Actions/OrdersActions/DeleteOrderAction";
import LogInAction from "../Actions/LoginModalAction/LogInAction";
import LoginModalCloseAction from "../Actions/LoginModalAction/LoginModalCloseAction";
import SignUpAction from "../Actions/SignUpModalAction/SignUpAction";
import SignUpModalCloseAction from "../Actions/SignUpModalAction/SignupModalClose";

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
  return () =>
    axios.get("http://localhost:4000/Orders").then((res) => {
      if (res.data.every((el) => el.name !== Order.name)) {
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
    axios.delete(`http://localhost:4000/Orders/${index}`).then(() => {
      dispatch(DeleteOrderAction(index));
      window.location.reload(false);
    });
}

export function IncrementApi(Order, index) {
  return () => {
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
        .then(() => window.location.reload());
    });
  };
}
export function DecrementApi(Order, index) {
  return () => {
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
          .then(() => window.location.reload());
      });
    } else {
      axios
        .delete(`http://localhost:4000/Orders/${index}`)
        .then(() => window.location.reload());
    }
  };
}

export function EditFoodApi(Food) {
  return () =>
    axios
      .patch(`http://localhost:4000/FoodList/${Food.id}`, Food)
      .then(() => window.location.reload(false));
}
export function DeleteFoodApi(index) {
  return () =>
    axios
      .delete(`http://localhost:4000/FoodList/${index}`)
      .then(() => window.location.reload(true));
}
export function LogInApi(User) {
  return (dispatch) =>
    axios.get("http://localhost:4000/Users").then((res) => {
      if (
        res.data.some(
          (el) => el.userEmail === User.Email && el.password === User.Password
        )
      ) {
        dispatch(LogInAction(User));
        dispatch(LoginModalCloseAction());
        axios.get("http://localhost:4000/Users").then((res) => {
          let ConnectedUser = res.data.filter(
            (el) => el.userEmail === User.Email && el.password === User.Password
          );
          console.log(ConnectedUser);
          dispatch(GetUserAction(ConnectedUser[0]));
        });
      }
    });
}
export function SignUpApi(Client) {
  return (dispatch) =>
    axios.post("http://localhost:4000/Users", Client).then(() => {
      dispatch(SignUpAction());
      dispatch(SignUpModalCloseAction());
      dispatch(LogInAction());
      dispatch(GetUserAction(Client));
    });
}
