import React, { useState } from "react";
const NameValue=()=>{
    const[value,setNewValue]=useState('abc')
 const handleEnterName=()=>{
    setNewValue("Ladakuviman")
// console.log('click' )
 }
 const handleChangeName=()=>{
    setNewValue('Poonam')
 }
//  console.log('value',value)
    return(<>
    <div className="">
        <h1>Name : {value}</h1>
        <button className="nameBtn" onClick={handleEnterName}>Enter Name</button>
        <button className="nameBtn" onClick={handleChangeName}>Change Name</button>
    </div>
    </>)
}
export default NameValue;