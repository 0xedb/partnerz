import React from 'react';
import NavBar from './NavBar';
import planning from '../static/images/agreement_mobile_0.jpg';

function IndexHead() {
  return (
    <header className="page_head">
      <NavBar />
      <section className="head_content">
        <div className="head_info">
          <div class="info_container">
            <h1>We're the Financial Architects</h1>
            <div>
              At Partnerz, we engineer and bring to life the goals and
              aspirations of hardworking people
            </div>
          </div>
        </div>
        <div className="bg_container">
          <picture>
            <source></source>
            <img className="bg_image" src={planning} alt="financial planning" />
          </picture>
        </div>
      </section>
    </header>
  );
}

export default IndexHead;
