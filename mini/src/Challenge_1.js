import React from "react";
const Game=()=>{
    let x='😀 ' ;
    let y='😀';
    let z='😂';
    let a='🥹';
    let b=' 🥶';
    let c='🥹';
    let d=' 🤬';
    let e='😇';
if((x===y && y===z && x===z)){
    return (<>
     {/* <div className="container" style={{border:'1px solid black', width:'30%', height:"50vh", margin:'auto', boxShadow:'2px 6px 12px  gray'}}> */}
       <h1>{x} {y} {z}</h1> 
               <h2>This is matching  </h2>
            <hr/>

 {/* </div> */}
          </>)
}
    // console.log('c')
   
else{
    <div className="container" style={{border:'1px solid black', width:'30%', height:"50vh", margin:'auto', boxShadow:'2px 6px 12px  gray'}}>
    <h1>{x} {y} {z}</h1> 
            <h2>This is not matching </h2>
            <hr/>
</div>}
    return<>
    <Game/>
    
    
    <h1>Welcome to Slot Machine game</h1>
    </>
}

export default Game;