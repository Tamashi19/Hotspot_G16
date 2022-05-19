import "../Assets/css/style.css"
import React from 'react'
import LOGO from "../Assets/img/LOGO_B.png"




export default function Header() {
  return (
    
    <div>
      <header>
        <div className="container">
          <div className="header_container">
          <a href="/">
            <img src={LOGO} onClick alt="" />
            </a>
          </div>
        </div>
      </header>
    </div> 
  );
}
