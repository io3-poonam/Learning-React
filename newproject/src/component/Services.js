import React from "react";
import Button from "react-bootstrap/Button";
import webHome from "./svg/home.png"
import Cards from "./Cards";
import Data from "./DataAPI";
const Service = (props) => {
  return (
    <>
    <div className="my-5">
      <h1 className="text-center">Our Services</h1>
    </div>
        <div className="container-fluid mt-5">
          <div className="row ">
            <div className="col-10 mx-auto">
             <div className="row gy-4">
              {
                Data.map((val,index)=>{
        return  <Cards key={index}
         imgSrc={val.imgSrc}
        title={val.title}
        click={val.click}/>

                })
              }
            </div>
          </div>
        </div>
        </div>
    </>
  );
};
export default Service;
