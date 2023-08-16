import React from "react";
const List=(props)=>{
    const {test}=props;
    return(<>
    <li>{test}</li>
    <button onClick={()=>{
        props.onCancel(props.id)
    }}>x</button>
    </>)
}
export default List;
