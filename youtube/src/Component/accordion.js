import React, { useState } from "react";
import { question } from "./accordApi";
import MyAccordion from "./myaccord";
const Accord = () => {
  const [data, setD] = useState(question);
  return (
    <>
      <div>
        {/* <h1>Details</h1> */}

        {data.map((currD, ind) => {
          return <MyAccordion key={currD.id} {...currD} />;
        })}
      </div>
    </>
  );
};
export default Accord;
