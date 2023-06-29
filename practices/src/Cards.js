import React from "react";
function Cards(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgSrc} alt="gng college" className="img_card" width={'600px'}/>
            <div className="cards_details">
                <h3 className="card_title" >{props.title}</h3>
                <p className="card_Address">{props.Address}</p>
                <p className="card_number">{props.number}</p>
                <a href={props.links} target="_blank">  <button>Click</button></a>
            </div>
        </div>
        </div>
        </>
    )
}
export default Cards;
