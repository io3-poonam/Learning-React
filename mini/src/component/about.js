import React from "react";
// import MainHeader from "./MainHeader";
import Challenge from "./Challenge";
import { useNavigate,useSearchParams } from "react-router-dom";
const About=()=>{
    const navigate=useNavigate()
    const [searchParams,setSearchParams]=useSearchParams()
    const backPage=()=>{
        navigate(-1)
    }

    const ContactPage=()=>{
        navigate("/contact")
    }
    console.log('t',searchParams)
    return(<>
    <Challenge/>
<button onClick={()=>ContactPage()}>  Contact Page</button>

<button onClick={()=>backPage()}>  Back Page</button>
  </>)
}
export default About;
