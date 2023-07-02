import React from "react";
import './game.css';

const Game=(props)=>{
    let x=props.x;
    let y=props.y;
    let z=props.z;

    if(x===y && y===z){
        return (<>
        <div className="slot_game">
        <h1 className="gameItems">{x} {y} {z}</h1>
        <h1>This is matchings</h1>
        <hr/>
        </div>
        </>)
    }
    else{
        return(<>
        <div className="slot_game">
        
        <h1 className="gameItems">{x} {y} {z}</h1>
        <h1>This is not matchings</h1>
        <hr/>
        </div>
        
        </>)  
    }
}
export default Game;