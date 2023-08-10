import React from "react";
// import { NavLink } from "react-router-dom";
import Xyz from "./component/xyz/xyz";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <h1>Hello, This is my Home</h1> */}
      <Xyz/>
      {/* <h1>Home page only</h1> */}
      <Outlet/>
      {/* <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul> */}
    </>
  );
};

export default Home;
