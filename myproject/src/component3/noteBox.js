import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
import "./style.css"
const NoteBox=(props)=>{
    // console.log('p[rops',props)
    return(<>
    <div className="note">
        <h1 className="">{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <button className="btn" onClick={()=>{props.deleteItem(props.id)}}>
        {/* <DeleteIcon className="deleteIcon"/> */}
        ✖️</button>
    </div>
    </>)
}
export default NoteBox;