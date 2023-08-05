import React, { createContext } from "react";
import OtherCollege from "./OtherCollege";
import CollegeMix from "./CollegeMix";


// if else condition
const favSeries="netflix";

const FavS=()=>{
   if(favSeries==="netflix"){
      return(<CollegeMix/>
     );
   }
   else{
      <OtherCollege/>
   }
}
{/* ternary opertor */}
{(favSeries==='netflix'?<OtherCollege/>:<CollegeMix/>)}
const Filter=()=>{
    return(<>
    <FavS/>
        </>)
}
export default Filter;
