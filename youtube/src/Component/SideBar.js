import React from "react";
import "./style.css";
import HomeIcon from '@mui/icons-material/Home';

const SideBar=()=>{
    return(<>
    <aside>
        {/* - ------Side Navbar- start------ -- */}
        <nav className="navbar-left">
            <ul className="nav-menu-item">
                <div className="side-nav-section">
                <a href="#" className="nav-item">
                <HomeIcon className="ytb-color-icon"/>  <li className="nav-icon">Home
                    </li></a>
                    <li className="nav-item">
                 {/* ---link second page----  */}
                 <a href="./youtube2.html"><i className="fa-solid fa-fire-flame-curved nav-icon"></i>Explore</a>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-clapperboard nav-icon"></i>Shorts</a>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fab fa-youtube nav-icon"></i>Subscription</a>
                    </li>
                </div>
<p className="border-bottom"></p>

                <div className="side-nav-section">
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-photo-film nav-icon"></i>Libray</a></li>
                    <li className="nav-item"><a href="#"><i
                                className="fa-solid fa-clock-rotate-left nav-icon"></i>History</a>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-clock nav-icon"></i>Watch Later</a></li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-thumbs-up nav-icon"></i>Liked video</a>
                    </li>
                </div>
<p className="border-bottom"></p>
                <div className="side-nav-section">
                    <li>
                        <h3>SUBSCRIPTION</h3>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-circle nav-icon"></i> infoxygen</a></li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-circle-plus nav-icon"></i> Browse
                            channels</a>
                    </li>
                </div>
<p className="border-bottom"></p>
                <div className="side-nav-section">
                    <li><h3>EXPlORE</h3></li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-photo-film nav-icon"></i>films</a></li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-cubes nav-icon"></i>Gaming</a></li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-building nav-icon"></i>Fashion &
                            beauty</a></li>
                    <li className="nav-item"><a href="#"><i className="fa-brands fa-leanpub nav-icon"></i>Learing</a></li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-trophy nav-icon"></i>Sport</a></li>
                </div>
<p className="border-bottom"></p>
                <div className="side-nav-section">
                    <li>
                        <h3>MORE FROM YOUTUBE</h3>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-brands fa-youtube nav-icon"></i>Creator Studio</a>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-music nav-icon"></i>YouTube Music</a>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-brands fa-youtube nav-icon"></i>YouTube Kids</a>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-tv nav-icon"></i>YouTube TV</a></li>
                </div>
<p className="border-bottom"></p>
                <div className="side-nav-section">
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-gear nav-icon"></i>Setting</a></li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-flag nav-icon"></i>Report history</a>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-solid fa-circle-question nav-icon"></i>Help</a>
                    </li>
                    <li className="nav-item"><a href="#"><i className="fa-regular fa-comment nav-icon"></i>Send
                            feedback</a>
                    </li>
                    </div>
<p className="border-bottom"></p>
            </ul>

            <p className="para">About pass copyright Cantact us creator Advertise Develo</p>
            <p className="para">Terms Privacy Plocy & Safety How YouTube works Test new featurs</p>
            <p className="paar">&#169;2022 Google LLC</p>
        </nav>
    </aside>
           {/* ------Side Navbar- end------ */}
         </>)
}
export default SideBar;