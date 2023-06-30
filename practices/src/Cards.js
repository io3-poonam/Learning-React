import React from "react";
import Heading from "./Heading";
import Image from "./Image";

function Cards(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <Image imgSrc={props.imgSrc} />
            <div className="cards_details">
                <Heading title={props.title}/>
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
