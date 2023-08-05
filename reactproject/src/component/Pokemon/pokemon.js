import axios from "axios";
import React, { useEffect, useState } from "react";
const Pokemon = () => {
  const [number, setNumber] = useState(1);
  // const[data,setData]=useState([]);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  // const[result,setResult]=useState()

  useEffect(() => {
    // alert('c')
    async function getData() {
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${number}/`
      );
      console.log("data", resp);
      // setNumber(resp.data.number)
      setName(resp.data.name);
      // setData(resp.data.results)
      // console.log(resp.data.name,'setm')
      // console.log(resp.data.moves,'setN')

      setMoves(resp.data.moves.length);
      // setResult(resp.data.result)
    }
    getData();
  });
  return (
    <>
      <h1>You choose {number} value</h1>
      <h1>My name is {name}</h1>
      <h1>{name} move are {moves}</h1>
      {/* <h1>my move are {result}</h1> */}

      {/* {data.map((itemData,indexData)=>{ */}
      {/* // return (<h1>{itemData.name}</h1>) */}
      {/* })} */}
      <select
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>

        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>

        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
      </select>
    </>
  );
};
export default Pokemon;
