import React from "react";
import './challenge.css';
const Challenge=()=>{
    let currDate=new Date().getHours();
    // currDate=currDate.getHours();
    let greeting="";
let displayBackground={}
let Heading={}
    if(currDate >=1 && currDate<12)
    {
        greeting="Good Morning";
        displayBackground.backgroundColor='orange'
        Heading.color='red'
        // console.log('greeting', greeting);
        
    }
    else if(currDate >= 12 && currDate < 16){
        greeting="Good Afternoon"
        displayBackground.backgroundColor='yellow'
        Heading.color='purple'

        // console.log('go', greeting)
    }
    else if(currDate >= 16 && currDate < 20){
        greeting="Good Evening"
        displayBackground.backgroundColor='yellowgreen'
        Heading.color='green'

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
    <h1 className="Heading" style={Heading}> <strong style={{color:"GrayText"}}>Hello Sir ,</strong> {greeting} </h1>
    </div></>)
}
export default Challenge;