import React from "react";
import "./style.css";
import IconConsole from "./icon/console.png";
import IconLetterP from "./icon/letter-p.png";
import IconVideoCamera from "./icon/video-camera.png";
import IconYoutube from "./icon/youtube.png";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const Header=()=>{
    return(<>
     <header className="main-header navBar">
         <div  id="start" className="style_scope">   
                   {/* back icon */}
         <MenuIcon className="menuIcon"/>
           {/*  <a href="#" target="_blank"> */}
             <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="logo" width="220px"
                height="35px" title="YouTube Home" className="ytub-logo" />
                
         {/* </a> */}
                <span id="country-code" className="style-scope ytd-topbar-logo-renderer">
                    IN
                  </span>
         </div>
        
            <div id="center"  className="style_scope">
                <form>
                    <input type="text" placeholder="Search" value="Search" name="Search" className="input-Box"/>
                </form>
                <div className="glass">
                <SearchIcon className="search-glass"/>
                    <span className="tooltiptext">Search</span>
                </div>
                <div className="microphone">
                    <KeyboardVoiceIcon/>
                    <span className="tooltiptext">Search with your voice</span>
                </div>
            </div>
            <div id="right"  className="style_scope">
                <div className="youtube">

                    <img src={IconVideoCamera} alt="video" />
                    <span className="tooltiptext">Create</span>
                </div>
                <div className="notification fa-bell">
                 <NotificationsNoneIcon/>
                    <span className="tooltiptext">Notification</span>
                </div>
                <div className="right-image">
                    <img src={IconLetterP} alt="p" />
                </div>
            </div>
          
        </header></>)
}
export default Header;