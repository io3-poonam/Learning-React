import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
import "./style.css"
const NoteBox=(props)=>{
    return(<>
    <div className="note">
        <h1 className="">{props.Title}</h1>
        <br/>
        <p>{props.content}</p>
        <button className="btn">
        {/* <DeleteIcon className="deleteIcon"/> */}
        ✖️</button>
    </div>
    </>)
}
export default NoteBox;