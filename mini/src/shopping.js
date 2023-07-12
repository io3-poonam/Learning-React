import React, { useState } from "react";
import './shopping.css';
const Shopping=()=>{
    const[inputItems, setInputItems]=useState('')
    const[newList, setNewList]=useState([]);

    const handleChangeEventListItems=(eventItems)=>{
        setInputItems(eventItems.target.value)
    }
    const handleClickButtonList=()=>{
        setNewList((oldItems)=>{
            return[...oldItems,inputItems]
         })
         setInputItems('')
    }
      return<>
    <div className="main-div">
        <div className="container">
            <h1 className="heading_Shopping">ToDo Buy</h1>
            <input className="input"type="text" placeholder="Add to items"
          onChange={handleChangeEventListItems}/>
            <button onClick={handleClickButtonList}> + </button>
            <ol className="order_list">
             {newList.map((list)=>{
               return <li className="list_items">{list}</li>
            })} 
            </ol>
        </div>
    </div>
    </>
}
export default Shopping;