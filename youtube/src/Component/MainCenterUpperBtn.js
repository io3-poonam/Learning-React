import React, { useState } from "react";
import "./style.css";
import MainVideoPart from "./main-Center";
const UpperButton=()=>{
//     const[btn,setBtn]=useState();
//     let Button={};
//     const HandleBlackBtn=()=>{
// setBtn(Button.backgroundColor="black")
//        console.log('m')
//     }
    return(<>
    <div className="ytd-postn-rel-abu">
            <button 
            // onClick={HandleBlackBtn} 
            className="ytub-btn">
                {/* - ---link home page---- - */}
                <a href="#">All 
                {/* {btn} */}
                </a>
            </button>
            <button className="ytub-btn"><a href="#">Gaming</a></button>
            <button className="ytub-btn"><a href="#">Arts</a></button>
            <button className="ytub-btn"><a href="#">Music</a></button>
            <button className="ytub-btn"><a href="#">Live</a></button>
            <button className="ytub-btn"><a href="#">Css</a></button>
            <button className="ytub-btn"><a href="#">Python</a></button>
            <button className="ytub-btn"><a href="#">Cartoon</a></button>
            <button className="ytub-btn"><a href="#">Insitute Banking</a></button>
            <button className="ytub-btn"><a href="#">Bollywood Music</a></button>
            <button className="ytub-btn"><a href="#">New to you</a></button>
   
<MainVideoPart/>
        </div>

    </>)
}
export default UpperButton;
