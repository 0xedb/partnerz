import React from 'react';
import partnerz_logo from '../static/images/partnerz_logo.svg';
import menu from '../static/images/menu.svg';
import book from '../static/images/book.svg';
import {Icon} from 'antd';
import {Link} from 'gatsby';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar_content">
        <div className="navbar_item nav_menu">
          <img
            onClick={() => console.log('clicked')}
            className="nav_icon"
            src={menu}
            alt="menu"
            title="menu"
          />
        </div>
        <div className="navbar_item">
          <Link className="btn_link" to="#">
            <img
              className="navbar_brand"
              src={partnerz_logo}
              alt="partnerz logo"
            />
          </Link>
        </div>
        <div className="navbar_item"> 
        <Link to='/form'><Icon className="nav_icon" type="form" style={{color: 'white'}} /></Link>         
        </div>
      </div>
      <div className="menu_overlay"></div>
      <div className="stock_feed">
        <iframe
          id="myframe"
          style={{width: '100%'}}
          src="https://gsestockfeed.com/style2.php"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
        ></iframe>
      </div>
    </nav>
  );
}

export default NavBar;
