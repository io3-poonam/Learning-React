import React, { useState } from "react";
import './style.css'
// import AddIcon from '@mui/icons-material/Add';

import NoteBox from "./noteBox";
const CreateNote=()=>{
    const[expand,setExpand]=useState(false)
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
        setAddNote1((deleteItems)=>{
            return (deleteItems.filter((currdata,indexValue)=>{
                return indexValue !==id
            }))
        })
    }
     {/* hidden button and input section with the help of ternary operator*/}
            {/* pass useState false check condition in ture */}

    const expandIt=()=>{
        setExpand(true)
    }
    const dBClick=()=>{
        setExpand(false)

    }
    return(<>
    <div className=" main_note" onDoubleClick={dBClick}>
        <form className="form">
            {expand?
            <input className="input" name="title" value={note1.title} onChange={inputEventNote} id="input" type="text" placeholder="Title" autoComplete="off"/>:null}
            <textarea name="content" value={note1.content } onChange={inputEventNote} className="textarea" rows='' column="" placeholder="Write a note.." onClick={expandIt}></textarea>
            {/* hidden button section with the help of ternary operator  */}
            {expand?
            <div className="MuiButton-root" onClick={(pd)=>HandleBtnClick1(pd)}><button className="plus-sign">➕</button></div>:null}
            {/* pass useState false check condition in true */}
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