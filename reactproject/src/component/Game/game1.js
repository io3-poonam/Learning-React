import React from "react";
import Game from './game';
import Header from "../Header";
const Game1=()=>{
    return(<>
    <Header/>
    
     <h1 className='Heading_Game'>🎰 Welcome to slot Game machine 🎰</h1>
     <div className='slotGame'> 
     
      <Game  x='😊'y="😂"z="😢"/>
      <Game  x='🍎'y="🍎"z="🍎"/>
      <Game  x='⚽'y="📚"z="📚"/>
      <Game  x='❤️'y="❤️"z="❤️"/>
      <Game  x='🚗'y="🚗"z="🚗"/>
      </div></>)
}
export default Game1;