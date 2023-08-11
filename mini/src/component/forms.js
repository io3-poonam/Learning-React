import React, { useState } from "react";
import "./forms.css"
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
    // const [nameNew, setNameNew]=useState('')
    // const [enterName,setEnterName]=useState()
    // const [enterNameNew,setEnterNameNew]=useState()
       const onChange=(onChangeInput)=>{
        // setFullName(onChangeInput.target.value) 
        // setFullName(onChangeInput.target.name)        
        console.log(onChangeInput.target.value)
        console.log(onChangeInput.target.name)
    // ESC6 
        const{value,name}=onChangeInput.target
    // const value=onChangeInput.target.value;
    // const name=onChangeInput.target.name;
    setFullName((preValue)=>{
return{
    ...preValue,
    [name]:value,
}    // if(name==='fName'){ 
    //     return{ fName:value,
    //             lName:preValue.lName,
    //             email:preValue.email,
    //             number:preValue.number}
    // }else  if(name==='lName'){
    //     return{ fName:preValue.fName,
    //         email:preValue.email,
    //         number:preValue.number,
    //             lName:value}
    // }else  if(name==='email'){
    //     return{ email:value,
    //             fName:preValue.fName,
    //             lName:preValue.lName,
    //             number:preValue.number,}
    // }else  if(name==='number'){
    //     return{ number:value,
    //             fName:preValue.fName,
    //             lName:preValue.lName,
    //             email:preValue.email}
    // }
    console.log(preValue)
    })}
    // const onChangeNew=(onChangeInput)=>{
    //     setNameNew(onChangeInput.target.value)        
    //     console.log(onChangeInput.target.value)
    // }
    const onSubmit=(event)=>{
        event.preventDefault();
        alert('Successfully Submitted ')
        // setEnterName(name)
        // setEnterNameNew(nameNew)
    }
    return(<>
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