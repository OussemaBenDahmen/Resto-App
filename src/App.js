import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GetFoodListFromApi,
  RefrechPersistLogin,
} from "./ApiRequests/ApiRequests";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/ReusableComponents/Navbar";
import OrdersList from "./Components/OrdersList/OrdersList";
import LogIn from "./Components/LogIn-SignUp/LogIn";
import SignUp from "./Components/LogIn-SignUp/SignUp";
import AddFoodForm from "./Components/AddFoodForm";
import ListOfOrders from "./Components/ListOfOrders/ListOfOrders";
function App() {
  const LogInModalShow = useSelector((state) => state.isLoginModalOpen);
  const SignUpModalShow = useSelector((state) => state.isSignupModalOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFoodListFromApi());
    let User = localStorage.getItem("Connected");
    dispatch(RefrechPersistLogin(User));
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="AppBody">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/Fav"></Route>
            <Route path="/Card">
              <OrdersList />
            </Route>
            <Route path="/OrderList">
              <ListOfOrders />
            </Route>
            <Route path="/AddFood">
              <AddFoodForm />
            </Route>
          </Switch>
        </div>
      </Router>
      {LogInModalShow ? <LogIn /> : null}
      {SignUpModalShow ? <SignUp /> : null}
    </div>
  );
}

export default App;
