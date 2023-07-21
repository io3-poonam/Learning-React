import React from "react";
import './footer.css';

const Footer=()=>{
    return<>
    
  {/* <!-- footer-start-- --> */}
  {/* <div className="container-fluid footer"> */}
    <div className="container-fluid Container">
        <div className="row text-white d-flex  pt-5 ">
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 my-2">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Links</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#">Partner</a>
            </li>
          </ul>
      
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 my-2">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Privacy Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Terms of Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Software Service Agreement</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Gossary</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 my-2">
          <ul>
            <strong className="text-light font-weight-bold">Address</strong>
            <li className="list-unstyled my-2">
              <a href="#" className="text-decoration-none d-flex text-light">
                <i className="fa-solid fa-location-dot h-100 me-2 mt-1"></i>
                <p className="d-inline">
                  5th Floor, North Wing, SJR The Hub, Survey Number 8, 2 & 9,
                  Marathahalli - Sarjapur Rd, Bengaluru, Karnataka 560103
                </p>
              </a>
            </li>
          </ul>
        </div> 
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 my-2">
          <ul>
            <strong className="text-light font-weight-bold">Contact</strong>
            <li className="list-unstyled my-2">
              <a href="#" className="text-decoration-none d-flex text-light">
                <i className="fa-regular fa-envelope me-2 mt-1"></i>
                <p className="d-inline">partner.institute@teachmint.com</p>
              </a>
            </li>

            <li className="list-unstyled my-2">
              <a href="#" className="text-decoration-none d-flex text-light">
                <i className="fa-solid fa-phone me-2 mt-1"></i>
                <p className="d-inline">08035073710 (8 AM - 8 PM Everyday)</p>
              </a>
            </li>
          </ul>
        </div> 
    </div>
    </div>

    <div className="container-fluid">
      <div className="row copy-right-footer border-top border-light" style={{backgroundColor: "#1f3965", paddingTop: "5px"}}>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mx-auto">
          <p className="text-light text-center">
            ©Copyright 2022 , XYZ Technologies Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
    

  {/* <!-- footer-end- --> */}
    </>
}
export default Footer;