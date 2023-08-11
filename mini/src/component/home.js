import React from "react";
import Form from "./forms";
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const navigate=useNavigate()
    const AboutPage=()=>{
        navigate("/About")
    }
    return(<>
    <button onClick={()=>AboutPage()}> About Page</button>
    <Form/>
    {/* <MainHeader/> */}
 </>)
}
export default Home;
