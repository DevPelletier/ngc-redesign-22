import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import InfoCards from '../sections/info-cards';
import { Helmet } from 'react-helmet';

const pageTitle = 'Client Forms | Northern Green Canada';

function Page() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <section className="text-and-image">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>NGC Client Forms</h2>
          <p>Thank you for your interest in registering with Northern Green Canada! Find all of our client on-boarding forms and documents below.</p>
          <p>If you have any questions, or need assistance at any point throughout the registration process, please contact our Client Services Team at:</p>

          <Link>
            ClientServices@NorthernGreenCanada.com
          </Link>
          <br /><br />
          <Link>
            1-866-233-3707
          </Link>

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
