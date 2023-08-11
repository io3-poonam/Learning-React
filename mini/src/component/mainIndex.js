import React from "react";
import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";
const MainIndex=()=>{
    return(<>
    <MainHeader/>
    <Outlet/>
    </>)
}
export default MainIndex;
