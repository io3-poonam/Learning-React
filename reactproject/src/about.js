import React from "react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import Xyz from "./component/xyz/xyz";
const About=()=> {
  const Navigate=useNavigate()
  const goToContact=()=>{
Navigate("/contact")
  }
  return (
    <>
    <h1>Hello, This is my About</h1>
    
    <button onClick={()=>goToContact()}>Contact Page</button>
    <button onClick={()=>Navigate(-1)}>Go Back</button>

    </>
  );
}

export default About;
