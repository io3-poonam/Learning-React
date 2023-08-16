import React,{useState} from "react";
import "./style.css"
import MinistryLogo from "./image/ministry-nic-logo.png";
import ParivahanLogo from "./image/parivahan-logo.png";
const Header=()=>{
    let currDate=new Date().toLocaleDateString()
    let newTime=new Date(). toLocaleTimeString()
    const[CurrTime, setCurrTime]=useState(newTime)
       const UpdateTime=()=>{
 newTime=new Date(). toLocaleTimeString()
        setCurrTime(newTime)
    
    }
setInterval(UpdateTime,1000)
    return(<>
   {/* --- header start -- */}
    <header>
        <div className="main-header">
            <div className="header-div-1">
                <img src={MinistryLogo} alt="ministry-nic-logo"/>
            </div>
            <div className="header-div-1">
                <img src={ParivahanLogo}alt="ministry-nic-logo"/>
            </div>
            <div className="header-div-1">
                <div className="para-div">
                    {/* <strong> */}
                        <p>Date :
                    {/* </strong>  */}
                    <span className="span-color"> {currDate} </span></p>
                    {/* <strong> */}
                        <p>Time :
                    {/* </strong>  */}
                    <span className="span-color">{CurrTime}</span></p>
                </div>
                <label for="lang"></label>
                <strong>Language</strong>
                <select id="lang">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Tamil</option>
                </select>
                <button className="btn">Change Status</button>
            </div>
            <div className="header-div-1">
                <div className="para1-div">
                    <p>A<sup>-</sup></p>
                    <p>A<sup></sup></p>
                    <p>A<sup>+</sup></p>
                </div>
                <button className="btn-2">Login</button>
            </div>
        </div>
        <h2 className="heading-first">TRANSPORT DEPARTMENT, GOVERNMENT OF PUNJAB</h2>
    </header>
    {/* -- header end -- */}
    </>)
}
export default Header;