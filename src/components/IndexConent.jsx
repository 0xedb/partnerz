import React from 'react';
import Service from '../components/Service';
import planning from '../static/images/planning.svg';
import investment from '../static/images/investment.svg';
import welfare from '../static/images/welfare.svg';
import consulting from '../static/images/consulting.svg';
import quote from '../static/images/quote_start.svg';

function IndexConent() {
  return (
    <main id="page_content" className="page_content">
      <div className="description_container">
        <div className="content_heading">
          <h2>Financial stability for everyone, by the experts</h2>
        </div>
        <div className="content_line"></div>
        <div className="partnerz_description">
          <div><img className="quote_image" src={quote} alt="quote" /></div>
          <p>
            Partnerz FP is an advisory firm with a daring quest to use financial
            structures to affect lives positively. We are responsible for
            crafting world-class financial solutions that touches individuals,
            corporates, and governments.
          </p>
        </div>
      </div>
      <div className="services_container">
        <section className="services">
          <h2>Our Services</h2>
          <Service
            title="Financial Planning"
            pic={planning}
            description="Partnerz FP works with individual clients and employers to deliver cut-through 
       financial planning services. We have been very instrumental in reshaping the lives of 
       redundant bankers who suffered the banking crises by helping them build emergency funds beforehand."
          />
          <Service
            title="Investments"
            pic={investment}
            description="Diasporians looking to invest in the service sectors now have a trusted partner.
        We also saved GH₵1.6 million of clients money from the Menzgold-Bitcoin bust by asking them 
        to withdraw or sell off. We believe we owe our clients that fiduciary responsibility"
          />
          <Service
            pic={welfare}
            title="Scheme Administration"
            description="Currently working with 19 different unions/associations/churches. With over 21,384 
       members under their belt, we are forgin a future for their membership using the very principles
        of financial planning at a large scale."
          />
          <Service
            pic={consulting}
            title="Strategy Consulting"
            description="Gradually, we are becoming a household name in the starup ecosystem in Ghana.
        We have advised 12+ startups from ideation to funding, go-to-market strategies, 
        and to first 1000 customers."
          />
        </section>
      </div>
    </main>
  );
}

export default IndexConent;
