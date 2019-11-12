import React from "react";
import partnerz from "../static/images/partnerz_logo.svg";

function FormNav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href='/'>
          <img className="form_nav_img" src={partnerz} alt="partnerz logo" />
        </a>
      </div>
    </nav>
  );
}

export default FormNav;
