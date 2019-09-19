import React from 'react';
import NavBar from './NavBar';
import planning from '../static/images/agreement_mobile_0.jpg';

function IndexHead() {
  return (
    <header className="page_head">
      <NavBar />
      <section className="head_content">
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
