import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../Logos/LogoWhite.png";

const Navbar = () => {
  return (
    <div className="NavbarDiv">
      <img src={LogoWhite} alt="" width="100px" />
      <div className="Navlinks">
        <Link to={"/"} className="NavLink">
          Home
        </Link>
        <Link to={"/Fav"} className="NavLink">
          Favourites
        </Link>
        <Link to={"/Orders"} className="NavLink">
          Card
        </Link>
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
      <div className="NavButtons">
        <button className="NavButton">Sign Up</button>
        <button className="NavButton">Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
