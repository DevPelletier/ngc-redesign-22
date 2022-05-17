import React from 'react';
import '../../styles/app.scss';
import '../../styles/components/find-a-clinic.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import InfoCards from '../sections/info-cards';


function Page() {
  return (
    <>
    <section className="text-and-image bg-f7f8f9-bigknot-right">
      <div className="inner-section width-01 two-col-40-60">
        <div className="text-container">
          <h2>Find An Affiliate Clinic Near You</h2>
          <p>The NGC Affiliate Clinic network is a growing group of Healthcare Practitioners, including physicians, nurses, and medical cannabis specialists, that are experts in medical cannabis.</p>
          <p>The Northern Green medical staff have thoroughly vetted each Affiliate Clinic to ensure that any visitor of these clinics will receive the best possible education and care available in the industry.</p>
          <p>Healthcare Practitioners at NGC Affiliate Clinics will be able to assess a patient's candidacy for a medical cannabis prescription, the ideal cannabis products to prescribe, how to dose and treat your condition, and to recommend a Licensed Producer such as Northern Green Canada.</p>
        </div>
        <div className="maps-container col-width-md push-right border-radius">
          <iframe src="https://www.google.com/maps/d/u/4/embed?mid=19wu1uiX2_T9kYyS2iPT25WQEy83MbERP&ehbc=2E312F"></iframe>
        </div>
      </div>
    </section>

    <InfoCards />



    </>
  );
}

export default Page;
