import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../Logos/LogoWhite.png";
import { useSelector, useDispatch } from "react-redux";
import LoginModalOpenAction from "../../Actions/LoginModalAction/LoginModalOpenAction";
import SignUpModalShowAction from "../../Actions/SignUpModalAction/SignupModalOpen";
import LogOutAction from "../../Actions/LoginModalAction/LogOutAction";

const Navbar = () => {
  const isLogged = useSelector((state) => state.isLogged);
  let User = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="NavbarDiv">
      <img src={LogoWhite} alt="" width="100px" />
      <div className="Navlinks">
        <Link to={"/"} className="NavLink">
          Home
        </Link>
        {User.role === "admin" ? (
          <div>
            {" "}
            <Link to={"/OrderList"} className="NavLink">
              OrderList
            </Link>
            <Link to={"/AddFood"} className="NavLink">
              AddFood
            </Link>
          </div>
        ) : User.role === "Client" ? (
          <div>
            <Link to={"/Fav"} className="NavLink">
              Favourites
            </Link>
            <Link to={"/Card"} className="NavLink">
              Card
            </Link>
          </div>
        ) : null}
      </div>
      <div className="SearchBarandButton">
        <input type="text" name="Search" className="SearchInput" />
        <button className="NavButton">
          <img
            className="SearchButtonIcon"
            src={"https://i.ya-webdesign.com/images/search-icon-png-2.png"}
            alt=""
          />
        </button>
      </div>
      {isLogged ? (
        <div className="NavButtons">
          <button
            className="NavButton"
            onClick={() => dispatch(LogOutAction())}
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="NavButtons">
          <button
            className="NavButton"
            onClick={() => dispatch(SignUpModalShowAction())}
          >
            Sign Up
          </button>
          <button
            className="NavButton"
            onClick={() => {
              dispatch(LoginModalOpenAction());
            }}
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
