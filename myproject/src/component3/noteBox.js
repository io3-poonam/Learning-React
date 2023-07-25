import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
import "./style.css"
const NoteBox=(props)=>{
    const onDeleteBtn=()=>{
        props.deleteItem(props.id)
    }
    console.log('m',onDeleteBtn)
    // console.log('p[rops',props)
    return(<>
    <div className="note">
        <h1 className="">{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <button className="btn" onClick={onDeleteBtn}>
        {/* <DeleteIcon className="deleteIcon"/> */}
        ✖️</button>
    </div>
    </>)
}
export default NoteBox;