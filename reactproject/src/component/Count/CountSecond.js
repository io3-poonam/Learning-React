import React, { useState } from "react";
import './CountSecond.css';
const CountApp=()=>{
    const [countSec,setCountSec]=useState(0) // exp :- (100)
const handleIncrease=()=>{
    setCountSec(countSec + 1)
    console.log("click");
}
const handleDecrease=()=>{
    if(countSec<=0){
        setCountSec(0)
        // console.log('in case less than 0')
    }
    else{
    setCountSec(countSec-1)
        // console.log('else')
    }
    // console.log('click');
}
// -----------5 add --------------
 const handleFiveAdd=()=>{
setCountSec(countSec+5)
 }
// -----5 Less---------
const handleFiveLess=()=>{
    if(countSec < 5){
        setCountSec(countSec)
    }
    else{
        setCountSec(countSec-5)
    }
}
    // ---------100 Add-------------
    const handleTwentyFiveAdd=()=>{
        setCountSec(countSec+25);
    }
    // --------------25 add--------
    const handleTwentyFiveLess=()=>{
        if(countSec< 25){
            setCountSec(countSec)
        }
        else{
    
            setCountSec(countSec-25)
        }
    }
        // ---------100 Add-------------
        const handleHundredAdd=()=>{
            setCountSec(countSec+100);
        }
// -------100 less---------
const handleHundredLess=()=>{
    if(countSec< 100){
        setCountSec(countSec)
    }
    else{

        setCountSec(countSec-100) /// problem
    }
}
const handleClear=()=>{

    setCountSec(0)
        console.log('clear')
    
    console.log('click');
}
// console.log('count', count)
    return<>
    <div className="count">
        <h1>Count {countSec}</h1>
        <button className="btn_count" onClick={handleIncrease}>Add 1</button>
        <button className="btn_count" onClick={handleDecrease}>Less 1</button>
        <button className="btn_count" onClick={handleFiveAdd}>Add 5</button>
        <button className="btn_count" onClick={handleFiveLess}>Less 5</button> 
        <button className="btn_count" onClick={handleTwentyFiveAdd}>Add 25</button>
        <button className="btn_count" onClick={handleTwentyFiveLess}>Less 25</button> 
        {/* <button className="btn" onClick={handleIncrease}>Increase</button>
        <button className="btn" onClick={handleDecrease}>Decrease</button> 
        <button className="btn" onClick={handleIncrease}>Increase</button>
        <button className="btn" onClick={handleDecrease}>Decrease</button>  */}
        <button className="btn_count" onClick={handleHundredAdd}>Add 100</button>
        <button className="btn_count" onClick={handleHundredLess}>Less 100</button>
        <button className="btn_count btn-clear" onClick={handleClear}>Clear</button>

    </div>
   
    </>
}
export default CountApp;
