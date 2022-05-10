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
                <span className="material-symbols-rounded blue01">bolt</span>
              </div>
              <h4>Pillar One</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="item-container">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">gfit_health</span>
              </div>
              <h4>Pillar Two</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="item-container">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">health_and_safety</span>
              </div>
              <h4>Pillar Three</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default DarkLogoStampSection;
