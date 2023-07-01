import React from "react";
import CardData from "./CardData";
import Cards from "./Cards";
const OtherCollege=()=>{
return( 
       <Cards 
      key={CardData[0].id}
      imgSrc={CardData[0].imgSrc}
      title={CardData[0].title}
       Address={CardData[0].Address}
       number={CardData[0].number}
       links={CardData[0].links}/>,
       <Cards 
       key={CardData[1].id}
       imgSrc={CardData[1].imgSrc}
       title={CardData[1].title}
        Address={CardData[1].Address}
        number={CardData[1].number}
        links={CardData[1].links}/>,
        <Cards 
        key={CardData[5].id}
        imgSrc={CardData[5].imgSrc}
        title={CardData[5].title}
         Address={CardData[5].Address}
         number={CardData[5].number}
         links={CardData[5].links}/>
   );}
   export default OtherCollege;