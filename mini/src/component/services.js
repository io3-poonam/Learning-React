import React from "react";
import Shopping from "./shopping";
import { useNavigate } from "react-router-dom";

const Services=()=>{
    const navigate=useNavigate()
    const backPage=()=>{
        navigate(-1)
    }
    return(<>
    
    <Shopping/>
    <button onClick={()=>backPage()}> Back Page</button>

    </>)
}
export default Services;
