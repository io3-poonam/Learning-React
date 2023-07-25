import React, {useState}from 'react';
import './App.css';
import Shopping from './shop';
import Home from './component1/Home';
import SubPart from './component1/SubPart';
import Count from './component1/count';
import Footer1 from './component1/Footer';
import Challenge from './component1/Challenge';
import Accordion from"./component/Accordion/Accordion";
// import HeaderAPP from"./component2/header";
// import FooterAPP from"./component2/footer";
// import CreateNoteAPP from"./component2/createNote";
// import NoteBoxAPP from"./component2/noteBox";

import Header from"./component3/header";
import Footer from"./component3/footer";
import CreateNote from"./component3/createNote";
// import { keyboard } from '@testing-library/user-event/dist/keyboard';



function App() {
  // const[addNote,setAddNote]=useState([]);
  // const HandleBtnClick=(note)=>{
  //   // alert('... Add')
  //   setAddNote((previous)=>{
  //     return[
  //       ...previous,note
  //     ]
  //   })
  //   console.log('c', note)
  // }
  return (
    <div>
       {/* <HeaderAPP/> */}
      {/* <CreateNoteAPP/> */}
         {/* <NoteBox/>  */}
       {/* {
        addNote.map((itmData,index)=>{
      return(
      <NoteBoxAPP

            key={index}
            id={index}
            title={itmData.title}
            content={itmData.content}/>)
        })
      } 
      <FooterAPP/> */}
      <Header/>
      <CreateNote/>
    
      <Footer/>
       <Accordion/>
      <Shopping/>
     <Count/>
     <Challenge/>
     <Home />
     <SubPart />
     <Footer1/>
    </div>
  );
}

export default App;
