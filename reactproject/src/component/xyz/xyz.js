import React from "react";
import { NavLink } from "react-router-dom";
const Xyz=()=> {
  return (
    <>
    {/* <h1>Hello, This is my Contact</h1> */}
    <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Xyz;
