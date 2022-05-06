import "../Assets/css/style.css"
import React from 'react'
import LOGO from "../Assets/img/LOGO_B.png"




export default function Header() {
  return (
    
    <div>
      <header>
        <div className="container">
          <div className="header_container">
            <img src={LOGO} alt="" />
            
          </div>
        </div>
      </header>
    </div> 
  );
}
