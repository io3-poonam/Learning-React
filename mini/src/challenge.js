import React from "react";
import './challenge.css';
const Challenge_1=()=>{
    let currDate=new Date(2023,5,5,15).getHours();
    // currDate=currDate.getHours();
    let greeting="";
let displayBackground={}
let Heading={}
    if(currDate >=1 && currDate<12)
    {
        greeting="Good Morning";
        displayBackground.backgroundColor='orange'
        // console.log('greeting', greeting);
        
    }
    else if(currDate >= 12 && currDate < 19){
        greeting="Good Afternoon"
        displayBackground.backgroundColor='yellow'

        // console.log('go', greeting)
    }
    else{
        greeting="midNight"
        displayBackground.backgroundColor='black';
        Heading.color='white'


        // console.log('greeting 1', greeting)
    }
    return(<>
    <div className="display-Background" style={displayBackground}>
    <h1 className="Heading" style={Heading}> <strong style={{color:"GrayText"}}>Hello Sir</strong>, {greeting} </h1>
    </div></>)
}
export default Challenge_1