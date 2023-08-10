import React from "react";
import CardData from "./CardData";
import Cards from "./Cards";
import "./cards.css"
import Header from "../Header";
const MainCard=()=>{
    return(<>
    <Header/>

    <h1 className="heading_style">All ludhiana College List</h1> 

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
    </>)
}
export default MainCard;