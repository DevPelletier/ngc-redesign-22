import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import RegistrationForm from '../registration-form';
import { Helmet } from 'react-helmet';

const pageTitle = 'Transfer Your Prescription | Northern Green Canada';


function Page() {
  const scrollToForm = () => {
    document.getElementById("reg-form-sec").scrollIntoView({behavior: "smooth"});
  }


  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section className="text-and-image text-centered">
      <div className="inner-section width-02 two-col-even">
        <div className="text-container">
          <h2>Transfer Your Prescription to NGC</h2>
          <p>Want to access NGC products, but already have a valid medical document or prescription with another Licensed Cannabis Producer? No problem!</p>
          <p>Firstly, you must sign up with NGC as a registered patient, as per Health Canada regulations. Complete the Registration Form below to sign up - it takes less than 2 mins!</p>
          <p><span class="material-symbols-rounded background scrolltobtn" onClick={scrollToForm}>arrow_downward</span></p>
          <p>Once you are registered with us, simply email your LP and request that your medical document be transferred to us - Northern Green Canada. Feel free to include our contact information as well, to expedite the process.</p>
          <p>If you have any difficulty, please contact our Client Services team - we'd be happy to help!</p>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>

    <RegistrationForm />

    </>
  );
}

export default Page;
