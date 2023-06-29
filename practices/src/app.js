import React from "react";
import Cards from "./Cards";
import Calc from "./calc"
import CardData from"./CardData";
import './Cards.css';

console.log('cards',CardData)

const App=()=>{
 return(
    <>
    <Calc/>
    <h1 className="heading_style">All ludhiana College List</h1>

    <Cards 
    imgSrc={CardData[0].imgSrc}
    title={CardData[0].title}
     Address={CardData[0].Address}
     number={CardData[0].number}
     links={CardData[0].links}/>
     <Cards 
    imgSrc={CardData[1].imgSrc}
    title={CardData[1].title}
     Address={CardData[1].Address}
     number={CardData[1].number}
     links={CardData[1].links}/>
     <Cards 
     imgSrc={CardData[2].imgSrc}
     title={CardData[2].title}
      Address={CardData[2].Address}
      number={CardData[2].number}
      links={CardData[2].links}/>
      <Cards 
      imgSrc={CardData[3].imgSrc}
      title={CardData[3].title}
       Address={CardData[3].Address}
       number={CardData[3].number}
       links={CardData[3].links}/>
       <Cards 
       imgSrc={CardData[4].imgSrc}
       title={CardData[4].title}
        Address={CardData[4].Address}
        number={CardData[4].number}
        links={CardData[4].links}/>
 <Cards 
    imgSrc={CardData[5].imgSrc}
    title={CardData[5].title}
     Address={CardData[5].Address}
     number={CardData[5].number}
     links={CardData[5].links}/>
    </>
 )
}
export default App;
