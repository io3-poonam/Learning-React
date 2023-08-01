import React from "react";
import "./style.css";
import UpperButton from "./MainCenterUpperBtn";
import Live from "./icon/live.png";
import Links from "./MainCenterUpperBtn"
import YouTubePremiue from "./icon/youtube main.png";
import YouTubeKids from "./icon/youtube kids.png";
import YouTubeSetting from "./icon/youtube setting.png";
import YouTubeMusic from "./icon/youtube circle.png";

import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import NextPlanOutlinedIcon from "@mui/icons-material/NextPlanOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import Accord from "./accordion";

const SideBar = () => {
  return (
    <>
      <div id="container-center">
        {/* - ------Side Navbar- start------ -- */}
        <nav className="navbar-left">
          <ul className="nav-menu-item">
            <div className="side-nav-section">
              <a href={Links} className="nav-item">
                <HomeIcon className="ytb-color-icon" />{" "}
                <li className="nav-icon">Home</li>
              </a>
              {/* <li className="nav-item"> */}
              {/* ---link second page----  */}
              {/* <a href="./youtube2.html"><i className="fa-solid fa-fire-flame-curved nav-icon"></i>Explore</a>
                    </li> */}
              <a href={Links} className="nav-item">
                <SlideshowIcon className="ytb-color-icon" />{" "}
                <li className="nav-icon">Shorts</li>
              </a>
              <a href={Links} className="nav-item">
                <SubscriptionsOutlinedIcon className="ytb-color-icon" />{" "}
                <li className="nav-icon">Subscription</li>
              </a>
            </div>
            <p className="border-bottom"></p>

            <div className="side-nav-section">
              <a href="#" className="nav-item">
                <VideoLibraryOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Libray</li>
              </a>
              <a href="#"className="nav-item">
                <NextPlanOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon"> History</li>
              </a>
              <a href="#" className="nav-item">
                <WatchLaterOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Watch Later</li>
              </a>
              <a href="#" className="nav-item">
                <VideoLibraryOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Your video</li>
              </a>
              <a href="#" className="nav-item">
                <ThumbUpOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Likes video</li>
              </a>
              <a href="#" className="nav-item">
                <li className="nav-icon">
   <Accord/>

                </li>
              </a>
            </div>
            <p className="border-bottom"></p>
            <div className="side-nav-section">
              <li>
                <h3>SUBSCRIPTION</h3>
              </li>

              <li className="nav-item">
                <a href="#">
                  <i className="fa-solid fa-circle-plus nav-icon"></i> Browse
                  channels
                </a>
              </li>
            </div>
            <p className="border-bottom"></p>
            <div className="side-nav-section">
              <li>
                <h3>EXPlORE</h3>
              </li>
              <a href="#" className="nav-item">
                <LocalFireDepartmentOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Trending</li>
              </a>
              <a href="#" className="nav-item">
                <MusicNoteOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Music</li>
              </a>
              <a href="#" className="nav-item">
                <ShoppingBagOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Shopping</li>
              </a>
              <a href="#" className="nav-item">
                <img src="" />
                {/* <Live className="ytb-color-icon" /> */}
                <img
                  src={Live}
                  alt="live"
                  className="ytb-color-icon"
                  style={{ width: "28px", height: "28px" }}
                />
                <li className="nav-icon">Lives</li>
              </a>
              <a href="#" className="nav-item">
                <NewspaperOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">News</li>
              </a>
              <a href="#" className="nav-item">
                <TheatersOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Films</li>
              </a>
              <a href="#" className="nav-item">
                <SportsEsportsOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Gaming</li>
              </a>
              <a href="#" className="nav-item">
                <StorefrontOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Fashsion & Beauty</li>
              </a>
              <a href="#" className="nav-item">
                <LightbulbOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Learning</li>
              </a>
              <a href="#" className="nav-item">
                <EmojiEventsOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Short</li>
              </a>
            </div>
            <p className="border-bottom"></p>
            <div className="side-nav-section">
              <li>
                <h3>More From Youtube</h3>
              </li>
              <a href="#" className="nav-item">
                <img src={YouTubeSetting} className="ytb-color-icon"  style={{width:"20px", height:"20px"}}/>
                <li className="nav-icon"> Youtube Studio</li>
              </a>

              <a href="#" className="nav-item">
                <img src={YouTubeMusic} className="ytb-color-icon" style={{width:"20px", height:"20px"}} />
                <li className="nav-icon"> YouTube Music</li>
              </a>
              <a href="#" className="nav-item">
                <img src={YouTubeKids} className="ytb-color-icon" style={{width:"20px", height:"20px"}} />
                <li className="nav-icon"> YouTube Kids</li>
              </a>

              <a href="#" className="nav-item">
                <img src={YouTubePremiue} className="ytb-color-icon"  style={{width:"20px", height:"20px"}}/>
                <li className="nav-icon"> YouTube Premiue</li>
              </a>
            </div>
            <p className="border-bottom"></p>
            <div className="side-nav-section">
              <a href="#" className="nav-item">
                <SettingsOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon">Setting</li>
              </a>

              <a href="#" className="nav-item">
                <OutlinedFlagOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon"> Report history</li>
              </a>
              <a href="#" className="nav-item">
                <HelpOutlineOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon"> Help</li>
              </a>
              <a href="#" className="nav-item">
                <FeedbackOutlinedIcon className="ytb-color-icon" />
                <li className="nav-icon"> Send feedback</li>
              </a>
            </div>
            <p className="border-bottom"></p>
          </ul>

          <p className="para">
            About pass copyright Cantact us creator Advertise Develo
          </p>
          <p className="para">
            Terms Privacy Plocy & Safety How YouTube works Test new featurs
          </p>
          <p className="paar">&#169;2022 Google LLC</p>
        </nav>
< UpperButton />

      </div>
      {/* ------Side Navbar- end------ */}
    </>
  );
};
export default SideBar;
