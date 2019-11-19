import React from "react";
import partnerz from "../static/images/partnerz_logo.svg";

function FormNav() {
  return (
    <nav className="navbar_item form_nav"> 
        <a className="navbar-item" href='/'>
          <img className="form_nav_img" src={partnerz} alt="partnerz logo" />
        </a> 
    </nav>
  );
}

export default FormNav;
