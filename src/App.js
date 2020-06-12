import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { GetFoodListFromApi, GetUserFromApi } from "./ApiRequests/ApiRequests";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/ReusableComponents/Navbar";
import OrdersList from "./Components/OrdersList/OrdersList";
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserFromApi());
    dispatch(GetFoodListFromApi());
  }, []);

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
            <Route path="/Orders">
              <OrdersList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
