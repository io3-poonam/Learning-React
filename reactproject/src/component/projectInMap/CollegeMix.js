import React from "react";
import CardData from "./CardData";
import Cards from "./Cards";
const CollegeMix=()=>{
return( 
       <Cards 
      key={CardData[2].id}
      imgSrc={CardData[2].imgSrc}
      title={CardData[2].title}
       Address={CardData[2].Address}
       number={CardData[2].number}
       links={CardData[2].links}/>,
       <Cards 
       key={CardData[3].id}
       imgSrc={CardData[3].imgSrc}
       title={CardData[3].title}
        Address={CardData[3].Address}
        number={CardData[3].number}
        links={CardData[3].links}/>,
        <Cards 
        key={CardData[4].id}
        imgSrc={CardData[4].imgSrc}
        title={CardData[4].title}
         Address={CardData[4].Address}
         number={CardData[4].number}
         links={CardData[4].links}/>
   );}
   export default CollegeMix;