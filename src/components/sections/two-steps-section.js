import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/two-steps-section.scss';

const homepage = {
  sectionTitle: 'How to Get Started',
  sectionParagraph: "In order to purchase medical cannabis from Northern Green Canada, Health Canada requires patients to (1) Sign up with NGC, and (2) Have a valid prescription. Don't worry, registering is quick and easy!",
  card1_Title1: 'Step 1:',
  card1_Title2: 'Sign Up With NGC',
  card1_P1: 'Quickly and easily register with us by clicking the button below. Our Registration Form takes about 1-2 minutes to complete.',
  card1_P2: 'Once you’ve submitted your registration, you will receive instructions within minutes on your next steps to obtaining a prescription for medical cannabis.',
  card1_P3: "Registering with us doesn't lock you into anything. You can choose to complete your registration with us by submitting your Medical Document at any time.",
  card1_btn: 'Sign Up Today',
  card2_Title1: 'Step 2:',
  card2_Title2: 'Get A Prescription',
  card2_P1: 'Book a visit with your chosen Healthcare Professional (HCP) for an assessment to obtain a medical cannabis prescription. This can be any prescribing HCP, from your family doctor to your local cannabis clinic! Book your assessment today and gain access to NGC medicinal cannabis within 24 hours.',
  card2_P2: 'Be sure to request that NGC is your chosen cannabis provider. They will be able to find the necessary info and forms at our HCP & Clinic Resource Hub.',
  card2_btn: 'Find A Clinic'
}

const register = {
  sectionTitle: 'Next Step: Get Your Prescription For Medicinal Cannabis',
  sectionParagraph: 'In order to purchase medical cannabis from Northern Green Canada, you must be a registered NGC client. Registering is quick and easy! See the 2 simple steps to becoming an NGC client below:',
  card1_Title1: 'Step 1:',
  card1_Title2: 'Sign Up With NGC',
  card1_P1: 'COMPLETE!',
  card1_P2: 'You will receive a confirmation email from us within moments.',
  card1_P3: "If you don’t see this email in your inbox (or your spam folder) within 15 minutes, please contact our Client Services Team for assistance! Our team will ensure you are registered with us and assist you in getting your medical cannabis prescription.",
  card1_P4: 'ClientServices@NorthernGreenCanada.com | 1-866-233-3707 | Available Monday to Friday 8:00am to 4:30pm',
  card1_P5: 'Now for Step 2',
  card1_btn: 'Step 2: Get A Prescription',
  card2_Title1: 'Step 2:',
  card2_Title2: 'Get A Prescription',
  card2_P1: 'Your next step is to obtain a prescription for medical cannabis.',
  card2_P2: 'Book a visit with your chosen Healthcare Professional (HCP) for an assessment to obtain a medical cannabis prescription. This can be any prescribing HCP, from your family doctor to your local cannabis clinic! Book your assessment today and gain access to NGC medicinal cannabis within 24 hours.',
  card2_P3: 'XXX',
  card2_P4: 'XXX',
  card2_P5: 'Be sure to request to have NGC as your chosen provider! .',
  card2_btn: 'Find A Clinic Near You'
}


const TwoStepsSection = (props) => (
  <Switch>
    <Route path="/" exact>
      <section class="two-steps bg-f7f8f9-bigknot-center">
        <div class='inner-section width-02'>
          <h2>{homepage.sectionTitle}</h2>
          <p>{homepage.sectionParagraph}</p>
          <div className="two-steps-container">
            <div className="step-1 border-radius">
              <div>
                <h4>{homepage.card1_Title1}<br />{homepage.card1_Title2}</h4>
                <p>{homepage.card1_P1}</p>
                <p>{homepage.card1_P2}</p>
              </div>
              <Button
              buttonStyle="btn--secondary"
              url="/register"
              >
                {homepage.card1_btn}
              </Button>
            </div>
            <div className="step-2 border-radius">
              <div>
                <h4>{homepage.card2_Title1}<br />{homepage.card2_Title2}</h4>
                <p>{homepage.card2_P1}</p>
              </div>
              <Button
              buttonStyle="btn--primary"
              url="/find-a-clinic"
              >
                {homepage.card2_btn}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Route>
    <Route path="/register" exact>
      <section class="two-steps">
        <div class='inner-section'>
          <h2>{register.sectionTitle}</h2>
          <div className="two-steps-container">
            <div className="step-1">
              <div>
                <h4>{register.card1_Title1}<br />{register.card1_Title2}</h4>
                <h2>{register.card1_P1}</h2>
                <p>{register.card1_P2}</p>
                <p>{register.card1_P3}</p>
                <p><strong>ClientServices@NorthernGreenCanada.com<br />1-866-233-3707<br />M-F 8:30AM to 4:30PM</strong></p>
              </div>
            </div>
            <div className="step-2">
              <div>
                <h4>{register.card2_Title1}<br />{register.card2_Title2}</h4>
                <p>{register.card2_P1}</p>
                <p>{register.card2_P2}</p>
              </div>
              <Button
              buttonStyle="btn--primary"
              url="/find-a-clinic"
              >
                {register.card2_btn}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Route>
  </Switch>


);

export default TwoStepsSection;
