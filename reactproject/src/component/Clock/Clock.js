import React, { useState } from "react";
import './clock.css';
const Clock=()=>{
    let Time=new Date().toLocaleTimeString()
    let newTime=new Date(). toLocaleTimeString()
    const[cTime,setTimeN]=useState(Time)
    const[CurrTime, setCurrTime]=useState(newTime)

    const click=()=>{
     Time=new Date().toLocaleTimeString()
     setTimeN(Time)
        
    }
console.log('j',CurrTime)
    const UpdateTime=()=>{
        // console.log('clock')// check click
 newTime=new Date(). toLocaleTimeString()

        setCurrTime(newTime)
    }
    // automative run setInterval events
setInterval(UpdateTime,1000) 

    return(<>
    <div className="clockButton">
    <h1 className="clockHea?ding">Current Time : {cTime}</h1>
    <button className="clockBtn" onClick={click}>Get Time</button>
    </div>
    <div className="clockButtonDigital">
    <h2 className="clockHeadingDigital">{CurrTime} Digital Time</h2>
    <button className="clockBtn" onClick={UpdateTime}>Get Time</button>

    </div>
    </>)
}
export default Clock;