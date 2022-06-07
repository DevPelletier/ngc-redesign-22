import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/dark-logostamp-section.scss';

function DarkLogoStampSection() {
    return (
      <section class="dark-logostamp">
        <div className="inner-section">
          <h2>Looking After You</h2>
          <div className="icon-item-container">
            <div className="item-container">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">support_agent</span>
              </div>
              <h4>Dedicated Client Support</h4>
              <p>We support our patients, always. Our Client Services team is committed to premium, holistic care medical support for our registered clients.</p>
            </div>
            <div className="item-container">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">personal_injury</span>
              </div>
              <h4>We Put Patients First</h4>
              <p>Everything our team does is done with the patient in mind first and foremost - to bring Canadians expertly crafted medicinal cannabis products they can trust.</p>
            </div>
            <div className="item-container">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">done_all</span>
              </div>
              <h4>NGC Quality Promise</h4>
              <p>Our grow teams and partners are dedicated to cultivating pharma grade medical cannabis products of exceptional quality.</p>
            </div>

          </div>
        </div>
      </section>
    )
}

export default DarkLogoStampSection;
