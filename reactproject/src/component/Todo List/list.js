import React, { useState } from "react";
import "./list.css";
// import { Button } from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';
const List = (props) => { 
  const [line,setLine]=useState(false)
  // const [showHide,setShowHide]=useState()
  const clickList=()=>{
setLine(true)
  }
  const {text}=props
  return (
    <>
      <div className="todo_style">
        <button className="btn" onClick={clickList}>➖</button>
        <li className="list_items" style={{textDecoration:line?"line-through":'none'}}>{text}</li>
      </div>
    </>
  );
};
export default List;
