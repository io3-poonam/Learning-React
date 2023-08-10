import React from "react";
import CountApp from "./CountSecond";
import Count from "./Count"
// import Header from "../Header";
import { Outlet } from "react-router-dom";

const CountMain=()=>{

    return(<>
     <Outlet/>
     {/* <Header/> */}
    <Count/>
    <CountApp/>
    </>)
}
export default CountMain;