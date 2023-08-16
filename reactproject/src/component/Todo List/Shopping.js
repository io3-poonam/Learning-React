import React, { useState } from "react";
import "./shopping.css";
// import AddIcon from '@mui/icons-material/Add';
import Header from "../Header";
import List from "./list";
const Shopping = (props) => {
  const [inputItems, setInputItems] = useState("");
  const [newList, setNewList] = useState([]);
  const { test } = props;
  const handleChangeEventListItems = (eventItems) => {
    setInputItems(eventItems.target.value);
  };
  
  const handleClickButtonList = () => {
    if(inputItems){
      setNewList((oldItems) => {
        return [...oldItems, inputItems];
      });
    }
   
    setInputItems("");
  };
  console.log("TEST", test);
  const HandleDelete = (id) => {
    setNewList((oldItems) => {
      return oldItems.filter((arrId, i) => {
        return i !== id;
      });
    });
  };
  console.log("newList",newList)
  return (
    <>
      <Header />
      <h1>{test} cute hai</h1>
      <div className="main-div">
        <div className="container-1">
          <h1 className="heading_Shopping">ToDo Buy</h1>
          <input
            className="input-box"
            type="text"
            placeholder="Add to items"
            value={inputItems}
            onChange={handleChangeEventListItems}
          />
          <button onClick={handleClickButtonList} className="button">
            ➕
          </button>
          <ul className="order_list">
            {newList.map((list, i) => {
              return (
                <>
                    <List text={list} key={i} id={i} onSelect={HandleDelete} />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Shopping;
