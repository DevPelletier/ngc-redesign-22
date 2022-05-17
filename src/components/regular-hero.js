import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import '../styles/app.scss';
import { Button } from './button';
import '../styles/components/regular-hero.scss';

// https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router
// USED THIS TUTORIAL FOR DYNAMIC CONTENT IN COMPONENTS

const registerContent = {
  title: 'NGC Patient Registration',
  p1: 'Under Health Canada regulations, you must be registered with your chosen LP in order to purchase medicinal cannabis. Don’t worry, we’ve mad the process as simple as possible! Start by completing the registration form below:',
  p2: "If you have any questions for us, please don't hesitate to contact NGC’s Client Support team directly at:",
  contactInfo: '1-866-233-3707 or ClientServices@NorthernGreenCanada.com',
  p3: 'Our support team is available to answer calls Monday through Friday from 8:30AM to 5:00PM EST.',
  p4: "If you are a Clinic or Prescriber, please visit our"
}

const ismedcannright = {
  title: 'Is Medical Cannabis Right For Me?',
  p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus tortor, viverra ac luctus sed, elementum at sapien. Etiam erat justo, elementum eget auctor tincidunt, rutrum bibendum felis. Praesent accumsan arcu justo, vel faucibus ex pulvinar nec. Cras vitae quam vitae elit venenatis blandit a vitae nulla.',
  p2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vel rerum tenetur consequatur doloribus, quam! Quas placeat optio nemo repudiandae! Dolore sequi reiciendis voluptas nulla tempore qui culpa officia, id.',
  p3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita consequuntur cum officiis aspernatur corporis repellat ut dicta fugit, eaque recusandae quia saepe. Tenetur consequuntur, animi recusandae. Libero non praesentium veniam!'
}


const otherContent = {
  title: 'NGC Other',
  p1: 'Under Heasdfasdflth Canada regulations, you must be registered with your chosen LP in order to purchase medicinal cannabis. Don’t worry, we’ve mad the process as simple as possible! Start by completing the registration form below:',
  p2: 'If you haasdfasdfve any questions, please call NGC’s Client Support team directly at: 1-866-233-3707 or ClientServices@NorthernGreenCanada.com',
  p3: 'Our supasdfasdfport team is available to answer calls Monday through Friday from 8:30AM to 5:00PM EST.'
}

const scrollToForm = () => {
  document.getElementById("reg-form-sec").scrollIntoView({behavior: "smooth"});
}

const regularHero = (props) => (


  <Switch>
    <Route path="/register">
      <section className="regular-hero bg-f7f8f9-bigknot-center">
        <div className="inner-section">
          <h2>{registerContent.title}</h2>
          <p id="registration-flag">
            Registration is:
            <span>Open</span>
          </p>
          <p>{registerContent.p1}<br /><br />
          <span
            class="material-symbols-rounded background scrolltobtn"
            onClick={scrollToForm}
            >
            arrow_downward
            </span>
          </p>
          <p>
            {registerContent.p2}
            <strong>{registerContent.contactInfo}</strong><br /><br />
            {registerContent.p3}
          </p>
          <p>
            {registerContent.p4}&nbsp;
            <a href="/">Practitioner and Clinic Resources</a> page
          </p>
        </div>
      </section>
    </Route>
    <Route path="/is-medical-cannabis-right-for-me">
      <section className="regular-hero bg-f7f8f9-bigknot-center">
        <div className="inner-section">
          <h2>{ismedcannright.title}</h2>
          <p>{ismedcannright.p1}</p>
          <p>{ismedcannright.p2}</p>
        </div>
      </section>
    </Route>
    <Route>
      <section className="regular-hero bg-f7f8f9-bigknot-center">
        <div className="inner-section">
          <h2>{otherContent.title}</h2>
          <p>{otherContent.p1}</p>
          <p>{otherContent.p2}</p>
          <p>{otherContent.p3}</p>
        </div>
      </section>
    </Route>
  </Switch>
);

export default regularHero;
