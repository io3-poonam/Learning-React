import React, { useState } from "react";
const NameValue=()=>{
    const[value,setNewValue]=useState('abc')
 const handleEnterName=()=>{
    setNewValue("ladakuviman")
// console.log('click' )
 }
 const handleChangeName=()=>{
    setNewValue('poonam')
 }
//  console.log('value',value)
    return(<>
    <div className="">
        <h1>Name : {value}</h1>
        <button onClick={handleEnterName}>Enter Name</button>
        <button onClick={handleChangeName}>Change Name</button>
    </div>
    </>)
}
export default NameValue;