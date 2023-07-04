import React, { useState } from "react";
import "./forms.css"
const Forms=()=>{
    // const name='Blank'
    const [fullName, setFullName]=useState({
        fName:"",
        lName:"",
    })
    // const [nameNew, setNameNew]=useState('')

    // const [enterName,setEnterName]=useState()
    // const [enterNameNew,setEnterNameNew]=useState()

    const onChange=(onChangeInput)=>{
        setFullName(onChangeInput.target.value)        
        console.log(onChangeInput.target.value)
    }
    // const onChangeNew=(onChangeInput)=>{
    //     setNameNew(onChangeInput.target.value)        
    //     console.log(onChangeInput.target.value)
    // }
    const onSubmit=(event)=>{
        event.preventDefault();
        // setEnterName(name)
        // setEnterNameNew(nameNew)
    }
   
    return(<>
    <div className="dis-Background">
        <form onSubmit={onSubmit}>
<h1 className="Heading-1">Hello, {fullName}</h1>
   <input type="text" 
   name="fName"
   placeholder="Enter Your Name"
    onChange={onChange} value={fullName.fName} />
    <br/>
    <input type="text" 
    name="lName"
   placeholder="Enter the Password"
   onChange={onChange} value={fullName.lName} />

    <br/>

   <button className="BtnCSS" >Submit</button>
   </form>
    </div>
    </>)
}
export default Forms;