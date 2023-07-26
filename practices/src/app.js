import React, { createContext } from "react";
import Cards from "./Cards";
import Calc from "./calc"
import CardData from"./CardData";
import './Cards.css';
import CollegeMix from "./CollegeMix";
import OtherCollege from "./OtherCollege";
import CompA from "./component/CompA";
console.log('cards',CardData)
// if else condition
const favSeries="netflix";

// const FavS=()=>{
//    if(favSeries==="netflix"){
//       return(<CollegeMix/>
//      );
//    }
//    else{
//       <OtherCollege/>
//    }
// }

const FirstName=createContext();
const LastName=createContext();

const App=()=>{
 return(
    <>
    <FirstName.Provider value={'Poonam'}>
      <LastName.Provider value={'Maurya'}>
    <CompA/>
    </LastName.Provider>
    </FirstName.Provider>
   
    <Calc/>
    <h1 className="heading_style">All ludhiana College List</h1>
    {/* <FavS/> */}
    {/* this is map method */}
 {CardData.map((cardValue,index)=>{
   console.log(index)
   return( <Cards 
      key={cardValue.id}
      imgSrc={cardValue.imgSrc}
      title={cardValue.title}
       Address={cardValue.Address}
       number={cardValue.number}
       links={cardValue.links}/>
     );
})

} 
{/* ternary opertor */}
{/* {(favSeries==='netflix'?<OtherCollege/>:<CollegeMix/>)} */}
     
    </>
 )
}
export default App;
export {FirstName, LastName};

