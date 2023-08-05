import React, { useEffect, useState } from "react";
const UseEffect=()=>{
    const[num,setNum]=useState(0)
    const[numb,setNumb]=useState(0)
    const ClickBTN=()=>{
        console.log('c')
        setNum(num+1)
    }
    const ClickBtn=()=>{
        console.log('c')
        setNumb(numb+1)
    }
    useEffect(()=>{
        // alert('click')
        document.title=`times number is ${num}`
        ;
    },[num],[])
    return(<>
    <div>
    <button onClick={ClickBTN}>Click me & see title bars {num}</button>
        <button onClick={ClickBtn}>Click me & not Effect in title bar {numb}</button>
    </div>
    </>)
}
export default UseEffect;