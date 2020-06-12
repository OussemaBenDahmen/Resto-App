import React from "react";
import LandingImage from "./LandingImage";
import HotFoodSection from "./HotFoodSection";
import MenuList from "./MenuList";
export const MainPage = () => {
  return (
    <div className="MainPage">
      <LandingImage />
      <HotFoodSection />
      <MenuList />
    </div>
  );
};

export default MainPage;
