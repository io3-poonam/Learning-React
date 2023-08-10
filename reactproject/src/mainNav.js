import React from "react";
import Xyz from "./component/xyz/xyz";
import { Outlet } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <Xyz/>
      <Outlet/>
    </>
  );
};

export default MainNav;
