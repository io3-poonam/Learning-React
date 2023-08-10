import React from "react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import Xyz from "./component/xyz/xyz";
const Contact=()=> {
  const Navigate=useNavigate();
  
  const gotoHome=()=>{
    // alert("h")
    Navigate("/")
  }
  return (
    <>
    <h1>Hello, This is my Contact</h1>
    <button onClick={gotoHome}>Home Page</button>
    <button onClick={()=>Navigate(-1)}>Go Back</button>

    </>
  );
}

export default Contact;
