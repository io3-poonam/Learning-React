import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Challenge from './Challenge';
import Button from './ButtonClick';
import Game from './Game';
import Clock from './clock';
import Events from './Events';
import Forms from './forms';
import Shopping from './shopping';
import Bootstrap from './bootstrap'

import './game.css';
function App() {
  return (<>
  <Bootstrap/>
  <Shopping/>
    <Button/>
  <Forms/>
  <Events/>
    <Clock/>
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
