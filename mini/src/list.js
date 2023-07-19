import React, { useState } from "react";
import "./list.css";
// import AddIcon from '@mui/icons-material/Add';
// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
// import FontAwesomeIcon from "./FontAwesomeIcon"
// const List=(props)=>{

// return<>
// <div className="todo_style">
//  <DeleteIcon className="btn"  onClick={()=>{props.onSelect(props.id)}}
// />
// <li className="list_items">{props.text}</li>
// </div> </>
// }
const List = (props) => {
  const [line,setLine]=useState(false)
  const clickList=()=>{
setLine(true)
  }
  return (
    <>
      <div className="todo_style">
        <DeleteIcon className="btn" onClick={clickList}/>
        <li className="list_items" style={{textDecoration:line?"line-through":'none'}}>{props.text}</li>
      </div>
    </>
  );
};
export default List;
