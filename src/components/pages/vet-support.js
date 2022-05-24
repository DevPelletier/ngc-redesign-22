import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import InfoCards from '../sections/info-cards';
import { Helmet } from 'react-helmet';

const pageTitle = 'Veterans Support | Northern Green Canada';

function VetSupport() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section className="text-and-image">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>Northern Green Supports Canada's Veterans</h2>
          <p>Northern Green is dedicated to helping you navigate the Veterans Affairs Canada system. We ensure you are getting all the benefits and entitlements you deserve and access the medication you need.</p>
          <p>If approved by Blue Cross/Veterans Affairs, you may qualify for full coverage of up to 3g per day.  For those requiring more than 3g per day, NGC can assist by providing the additional documentation required by VA/Blue Cross. Our knowledgeable team will help you select and register with the licensed producer that best suits your needs for a smooth and painless experience.</p>
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
