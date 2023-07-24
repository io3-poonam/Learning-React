import React, { useState } from "react";
import './Accordion.css';
import { question } from "./AccordionApi";
import  MyAccordion from "./MyAccordion";
const Accordion=()=>{
    const [data, setData]=useState(question);
    return(
        <>
        <section >
            <div className=" main-container">
                {/* <div> */}
        <h1 className="h1">Interview Question</h1>
         {data.map((curElem)=>{
            // const{id}=curElem
         return <MyAccordion key={curElem.id} {...curElem}/> 
     })}
     {/* </div> */}
     </div>
     </section>
    </>)
}
export default Accordion;