import React, { useState } from "react";
import "./shopping.css";
import List from "./list";
const Shopping = () => {
  const [inputItems, setInputItems] = useState("");
  const [newList, setNewList] = useState([]);

  const handleChangeEventListItems = (eventItems) => {
    setInputItems(eventItems.target.value);
  };
  const handleClickButtonList = () => {
    setNewList((oldItems) => {
      return [...oldItems, inputItems];
    });
    setInputItems("");
  };
  const HandleDelete=(id)=>{
    setNewList((oldItems)=>{
      return(
        oldItems.filter((arr,i)=>{
          return i !== id
        })
      )
    })
    console.log('n')
  }
  // const HandleDelete=(id)=>{
  //   // console.log('hhh')
  //   setNewList((oldItems=>{
  //     return(oldItems.filter((arrId,i)=>{
  //       return i !== id
  //     }))
  //   })) 
  // }
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1 className="heading_Shopping">ToDo Buy</h1>
          <input
            className="input"
            type="text"
            placeholder="Add to items"
            value={inputItems}
            onChange={handleChangeEventListItems}
          />
          <button onClick={handleClickButtonList} className="button"> + </button>
          <ul className="order_list">
            {newList.map((list,i) => {
              return <List 
              key={i} 
              id={i} 
              text={list} 
              onSelect={HandleDelete}
               />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Shopping;