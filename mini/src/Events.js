import React, { useState } from "react";
import './Event.css';
const Events=()=>{
    let purple='#8e44ad';

    const [bg,setBg]=useState('skyBlue')
    let name='click';
    const[EventsBtn,setEventsBtn]=useState('Click me')
    const ChangeBg=()=>{
       let newBg="pink"
       let newName='Hello guys 👋'
        setBg(newBg);
        setEventsBtn(newName)
        console.log('click')
    }
    const onDoubleClick=()=>{
        let newBgDouble="gray"
        let newBgDoubleName='May I Help You !! 💁 refresh the page '
        setBg(newBgDouble);
        setEventsBtn(newBgDoubleName)
        console.log('click')
    }
    // const onMouseEnter=()=>{
    //     let onchange="orange"
    //     let onchangeName='onMouseEnter 💁 refresh the page '
    //     setBg(onchange);
    //     setEventsBtn(onchangeName)
        
    // }
    // const onMouseLeave=()=>{
    //     let onMouseLeave="green"
    //     let onMouseLeaveName='onMouseLeave 💁 refresh the page '
    //     setBg(onMouseLeave);
    //     setEventsBtn(onMouseLeaveName)
        
    // }
    return(<>
    <div className="events" style={{backgroundColor: bg}}>
    <button className="EventsButton" 
    // onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} 
    onDoubleClick={onDoubleClick} onClick={ChangeBg}>{EventsBtn}</button>
    </div>
    </>)
}
export default Events;
