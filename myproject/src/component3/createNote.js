import React, { useState } from "react";
import './style.css'
import NoteBox from "./noteBox";
const CreateNote=()=>{
    const[note1,setNote1]=useState({
        title:"",content:""
    });
    const[addNote1,setAddNote1]=useState([])
    const inputEventNote=(event)=>{
        const {name,value}=event.target;
setNote1((oldData)=>{
    return{...oldData,[name]:value}
})
console.log('note', note1)
    }
    const HandleBtnClick1=(pd)=>{
        pd.preventDefault();
        setAddNote1((pre)=>{
            return[...pre,note1]
        })
        console.log('note1',note1)
    }
    const onDelete=(id)=>{
        setAddNote1((deleteITEMS)=>{
            return deleteITEMS.filter(curr,ind)
            return ind !== id;
        })
    }
    return(<>
    <div className=" main_note">
        <form className="form">
            <input name="title" value={note1.title} onChange={inputEventNote} id="input" type="text" placeholder="Title" autoComplete="off"/>
            <textarea name="content" value={note1.content } onChange={inputEventNote} className="textarea" rows='' column="" placeholder="Write a note.."></textarea>
            <button className="plus-sign" onClick={(pd)=>HandleBtnClick1(pd)}> ➕</button>
        </form>
    </div>
    {addNote1.map((valueItem,index)=>{
        return<NoteBox
            key={index}
            id={index}
            title={valueItem.title}
            content={valueItem.content}
            deleteItem={onDelete}
        />
    })}
</>)
}
export default CreateNote;