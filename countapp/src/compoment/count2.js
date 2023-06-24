import React, { useState } from "react";
const Count2=()=>{
    const[count,setCounting]=useState(0)
    const Increase=()=>{
        setCounting(count + 1)
        // console.log('click',count)
    }
    const Decrease=()=>{
        if(count<=0){
            setCounting(0)
            console.log('click', count)}
            else{
                setCounting(count - 1)
            }
    }
    const clear=()=>{
        setCounting(0)
        // console.log(clear)
    }
        // console.log(Count2)

    return(<>
    <div>
        <h1>count : {count}</h1>
<button onClick={Increase}>Increasing</button>
<button onClick={Decrease} >Decreasing</button>
<button onClick={clear}>All Clear</button>

    </div>
    </>)
}
export default Count2;