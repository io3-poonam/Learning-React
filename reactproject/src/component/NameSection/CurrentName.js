import React, { useState } from "react";
import './current.css';

const CurrentName=()=>{
    const [show,setShow]=useState(false);
    const [changeBtnName,setChangeBtnName]=useState('Check');

    const showHide=()=>{
        if( show == true){
        setShow(false);
        setChangeBtnName('HideDetails')
        // console.log('showDetails', showHide)
    }
    else{
        setShow(true)
        setChangeBtnName('AgainClickDetails')
    }
}

    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth();
    const currDay = new Date().getDay();
        return(<>
    <div className="" style={{background:'gray', width:"40%", margin:"auto"}}>
       <button className="btn-Name" onClick={showHide}>{changeBtnName}</button>
      {show && (  <p className="paraCurrent"><strong>Current Time :</strong> {currTime}</p>)}
       {show && ( <p className="paraCurrent"><strong>Current Date :</strong> {currDate}</p>)}
       {show && ( <p className="paraCurrent"><strong>Current year :</strong> {currYear}</p>)}
       {show && ( <p className="paraCurrent"><strong>Current Month :</strong> {currMonth}</p>)}
       {show && ( <p className="paraCurrent"><strong>Current Day :</strong> {currDay}</p>)}
    </div>
    </>)
}
export default CurrentName;