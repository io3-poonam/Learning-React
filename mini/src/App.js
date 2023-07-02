import './App.css';
import Challenge from './Challenge';
import Game from './Game';
import Button from './ButtonClick';
import './game.css';
function App() {
  return (<>
    <Button/>
      <h1 className='Heading_Game'>🎰 Welcome to slot Game machine 🎰</h1>
     <div className='slotGame'> 
     
      <Game  x='😊'y="😂"z="😢"/>
      <Game  x='🍎'y="🍎"z="🍎"/>
      <Game  x='⚽'y="📚"z="📚"/>
      <Game  x='❤️'y="❤️"z="❤️"/>
      <Game  x='🚗'y="🚗"z="🚗"/>
      </div>
      <Challenge/>
    </>
  );
}

export default App;
