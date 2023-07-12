import React, { useState } from "react";
import "./shopping.css"
const Extra=()=>{
    const[list,setList]=useState('')
    const[listEmpty,setListEmpty]=useState([])

    const handleChangeEventList=(evt)=>{
        setList(evt.target.value)
    }
    const handleClickButton=()=>{
        setListEmpty((oldItems)=>{
            return[...oldItems,list]
        })
        setList('')
    }
    return<>
     <div className="main-div">
        <div className="container">
            <h1 className="heading_Shopping">ToDo Buy</h1>
            <input className="input"type="text" placeholder="Add to items"
            value={list}
                onChange={handleChangeEventList}/>
            <button onClick={handleClickButton}> + </button>
            <ol className="order_list">
            {listEmpty.map((listD)=>{
             return   <li>{listD}</li>
                
            })}
            </ol>
        </div>
    </div>
   </>
}
export default Extra;