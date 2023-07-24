import React, {useState}from 'react';
import './App.css';
import Shopping from './shop';
import Home from './component1/Home';
import SubPart from './component1/SubPart';
import Count from './component1/count';
import Footer1 from './component1/Footer';
import Challenge from './component1/Challenge';
import Accordion from"./component/Accordion/Accordion";
import Header from"./component2/header";
import Footer from"./component2/footer";
import CreateNote from"./component2/createNote";
import NoteBox from"./component2/noteBox";
// import { keyboard } from '@testing-library/user-event/dist/keyboard';



function App() {
  const[addNote,setAddNote]=useState([]);
  const HandleBtnClick=(note)=>{
    // alert('... Add')
    setAddNote((previous)=>{
      return[
        ...previous,note
      ]
    })
    console.log('c', note)
  }
  return (
    <div>
      <Header/>
      <CreateNote passNote={HandleBtnClick}/>
      {
        addNote.map((itmData,index)=>{
      return(
      <NoteBox

            key={index}
            id={index}
            title={itmData.title}
            content={itmData.content}/>)
        })
      }
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
