import React, { useState } from "react";
import './Accordion.css';
import { question } from "./AccordionApi";
import  MyAccordion from "./MyAccordion";
import Header from "../Header";
const Accordion=()=>{
    const [data, setData]=useState(question);
    console.log('data',data)
    return(
        <>
        <Header/>
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