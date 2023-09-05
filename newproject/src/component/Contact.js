import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const Contact = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Number: "",
    State: "",
    City: "",
  });
  console.log("data", data);
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((previousData)=>{
      return {...previousData ,[name]:value}
    })
  };
  const HandelSubmitForm = (e) => {
    e.preventDefault()
    alert(`my name is ${data.Name} My email is ${data.Email} & Mobile number is ${data.State}, and City is ${data.City} all data are correct`)
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Services</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <Form onSubmit={HandelSubmitForm}>
              <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={data.Email}
                  onChange={inputEvent}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="Name"
                  value={data.Name}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  name="Number"
                  value={data.Number}
                  onChange={inputEvent}
                  placeholder="Number"
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    name="City"
                    value={data.City}
                    onChange={inputEvent}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label name="State"
                    value={data.State}
                    onChange={inputEvent}>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Andhra pardesh</option>
                    <option>Bihar</option>
                    <option>Chandigarh</option>
                    <option>Delhi</option>
                    <option>Gujrat</option>
                    <option>Haryana</option>
                    <option>jharkand</option>
                    <option>Kerela</option>
                    <option>Mumbai</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajesthan</option>
                    <option>sikkam</option>
                    <option>Tamil nadhu</option>
                    <option>Uttar pardesh</option>

                    <option>West bangal</option>
                  </Form.Select>
                
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    name="Zip"
                    value={data.Zip}
                    onChange={inputEvent}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check out the all data field"
                />
              </Form.Group>

              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
