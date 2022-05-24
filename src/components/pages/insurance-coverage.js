import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import InfoCards from '../sections/info-cards';
import { Helmet } from 'react-helmet';

const pageTitle = 'Insurance Coverage for Medical Cannabis | Northern Green Canada';

function VetSupport() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section className="text-and-image">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>Insurance Coverage for Medical Cannabis</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aspernatur, eius incidunt enim numquam quibusdam dicta reprehenderit alias animi. Fugiat accusamus non eveniet ducimus eum laborum cupiditate aperiam earum, ipsa.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, repellendus officiis, animi voluptates quis adipisci iure veritatis omnis, nihil eveniet quas accusamus sequi vero commodi placeat quidem saepe libero mollitia.</p>
          <Link to="/" className="primary-link">
            Test Link
          </Link>
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
