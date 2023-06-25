import React from "react";
const Count=()=>{
let count=0;
 const Value=document.getElementById('count')
const getIncrease=()=>{
    count=count+1;
    console.log('v',Value)
    Value.innerHTML=count
}
const getDescrease=()=>{
    count=count-1;
    console.log(Value)
    Value.innerHTML=count
}
const getClear=()=>{
    count=0;
    console.log(Value)
    Value.innerHTML=0
}
    return<>
    <div className="count">
<h1>count:</h1>
<button onClick={(getIncrease)}>Increase</button>
<button onClick={(getDescrease)}>Decrease</button>
<button onClick={(getClear)}>Clear</button>

    </div>
    </>
}
export default Count;
