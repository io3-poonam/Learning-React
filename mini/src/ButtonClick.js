import React, { useState } from "react";
import "./btn.css";
import AddIcon from '@mui/icons-material/Add';
const count=0;
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
<h1 className="btnHeading">Count : {count}</h1>
<button onClick={incBtn} className="btnBtn">
     <AddIcon/>
    Addition</button>
<button onClick={decBtn} className="btnBtn">Subtraction</button>
<button onClick={cleBtn} className="btnBtn">Clear Data</button>

</div>
</>)
}
// import AddIcon from '@mui/icons-material/Add';
// const countValue=0
// const Button = () => {
//     const[countValue,setCountValue]=useState(0)
//     const add=()=>{
// console.log('gj')
// setCountValue(countValue+1)
//     }
//     const less=()=>{
//         if(countValue<=0)
// setCountValue(0)
// else{
// setCountValue(countValue-1)

// }

// console.log('gj')
        
//     } 
//      const clear=()=>{
// setCountValue(0)

// console.log('gj')
        
//     }
//   return <>
//   <div className="btn-Class">
//     <h1 className="btnHeading">count :{countValue}</h1>
//     <button onClick={add} className="btnBtn">
//        + {/* <AddIcon/> */}
//     </button>
//     <button onClick={less} className="btnBtn">-</button>
//     <button onClick={clear} className="btnBtn">c</button>
//     </div></>;
// };


export default Button;
