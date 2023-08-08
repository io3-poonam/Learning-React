import React from "react";
import CountApp from "./CountSecond";
import Count from "./Count"
import {  Link, useNavigate } from "react-router-dom";

const CountMain=()=>{
    const navigate = useNavigate();
    const NavigateToCountPage = () => {
      navigate("/count");
      console.log("NavigateToCountPage");
    };
    return(<>
     <ul className="Items">
     
     <li onClick={NavigateToCountPage}  className="nav-Items">
     <Link className="nav-Items-links" to="/count">  Count</Link>
     </li></ul>
    <Count/>
    <CountApp/>
    </>)
}
export default CountMain;