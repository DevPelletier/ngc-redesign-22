import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import InfoCards from '../sections/info-cards';

function VetSupport() {
  return (
    <>
    <section className="text-and-image">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>Northern Green Compassionate Pricing</h2>
          <p>NGC offers a Compassionate Pricing Program to our clients who qualify for financial assistance to obtain medical cannabis. Our goal is to protect your safety and empower your ability to get access to medical cannabis for your health care needs. At NGC, our Compassionate Pricing Program is applicable to all our products and strains. We believe in staying inclusive and enabling our clients to apply their Compassionate Pricing discount to any strain and product we offer.</p>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="../imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>

    <InfoCards />

    </>
  );
}

export default VetSupport;
