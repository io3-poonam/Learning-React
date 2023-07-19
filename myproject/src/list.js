
import React from "react";
import "./list.css";
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// const List=(props)=>{

// return<>
// <div className="todo_style">
// />
// <li className="list_items">{props.text}</li>
// </div> </>
// }
const List = (props) => {
  return (
    <>
      <div className="todo_style">
      <img width="30" height="30" src="https://img.icons8.com/material-outlined/24/multiply--v1.png" alt="multiply--v1"
 className="btn"  onClick={()=>{props.onSelect(props.id)}} />
        <li  className="list_items">{props.text}</li>
      </div>
    </>
  );
};
export default List;
