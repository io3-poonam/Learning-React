import React from "react";
import './style.css'
import logo from"./image/images.png"
const Header=()=>{
    return(<>
    <div className="header-1">
        <img src={logo} alt="google keep" width={70} height={60}/>
        <h1>Keep</h1>
    </div>
    </>)
}
export default Header;