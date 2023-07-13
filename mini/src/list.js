import React from "react";
import './list.css';
// import FontAwesomeIcon from "./FontAwesomeIcon"
const List=(props)=>{
    
    return<>
    <div className="todo_style">
    {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
    {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="btn" viewBox="0 0 512 512"
    onClick={()=>{props.onSelect(props.id)}}
    //  onClick={()=>{props.onSelect(props.id)}}
    >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
        {/* <span className="btn">x</span> */}
    <li className="list_items">{props.text}</li>
    </div> </>
}
export  default List ;