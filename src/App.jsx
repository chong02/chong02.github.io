import { useState } from 'react'
import noteworthyLogo from './images/noteworthy_logo.png'
import background from './images/noteworthy_group.jpg'
import youtubeLogo from './images/youtube_logo.png'
import instagramLogo from './images/instagram_logo.png'
import facebookLogo from './images/facebook_logo.png'
import tiktokLogo from './images/tiktok_logo.png'
import groupPhoto from './images/group1.jpg'
import './App.css'
import Logo from './components/Logo.jsx'
import NavBar from './components/NavBar.jsx'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="page">
        <div className="navbar">
          <NavBar/>
        </div>
        <div className="logo">
          <Logo/>
        </div>

        <img className="background" src={background} height="900" width="1200"/>

        <div className="pageTitle">
          <div className="content">
            <h1>Noteworthy A Capella</h1>
            <div className="socials">
              <a href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA">
                <img src={youtubeLogo} height="30" width="30"/>
              </a>
              <a href="https://www.instagram.com/cal_noteworthy/">
                <img src={instagramLogo} height="30" width="30"/>
              </a>
              <a href="https://www.facebook.com/Noteworthy">
                <img src={facebookLogo} height="30" width="30"/>
              </a>
              <a href="https://www.tiktok.com/@uc_noteworthy">
                <img src={tiktokLogo} height="30" width="30"/>
              </a>
            </div>
          </div>
        </div>

        <div className="home1">
          <img src={groupPhoto} height="300" width="400"/>
          <div className="tileContent">
            <h3>Lower-voices A Cappella </h3>
            <h3> Group @ UC Berkeley</h3>
            <Link to="/about"><button>learn more</button></Link>
          </div>
        </div>
      </div>
    </>
      
    // </Router>
    // <>
    //   <div>
    //     <NavBar></NavBar>
    //   </div>
    //   <p> Hello world </p>
    // </>
  )
}

export default App
