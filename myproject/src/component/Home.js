import React from "react";
import './Home.css';

const Home=()=>{
    return<>
    
    <div className="navbar">
        <ul>
            <li> <a href="https://twitter.com/home" target="_blank">Home</a></li>
            <li><a href="https://twitter.com/explore" target="_blank">Moments</a></li>
            <li><a href="https://twitter.com/notifications" target="_blank">Notification</a></li>
            <li><a href="https://twitter.com/messages" target="_blank">Messager</a></li>
           <a href="https://twitter.com/misoffice21" target="_blank"><button className="bttn"> Button</button></a> 
        </ul>
        
    </div>
    <button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>
    </>
    
}
export default Home;