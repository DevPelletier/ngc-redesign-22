import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import InfoCards from '../sections/info-cards';
import { Helmet } from 'react-helmet';

const pageTitle = 'Healthcare Partners | Northern Green Canada';


function Page() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section className="text-and-image">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>Healthcare Practitioners<br />& Clinics</h2>
          <p>To our valued Healthcare Partners - thank you for working with Northern Green Canada! Find all necessary information and documents for Practitioners & Clinics below. For information on our current product line, please see our <a href="/shop">Shop</a> or our <strong>Medical Cannabis Product Booklet</strong>.</p>
          <Link to="" className="primary-link">
            Medical Cannabis Product Booklet
          </Link>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>


    <InfoCards />


    <section className="text-and-image">
      <div className="inner-section width-02 two-col-even">
        <div className="img-container col-width-md push-left border-radius bottom">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
        <div className="text-container top">
          <h2>We'd Love To Connect With You</h2>
          <p>If you can't find something that you're looking for, or have any questions about Northern Green Canada, please contact:</p>
          <h4>Emma Catto <br />Client Services Lead</h4>
          <p><a href="">ECatto@northerngreencanada.com</a><br /><a href="">1-866-233-3707</a></p>
          <p>If you would like to inquire further about Clinic partnerships with our Business Development team, please contact:</p>
          <h4>Kathryn Freer <br />VP Business Development & Communications</h4>
          <p><a href="">KFreer@northerngreencanada.com</a></p>
        </div>
      </div>
    </section>



    </>
  );
}

export default Page;
