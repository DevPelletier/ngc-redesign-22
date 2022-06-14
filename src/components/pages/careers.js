import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import InfoCards from '../sections/info-cards';
import { Helmet } from 'react-helmet';

const pageTitle = 'Careers @ Northern Green Canada';

function Page() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <section className="text-and-image bg-f7f8f9-bigknot-right">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>Careers<br />@ Northern Green Canada</h2>
          <h4>Imagine a place...</h4>
          <p>Imagine a place that empowers the entrepreneurial spirit. A place on the cutting edge of an exciting new industry loaded with opportunity. A place whose very company DNA is anchored in three simple words, ‘to do good’.</p>
          <p>Northern Green is just such a place. Founded on a belief in creating a work environment that nurtures creativity, we strive to empower our people to create something special. If you’re a self starter, a problem solver, someone seeking a challenge to help others, then we may be just the place for you.</p>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/test-imgs/E2C36A83-9363-4DA7-B02A-F74325652E8D.jpeg" alt=""/>
        </div>
      </div>
    </section>

    <InfoCards />

    </>
  );
}

export default Page;
