import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import InfoCards from '../sections/info-cards';

function Page() {
  return (
    <>
    <section className="text-and-image">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>Northern Green Supports Seniors</h2>
          <p>Living on a retirement income or CP benefits can create barriers to access for seniors who rely on medical cannabis for relief. Our aim is to help you access affordable medication by giving you greater access to cannabis medicines that best fits your needs and budget. NGC is now offering a seniors discount with proof of income or CP payments. Learn more about our seniors discount program, and how to apply below.</p>
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

export default Page;
