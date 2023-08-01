import React, { useState } from "react";
const MyAccordion=({list,answer})=>{
    const[show,setShow]=useState()
    return(<>
    <p onClick={()=>{setShow(!show)

    }}>{show? " Show Fewer ➕"  : "➖ Show More"}</p>
   
  {show &&  <p> {list} {answer}</p>}</>)
}
export default MyAccordion;