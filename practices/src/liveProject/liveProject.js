import React, { useEffect, useState } from "react";
import "./liveProject.css";
const Details = () => {
    const [data,setData]=useState([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"
    );
    const actualData = await response.json();
    console.log("c", actualData);
    setData(actualData)
    // console.log('d',Details)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading-1">
          <h2 className="mb-5 text-center">
            <span className="font-weight-bold">India</span>  Database
          </h2>
        </div>
        <div className="table-responsive">
          <table className="table table-hover ">
            <thead className="thead-dark">
              <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
               
              </tr>
            </thead>
<tbody>
            {data.map((currData,indexDetails)=>{
                return( <tr key={indexDetails}>
                <th>{currData.userId}</th>
                <td>{currData.id}</td>
                <td>{currData.title}</td>
                <td>{currData.body}</td>
                
              </tr>
                )
              })}
             
            </tbody>
            
          </table>
        </div>
      </div>
    </>
  );
};
export default Details;
