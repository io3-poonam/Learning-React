import React from "react";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/about/id=1">About </NavLink>
          </li>
          <li>
            <NavLink to="/services">Services </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MainHeader;
