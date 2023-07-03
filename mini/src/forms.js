import React, { useState } from "react";
import "./forms.css"
const Forms=()=>{
    // const name='Blank'
    const [addName, setAddName]=useState('')
    const [enterName,setEnterName]=useState()
    const onChange=(onChangeInput)=>{
        setAddName(onChangeInput.target.value)        
        console.log(onChangeInput.target.value)
    }
    const onClick=()=>{
        setEnterName(addName)
    }
   
    return(<>
    <div className="dis-Background">
<h1 className="Heading-1">Hello, {enterName}</h1>
   <input type="text" 
   placeholder="Enter Your Name"
    onChange={onChange} value={addName} />
   <button className="BtnCSS" onClick={onClick}>Click</button>
    </div>
    </>)
}
export default Forms;