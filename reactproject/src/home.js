import React from "react";
import { useNavigate } from "react-router-dom";
// import Xyz from "./component/xyz/xyz";
// import { Outlet } from "react-router-dom";

const Home = () => {
  const Navigate=useNavigate()
const goToAbout=()=>{
  Navigate("/about")
}
  return (
    <>
      <h1>Hello, This is my Home</h1>
      {/* <Xyz/> */}
      <h1>Home page only</h1>
      <button onClick={()=>goToAbout()}>About Page</button>
      {/* <Outlet/> */}
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
