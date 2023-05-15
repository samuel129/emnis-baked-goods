import { useState } from 'react'
import './header-1.css'

export default function HeaderOne() {
  const [positionY, setPositionY] = useState("-70%");
  
  const mobileMenuStyle = {
    top: positionY
  }

  function mobileMenuButton() {
    if (positionY == "50px") {
      setPositionY("-70%");
    }
    else {
      setPositionY("50px");
    }
  }

  return (
    <>
    <div className="headerOne" style={{backgroundImage:`url("header-bg.png")`}}>

      <svg className="mobile-bars" onClick={mobileMenuButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
      </svg>

      <img className="header-logo" src="header-logo.png"></img>
      <div className="header-nav-button">HOME</div>
      <div className="header-nav-button">COOKIES</div>
      <div className="header-nav-button">ABOUT US</div>
      <div className="header-nav-button">CONTACT US</div>
      <div className="header-nav-button"></div>
      <a className="header-order-button" href="https://docs.google.com/forms/d/1jJQaxa0gB24S6kVHmQkePKxbJGc0x5oDUC3L6U61c1E/viewform?edit_requested=true" target="_blank">
        ORDER ONLINE
      </a>
    </div>
    
    <div className="mobileMenu" style={mobileMenuStyle}>
      <div className="mobileMenuFirstRow">
        <img className="header-instagram-logo" src="instagram-logo.svg"></img>
      </div>
      <div className="mobileMenuRow">HOME</div>
      <div className="mobileMenuRow">COOKIES</div>
      <div className="mobileMenuRow">LOAVES</div>
      <div className="mobileMenuRow">CONTACT US</div>
    </div>

      <img className="headerOne-instagramLink"></img>
      <img className="headerOne-mapLogo"></img>
    </>
  )
}