import React from 'react';
import './App.css';
import NavbarApp from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Error from './component/Error';
function App() {
  return (
    <>
   
<NavbarApp/>
    <Routes>
      {/* <Route path='/' element={<Menu/>}> */}
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path="*" element={<Error />}></Route>

    </Routes>

    </>
  );
}

export default App;
