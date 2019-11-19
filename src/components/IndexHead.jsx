import React from 'react';
import NavBar from './NavBar';
import planning from '../static/images/main_bg_mobile_0.jpg';
import planning0 from '../static/images/main_bg_desktop_0.jpg';
import {Icon} from 'antd';

function IndexHead() {
  return (
    <header className="page_head">
      <NavBar />
      <div className="to_content">
        <a href="#page_content">
          <Icon className='arrow_image' type="down" style= {{fontSize:'24', heigh:'24'}} />
        </a>
      </div>
      <section className="head_content">
        <div className="head_info">
          <div className="info_container">
            <h1 className="slogan">We're the Financial Architects</h1>
            <div className="slogan_details">
              At Partnerz, we engineer and bring to life the financial goals and
              aspirations of hardworking people
            </div>
          </div>
        </div>
        <div className="bg_container">
          <picture>
            <source srcSet={planning0} media="(min-width: 650px)"></source>
            <img className="bg_image" src={planning} alt="financial planning" />
          </picture>
        </div>
      </section>
    </header>
  );
}

export default IndexHead;
