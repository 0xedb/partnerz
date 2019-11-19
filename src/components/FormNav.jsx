import React from "react";
import partnerz from "../static/images/partnerz_logo.svg";
import {Link} from 'gatsby';

function FormNav() {
  return (
    <nav className="navbar_item form_nav"> 
        <Link className="navbar-item" to='/'>
          <img className="form_nav_img" src={partnerz} alt="partnerz logo" />
        </Link> 
    </nav>
  );
}

export default FormNav;
