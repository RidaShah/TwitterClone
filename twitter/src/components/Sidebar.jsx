import React from 'react'
import {FaTwitter, 
    FaHome, 
    FaHashtag, 
    FaBell, 
    FaEnvelope, 
    FaBookmark,
    FaListAlt,
    FaDotCircle,
    FaMehBlank } from  "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
              <li>
                  <a href="">
                      <FaTwitter  className="icons logo"/>
                  </a>
                  </li> 

                  <li>
                  <a href="">
                      <FaHome className="icons logo"/>
                      Home
                  </a>
                  </li>  
                  <li>
                  <a href="">
                      <FaHashtag className="icons"/>
                      Explore
                  </a>
                  </li> 
                  <li>
                  <a href="">
                      <FaBell className="icons"/>
                      Notifications
                  </a>
                  </li>  
                  <li>
                  <a href="">
                      <FaEnvelope className="icons"/>
                      Messages
                  </a>
                  </li> 
                  <li>
                  <a href="">
                      <FaBookmark className="icons"/>
                      Bookmarks
                  </a>
                  </li> 
                  <li>
                  <a href="">
                      <FaListAlt className="icons"/>
                      Lists
                  </a>
                  </li>   
                  <li>
                  <a href="">
                      <FaDotCircle className="icons"/>
                      Profile
                  </a>
                  </li>  
                  <li>
                  <a href="">
                      <FaMehBlank className="icons"/>
                      More
                  </a>
                  </li>  
            </ul>  
            <div className="tweet_btn">
            <a >Tweet</a> 
            </div>
                 
        </div>
    )
}

export default Sidebar
