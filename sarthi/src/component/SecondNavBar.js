import React from "react";
import "./style.css"
const SecondNavBar=()=>{
    return(<>
        {/* -- navbar start --*/}
    <navbar>
        <div className="navBar">
            <div className="navBar-1">
                <div className="selection-bar">
                    <label for="Leaner-Licence"> <a href="#" target="_blank">Leaner Licence</a></label>
                    <select name="Leaner-Licence" id="Leaner-Licence" className="ll-licence">
                        <option value="Leaner Licence">Leaner Licence</option>
                        <option value="Application For New Learner Licence">Application For New Learner Licence</option>
                        <option value="Expired Learner Licence Issue Again">Expired Learner Licence Issue Again</option>
                        <option value="Application Edit (For LL Only Before Fee Payment)">Application Edit (For LL Only Before Fee Payment)</option> <option value="Leaner Licence">Services For Duplicate LL, Address Change, Etc</option>
                        <option value="Application For New Learner Licence">LL Edit Entry</option>
                        <option value="Expired Learner Licence Issue Again">Print Learner Licence (Form3)</option>
                        <option value="Application Edit (For LL Only Before Fee Payment)">Tutorial For LL Test</option>
                    </select>
                </div>
                <div className="selection-bar">
                    <label for="Leaner-Licence"> <a href="#" target="_blank">Driving Licence</a></label>
                    <select name="Leaner-Licence" id="Leaner-Licence" className="ll-licence">
                        <option value="Driving Licence">Driving Licence</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="selection-bar">
                    <label for="Leaner-Licence"><a href="#" target="_blank">Conductor Licence</a></label>
                    <select name="Leaner-Licence" id="Leaner-Licence" className="ll-licence">
                        <option value="Conductor Licence">Conductor Licence</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="selection-bar">
                    <label for="Leaner-Licence"><a href="#" target="_blank">Driving School Licence</a></label>
                    <select name="Leaner-Licence" id="Leaner-Licence" className="ll-licence">
                        <option value="Driving School Licence">Driving School Licence</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="selection-bar">
                    <label for="Leaner-Licence"> <a href="#" target="_blank">Appointment </a></label>
                    <select name="Leaner-Licence" id="Leaner-Licence" className="ll-licence">
                        <option value="Appointment">Appointment</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="selection-bar">
                    <label for="Leaner-Licence"> <a href="#" target="_blank">Upload Document</a></label>
                    <select name="Leaner-Licence" id="Leaner-Licence" className="ll-licence">
                        <option value="Upload Document">Upload Document</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="selection-bar">
                    <label for="Leaner-Licence"> <a href="#" target="_blank"> Fee Payment</a></label>
                    <select name="Leaner-Licence" id="Leaner-Licence" className="ll-licence">
                        <option value="Fee Payment">Fee Payment</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="selection-bar">
                    <label for="Leaner-Licence"> <a href="#" target="_blank">Other</a></label>
                    <select name="Leaner-Licence" id="Leaner-Licence" className="ll-licence">
                        <option value="Other">Other</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="btn-3">
                    <a href="#" target="_blank"> <button>Application Status</button></a>
                </div>
                <div className="btn-4">
                    <a href="#" target="_blank"> <button>File Your Grievance</button></a>
                </div>
            </div>
        </div>
    </navbar>
    {/* -- navbar end -- */}
    </>)
}
export default SecondNavBar;