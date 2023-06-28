import React from "react";
function Cards(props){
    return(
        <>
        <div className="container">
            <div className="cards">
                <img src={props.imgSrc} alt="gng college" width={'600px'}/>
                <h1 className="title" >{props.title}</h1>
                <p className="Address">{props.Address}</p>
                <p className="number">{props.number}</p>
                <a href={props.links} target="_blank">  <button>Click</button></a>
            </div>
        </div>
        </>
    )
}
export default Cards;
