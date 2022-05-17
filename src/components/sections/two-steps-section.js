import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/two-steps-section.scss';

const homepage = {
  sectionTitle: 'How to Get Started',
  sectionParagraph: 'In order to purchase medical cannabis from Northern Green Canada, you must be a registered NGC client. Registering is quick and easy! See the 2 simple steps to becoming an NGC client below:',
  card1_Title: 'Step 1: Sign Up With NGC',
  card1_P1: 'Click the Register button below to sign up with us quickly and easily. Once you’re registered, you will receive occasional updates from us on our new and upcoming medical cannabis products.',
  card1_P2: 'Don’t worry - signing up doesn’t lock you into anything. You can choose to complete your registration with us by submitting your Medical Document at any time.',
  card1_P3: 'XXX',
  card1_P4: 'XXX',
  card1_btn: 'Sign Up Today',
  card2_Title: 'Step 2: Get A Prescription',
  card2_P1: 'Visit an NGC Affiliate Clinic - or your chosen Health Care Professional - for an initial assessment to obtain a prescription for medical cannabis. This can be any prescribing HCP, from your family doctor to your local cannabis clinic!',
  card2_P2: 'Be sure to bring the NGC Medical Document to your appointment, and to request to have NGC as your chosen provider.',
  card2_P3: 'XXX',
  card2_P4: 'XXX',
  card2_btn: 'Find A Clinic'
}

const register = {
  sectionTitle: 'Next Step: Get Your Prescription For Medicinal Cannabis',
  sectionParagraph: 'In order to purchase medical cannabis from Northern Green Canada, you must be a registered NGC client. Registering is quick and easy! See the 2 simple steps to becoming an NGC client below:',
  card1_Title: 'Step 1: Sign Up With NGC',
  card1_P1: 'COMPLETE!',
  card1_P2: 'You will receive a confirmation email from us within moments. If you don’t receive this email, please check your spam folder, or contact our Client Services Team for assistance! We will reach out within 24 hours.',
  card1_P3: 'ClientServices@NorthernGreenCanada.com | 1-866-233-3707 | Available Monday to Friday 8:00am to 4:30pm',
  card1_P4: 'Now for Step 2',
  card1_btn: 'Step 2: Get A Prescription',
  card2_Title: 'Step 2: Get A Prescription',
  card2_P1: 'Visit an NGC Affiliate Clinic - or your chosen Health Care Professional - for an initial assessment to obtain a prescription for medical cannabis. This can be any prescribing HCP, from your family doctor to your local cannabis clinic!',
  card2_P2: 'Be sure to bring the NGC Medical Document to your appointment, and to request to have NGC as your chosen provider.',
  card2_P3: 'XXX',
  card2_P4: 'XXX',
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
                <h4>{homepage.card1_Title}</h4>
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
                <h4>{homepage.card2_Title}</h4>
                <p>{homepage.card2_P1}</p>
                <p>{homepage.card2_P2}</p>
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
                <h4>{register.card1_Title}</h4>
                <h2>{register.card1_P1}</h2>
                <p>{register.card1_P2}</p>
                <p><strong>ClientServices@NorthernGreenCanada.com<br />1-866-233-3707<br />M-F 8:30AM to 4:30PM</strong></p>
              </div>
            </div>
            <div className="step-2">
              <div>
                <h4>{register.card2_Title}</h4>
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
