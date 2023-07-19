import React, { useState } from "react";
import "./shopping.css";
// import AddIcon from '@mui/icons-material/Add';

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
  // const HandleDelete=(id)=>{
  //   setNewList((oldItems)=>{
  //     return(
  //       oldItems.filter((arr,i)=>{
  //         return i !== id
  //       })
  //     )
  //   })
  //   console.log('n')
  // }
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
            className="input"
            type="text"
            placeholder="Add to items"
            value={inputItems}
            onChange={handleChangeEventListItems}
          />
<img onClick={handleClickButtonList} className="button" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/plus-math.png" alt="plus-math"/>

{/* <img  width="50" height="50" src="https://img.icons8.com/ios/50/plus-math--v1.png" alt="plus-math--v1"/> */}

{/* <AddIcon onClick={handleClickButtonList} className="button"/> */}
          {/* <button onClick={handleClickButtonList} className="button"> + </button> */}
          <ul className="order_list">
            {newList.map((list, i) => {
              return<List text={list}
              key={i}
              id={i}
              // <List 
              // key={i} 
              // id={i} 
              // text={list} 
              onSelect={HandleDelete}/>
              //  />;
            })
            }
          </ul>
        </div>
      </div>
    </>
  );
};
export default Shopping;
