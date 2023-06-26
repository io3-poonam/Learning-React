import React, { useState } from "react";
import './count.css';
const CountApp=()=>{
    const [count,setCount]=useState(0) // exp :- (100)
const handleIncrease=()=>{
    setCount(count + 1)
    console.log("click");
}
const handleDecrease=()=>{
    if(count<=0){
        setCount(0)
        // console.log('in case less than 0')
    }
    else{
    setCount(count-1)
        // console.log('else')
    }
    // console.log('click');
}
// -----------5 add --------------
 const handleFiveAdd=()=>{
setCount(count+5)
 }
// -----5 Less---------
const handleFiveLess=()=>{
    if(count < 5){
        setCount(count)
    }
    else{
        setCount(count-5)
    }
}
    // ---------100 Add-------------
    const handleTwentyFiveAdd=()=>{
        setCount(count+25);
    }
    // --------------25 add--------
    const handleTwentyFiveLess=()=>{
        if(count< 25){
            setCount(count)
        }
        else{
    
            setCount(count-25)
        }
    }
        // ---------100 Add-------------
        const handleHundredAdd=()=>{
            setCount(count+100);
        }
// -------100 less---------
const handleHundredLess=()=>{
    if(count< 100){
        setCount(count)
    }
    else{

        setCount(count-100) /// problem
    }
}
const handleClear=()=>{

        setCount(0)
        console.log('clear')
    
    console.log('click');
}
// console.log('count', count)
    return<>
    <div className="count">
        <h1>Count {count}</h1>
        <button className="btn" onClick={handleIncrease}>Add 1</button>
        <button className="btn" onClick={handleDecrease}>Less 1</button>
        <button className="btn" onClick={handleFiveAdd}>Add 5</button>
        <button className="btn" onClick={handleFiveLess}>Less 5</button> 
        <button className="btn" onClick={handleTwentyFiveAdd}>Add 25</button>
        <button className="btn" onClick={handleTwentyFiveLess}>Less 25</button> 
        {/* <button className="btn" onClick={handleIncrease}>Increase</button>
        <button className="btn" onClick={handleDecrease}>Decrease</button> 
        <button className="btn" onClick={handleIncrease}>Increase</button>
        <button className="btn" onClick={handleDecrease}>Decrease</button>  */}
        <button className="btn" onClick={handleHundredAdd}>Add 100</button>
        <button className="btn" onClick={handleHundredLess}>Less 100</button>
        <button className="btn btn-clear" onClick={handleClear}>Clear</button>

    </div>
   
    </>
}
export default CountApp;
