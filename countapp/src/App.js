import logo from './logo.svg';
import CountApp from'./component/count';
import NameValue from './component/name';
// import CurrentName from'./component/currentDate';

import './App.css';
import CurrentName from './component/CurrentName';

function App() {
  return <>
  <CountApp/>
  <NameValue/>
  <CurrentName/>
  </>
}

export default App;
