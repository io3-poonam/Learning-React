import React, { useState } from "react";
const MyAccordion=({question,answer})=>{
    const[show,setShow]=useState(false)
    return(<>
     <div className="main-heading">
        <p onClick={()=>setShow(!show)}>
            {show? "➖":"➕"}</p>
        {/* <p onClick={()=>setShow(!show)}>{show?'➖':"➕"}</p> */}
     {/* <img width="40" height="40" src="https://img.icons8.com/sf-black-filled/64/plus-math.png" alt="plus-math"/> */}


<h3>{question}</h3> 
</div>
{show && <p className="answers">{answer}</p>}
{/* { show && <p className="answers"> {answer}</p> */}
{/* }   */}
  </>)
}

export default MyAccordion;