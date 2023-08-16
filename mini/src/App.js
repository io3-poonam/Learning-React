import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Challenge from './Challenge';
// import Button from './ButtonClick';
// import  Xyz from './xyz';
// import Clock from './clock';
// import Events from './Events';
// import Forms from './forms';
// import Shopping from './shopping';
// import Bootstrap from './bootstrap'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import './game.css';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Services from './component/services';
import Error from './component/error';
import MainIndex from './component/mainIndex';
function App() {
  return (<>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<MainIndex/>} >
  <Route path='/' element={<Home/>} />
  <Route path='/about/id=1' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/services' element={<Services/>} />

  <Route path='*' element={<Error/>} />
  </Route>
  </Routes>
  </BrowserRouter>
  {/* <Xyz/>
  <Bootstrap/>
  <Shopping/>
    <Button/>
  <Forms/>
  <Events/>
    <Clock/>
     
      <Challenge/> */}
    </>
  );
}

export default App;
