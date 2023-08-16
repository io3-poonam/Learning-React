import React, { useState } from "react";
const List=(props)=>{
    const {test}=props;
    const [hideShow, setHideShow]=useState(false)
    // const {onDelete}=props;
    const HandleCancel=()=>{
setHideShow(true)
    }
    return(<>
    <div style={{display:"flex", flexDirection:"row" }}>
    <li  style={{textDecoration:hideShow?"line-through":"none"}}>{test}</li>
    <button onClick={()=>{props.onDelete(props.id)}}>x</button>
    <button onClick={HandleCancel}>*</button>


    </div></>)
}
export default List;