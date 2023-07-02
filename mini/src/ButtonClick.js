import React, { useState } from "react";
import './btn.css'
// const count=0;
const Button=()=>{
    const[count,setCount]=useState(0)
    const incBtn=()=>{
        console.log('click')
        setCount(count+1)
    }
    const decBtn=()=>{
        if(count<=0){
        setCount(0)}
        else{
            setCount(count-1)
        }
    }
    const cleBtn=()=>{
        setCount(0)
    }
return(<>
<div className="btn-Class">
<h1 className="btnHeading">{count}</h1>
<button onClick={incBtn} className="btnBtn">Addition</button>
<button onClick={decBtn} className="btnBtn">Subtraction</button>
<button onClick={cleBtn} className="btnBtn">Clear Data</button>

</div>
</>)
}
export default Button;
