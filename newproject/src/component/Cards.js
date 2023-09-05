import React from "react";
import Button from "react-bootstrap/Button";
import webHome from "./svg/home.png"
import Card from 'react-bootstrap/Card';
const Cards = (props) => {
    return (
      <>
<div className="col-md-4 col-10 mx-auto">
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" className="img-fluid" src={props.imgSrc} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">{props.click}</Button>
  </Card.Body>
</Card>
          </div></>);}
          export default Cards