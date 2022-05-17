import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import InfoCards from '../sections/info-cards';

function Page() {
  return (
    <>
    <section className="text-and-image bg-f7f8f9-bigknot-right">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>Careers @ NGC</h2>
          <h4>Imagine a place...</h4>
          <p>Imagine a place that empowers the entrepreneurial spirit. A place on the cutting edge of an exciting new industry loaded with opportunity. A place whose very company DNA is anchored in three simple words, ‘to do good’.</p>
          <p>Northern Green is just such a place. Founded on a belief in creating a work environment that nurtures creativity, we strive empower our people to create something special. If you’re a self starter, a problem solver, someone seeking a challenge to help others, then we may be just the place for you.</p>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>

    <InfoCards />

    </>
  );
}

export default Page;