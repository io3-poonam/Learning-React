import React from "react";
// import MainHeader from "./MainHeader";
import Challenge from "./Challenge";
import { useNavigate } from "react-router-dom";
const About=()=>{
    const navigate=useNavigate()
    const backPage=()=>{
        navigate(-1)
    }
    const ContactPage=()=>{
        navigate("/contact")
    }
    return(<>
    <Challenge/>
<button onClick={()=>ContactPage()}>  Contact Page</button>

<button onClick={()=>backPage()}>  Back Page</button>
  </>)
}
export default About;
