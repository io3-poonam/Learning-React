import React, { useState } from "react";
import "./shop.css";

import ListItems from "./listItems";
const Shop = () => {
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
    // console.log('hhh')
    setNewList((oldItems=>{
      return(oldItems.filter((arrId,i)=>{
        return i !== id
      }))
    })) 
  }
  return (
    <>
      <div className="main-div">
        <div className="container-1">
          <h1 className="heading_Shopping">ToDo Buy</h1>
          <input
            id="input1"
            type="text"
            placeholder="Add to items"
            value={inputItems}
            onChange={handleChangeEventListItems}
          />
<img onClick={handleClickButtonList} className="button" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/plus-math.png" alt="plus-math"/>
          <ul className="order_list">
            {newList.map((list, i) => {
              return<ListItems text={list}
              key={i}
              id={i}
              
              onSelect={HandleDelete}/>
            })
            }
          </ul>
        </div>
      </div>
    </>
  );
};
export default Shop;
