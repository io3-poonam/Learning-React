import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
const SameProps = (props) => {
  return (
    <>
      <section className=" Headers d-flex align-items-center " >
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-10 mx-auto">
             <div className="row">
              <div
                className="col-md-6 pt-5 
pt-lg-0  order-2 order-lg-1 d-flex flex-column justify-content-center"
              >
                <h2>
                  {props.name} <br/><strong style={{ color: "skyblue" }}>Techno Graphy</strong>
                </h2>
                <p className="my-3">
                {props.details}
                </p>
                <div>
                  <Nav.Link to={props.visit} className="btn-get-started">
                    <Button variant="light">{props.btnClasses}</Button>
                  </Nav.Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src={props.imgSrc}className="img-fluid animated" alt="animated"/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
export default SameProps;
