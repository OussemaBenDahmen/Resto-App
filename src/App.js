import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { GetFoodListFromApi, GetUserFromApi } from "./ApiRequests/ApiRequests";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/ReusableComponents/Navbar";
import OrdersList from "./Components/OrdersList/OrdersList";
import LogIn from "./Components/LogIn-SignUp/LogIn";
import SignUp from "./Components/LogIn-SignUp/SignUp";
function App() {
  const LogInModalShow = useSelector((state) => state.isLoginModalOpen);
  const SignUpModalShow = useSelector((state) => state.isSignupModalOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFoodListFromApi());
  });

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
              <Route path="/OrderList">OrderList</Route>
              <Route path="/AddFood">AddFood</Route>
              <OrdersList />
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
