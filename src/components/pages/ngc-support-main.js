import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import InfoCards from '../sections/info-cards';
import { Helmet } from 'react-helmet';

const pageTitle = 'Patient Support Programs | Northern Green Canada';


function SupportMain() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

      <section className="text-and-image">
        <div className="inner-section width-02 two-col-even">
          <div className="text-container">
            <h2>NGC Patient Support Programs</h2>
            <p>At NGC, everything we do is in support of our patients. We believe that the therapeutic potential and power of medicinal cannabis should be available to all patients who require it. That's why we are proud to offer discount and pricing programs that improve affordability and access to medicinal cannabis.</p>
            <p>See our current discount and pricing programs below. If you don't find a program that you qualify for, but are in need of assistance, please contact our Client Services team and we would be happy to help!
            </p>
            <Link to="/" className="primary-link">

            </Link>
          </div>
          <div className="img-container col-width-md push-right border-radius">
            <img src="imgs/026-4to3-V.jpg" alt=""/>
          </div>
        </div>
      </section>

      <InfoCards />
    </>
  );
}

export default SupportMain;
