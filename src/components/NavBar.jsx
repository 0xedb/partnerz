import React from 'react';
import partnerz_logo from '../static/images/partnerz_logo.svg';
import menu from '../static/images/menu.svg';
import {Icon} from 'antd';
import {Link} from 'gatsby';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar_content">
        <div className="navbar_item nav_menu"> 
          <Icon className='nav_icon' type="menu" />
        </div>
        <div className="navbar_item">
          <a className="btn_link" href="#">
            <img
              className="navbar_brand"
              src={partnerz_logo}
              alt="partnerz logo"
            />
          </a>
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
