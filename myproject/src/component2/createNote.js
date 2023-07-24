import React, { useState } from "react";
import './style.css'
const CreateNote=(props)=>{
const[note,setNote]=useState({
    title:"",content:""
});
const inputEventNote=(event)=>{
    const {name,value}=event.target;
    setNote((oldData)=>{
        return{
            ...oldData,[name]:value
        }
    })
}
const HandleBtnClick=()=>{
    props.HandleBtnClick(note)
}
    return(<>
    <div className=" main_note">
        <form className="form">
            <input name="title" value={note.title} onChange={inputEventNote} id="input" type="text" placeholder="Title" autoComplete="off"/>
            <textarea name="content" value={note.content } onChange={inputEventNote} className="textarea" rows='' column="" placeholder="Write a note.."></textarea>
            <button className="plus-sign" onClick={HandleBtnClick}> ➕</button>
        </form>
    </div>
    </>)
}
export default CreateNote;