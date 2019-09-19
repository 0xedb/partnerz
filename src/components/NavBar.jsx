import React from 'react';
import partnerz_logo from '../static/images/partnerz_logo.svg';
import menu from '../static/images/menu.svg';
import book from '../static/images/book.svg';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar_content">
        <div className="navbar_item nav_menu">
          <img className="nav_icon" src={menu} alt="menu" title="menu" />
        </div>
        <div className="navbar_item">
          <img
            className="navbar_brand"
            src={partnerz_logo}
            alt="partnerz logo"
          />
        </div>
        <div className="navbar_item">
          <img className="nav_icon" src={book} alt="book" title="book" />
        </div>
      </div>
      <div className="menu_overlay">hello world!!</div>
    </nav>
  );
}

export default NavBar;
