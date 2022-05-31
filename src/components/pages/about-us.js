import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import DarkLogoStampSection from '../sections/dark-logostamp-section';
import WindowSection from '../sections/window-section';
import OffsetImageSection from '../sections/offset-image-section';
import ExploreProds from '../sections/exploreprods';


function AboutUs() {
  return (
    <>
    <section className="text-and-image bg-f7f8f9-bigknot-right section-padding-lg-lg ">
      <div className="inner-section width-02 two-col-even">
        <div className="img-container col-width-md push-left border-radius">
          <img src="imgs/056-4to3-V.jpg" alt=""/>
        </div>
        <div className="text-container">
          <h3>Our Story</h3>
          <h2>We are a company founded in friendship</h2>
          <p>Her name was Ann. And it was the debilitating impact of chemotherapy in her fight against small cell lung cancer that led friends and Northern Green Canada founders, Lisa and Mary, to help Ann investigate alternative treatments. Their search led them to discover cannabis oils as a remedy for the profound nausea afflicting their best friend.</p>
          <br /><br />
          <h4>...and inspired by discovery</h4>
          <p>This discovery changed the way Lisa and Mary thought about cannabis. It sparked their impassioned drive to create a company dedicated to helping others through the use and innovation of medical cannabis; to start Northern Green Canada, a company founded on compassion and friendship. </p>
        </div>
      </div>
    </section>

    <section className="text-and-image">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>At Northern Green Canada, We Put You And Your Health First</h2>
          <p> Northern Green Canada has built a highly controlled, pesticide-free, state-of-the-art hydroponic facility, where our expert grow team cultivates cannabis strains that are industry-leading in quality and consistency.</p>
          <p>Anchored by our grow team’s 40 plus years of collective experience, our hydroponic process in which we control all aspects of the environmental conditions – temperature, humidity, nutrients – enables us to cultivate pharma grade medical cannabis of exceptional quality.</p>
          <p>We support our patients, always. Led by our Medical Health Director, our patient support and customer service personnel provide knowledgeable and friendly advice and guidance. Our focus is on you and your well-being.</p>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/002-4to3-V.jpg" alt=""/>
        </div>
      </div>
    </section>

    <DarkLogoStampSection />
    <ExploreProds />
    <WindowSection />
    <OffsetImageSection />




    </>
  );
}

export default AboutUs;
