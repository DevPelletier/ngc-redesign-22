import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/window-section.scss';
import { Link } from 'react-router-dom';

function WindowSection() {
    return (
      <section className="window">
        <div className="inner-section">
          <div className="window-row height-md">
            <div className="window-left img-window">
              <div className="img-container">
                <img src="imgs/3-2-vert-01.jpg" alt=""/>
              </div>
            </div>
            <div className="window-right text-container">
              <h3>Northern Green Cares</h3>
              <h2>We Support Our Patients</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis perferendis explicabo consequuntur iusto provident consectetur doloribus atque quis odio eaque alias laborum ullam, ducimus sit accusamus mollitia officiis ratione.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis perferendis explicabo consequuntur iusto provident consectetur doloribus atque quis odio eaque alias laborum ullam, ducimus sit accusamus mollitia officiis ratione.</p>
              <div className="btn-container">
                <Button
                >
                  Our Patient Support Programs
                </Button>
                <Button
                >
                  Learn More About NGC
                </Button>
              </div>
            </div>
          </div>
          <div className="window-row height-sm">
            <div className="window-left text-container">
              <h3>For Our Healthcare Partners</h3>
              <h2>Resources for HCPs & Clinics</h2>
              <p>We simplify the process for you and your patients while helping you make important decisions to ensure the best care. After being prescribed medical cannabis, it’s important that patients get registered to be able to place their orders. Access resources and information to help them with this process.</p>
              <div className="btn-container">
                <Button
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="window-right img-window">
              <div className="img-container">
                <img src="imgs/square01.jpg" alt=""/>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
}

export default WindowSection;
