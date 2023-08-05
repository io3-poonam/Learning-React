import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Challenge from './Challenge';
import Button from './ButtonClick';
import  Xyz from './xyz';
import Clock from './clock';
import Events from './Events';
import Forms from './forms';
import Shopping from './shopping';
import Bootstrap from './bootstrap'

import './game.css';
function App() {
  return (<>
  <Xyz/>
  <Bootstrap/>
  <Shopping/>
    <Button/>
  <Forms/>
  <Events/>
    <Clock/>
     
      <Challenge/>
    </>
  );
}

export default App;
