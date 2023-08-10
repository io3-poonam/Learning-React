import React, { useState } from "react";
import "./form.css";
import Header from "../Header";
const Forms=()=>{
    // const name='Blank'
    const [fullName, setFullName]=useState({
        fName:"",
        lName:"",
        email:"",
        number:"",
        age:"",
        quali:"",


    })
          const onChange=(onChangeInput)=>{    
        console.log(onChangeInput.target.value)
        console.log(onChangeInput.target.name)
    // ESC6 
        const{value,name}=onChangeInput.target
   
    setFullName((preValue)=>{
return{
    ...preValue,
    [name]:value,
}   
   
    console.log(preValue)
    })}
   
    const onSubmit=(event)=>{
        event.preventDefault();
        alert('Successfully Submitted ')
        
    }
    return(<>
    <Header/>
    
    <div className="dis-Background">
    <form onSubmit={onSubmit}>
     <h1 className="Heading-1">Hello,<span>{fullName.fName} {fullName.lName}</span>  </h1>
     <p>{fullName.age}</p>  
     <p>{fullName.quali}</p>  
     <p>{fullName.email}</p>  
     <p>{fullName.number} </p>
   <input type="text" 
    name="fName"
    placeholder="Enter your First Name"
    onChange={onChange} value={fullName.fName} />
    <br/>
   <input type="text" 
    name="lName"
    placeholder="Enter Your Last Name"
    onChange={onChange} value={fullName.lName} />
    <br/>
    <input type="text" 
    name="age"
    placeholder="Enter Your Age"
    onChange={onChange} value={fullName.age} />
    <input type="text" 
    name="quali"
    placeholder="Enter Your qualification"
    onChange={onChange} value={fullName.quali} />
    <br/>
   <input type="email" 
    name="email"
    placeholder="Enter the email"
    autoComplete="off"
    onChange={onChange} value={fullName.email} />
    <br/>
   <input type="number" 
    autoComplete="off"
    name="number"
    placeholder="Enter the number"
    maxLength='10'
    onChange={onChange} value={fullName.number} />
    <br/>
   <button className="BtnCSS" >Submit</button>
</form>
</div>
    </>)
}
export default Forms;