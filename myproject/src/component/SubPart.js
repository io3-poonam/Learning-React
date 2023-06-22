import React from "react";
import {card} from "./card";
import './subPart.css';

const SubPart=()=>{
  console.log('cvb', card)
    return<>
    <div className="mainPage" style={{ display: 'flex',flexWrap:"wrap"}}>{
    card.map((item,index)=>{
      console.log(item,'item')
      return <div className="card" style={{width:"18rem"}} >
      <img src={item.img} style={{width:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  

    })}</div>
    {/* <div className="container">
    <div className="mainPart" style={{display:"flex", margin:"auto"}}>
 <div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ludo_Pieces.JPG/240px-Ludo_Pieces.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ludo_Pieces.JPG/240px-Ludo_Pieces.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ludo_Pieces.JPG/240px-Ludo_Pieces.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ludo_Pieces.JPG/240px-Ludo_Pieces.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className="mainPart" style={{display:"flex", margin:"auto"}}>
<div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ludo_Pieces.JPG/240px-Ludo_Pieces.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ludo_Pieces.JPG/240px-Ludo_Pieces.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ludo_Pieces.JPG/240px-Ludo_Pieces.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ludo_Pieces.JPG/240px-Ludo_Pieces.JPG" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
</div> */}
    </>
    
}
export default SubPart;