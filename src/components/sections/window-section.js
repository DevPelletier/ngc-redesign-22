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
              <p>You can be assured at NGC we develop cannabis products backed by research contributed by scientists, doctors, and a network of cultivation experts, both domestic and international. Our team fosters a client-centered care approach - what you value is what we care about.</p>
              <p>We are available to answer any questions you have, and assist you along the path to improving your quality of life. We believe in reaching beyond common service standards, and as such, we have a dedicated team of in-house medical staff to protect your safety. Our cultivation experts produce premium products using state of the art technology and equipment to ensure safe, tested, and consistent cannabis products.</p>

              <div className="btn-container">
                <Button
                url="/why-ngc"
                >
                  Learn More About NGC
                </Button>
                <Button
                  url="/patient-support"
                >
                  Our Patient Support Programs
                </Button>
              </div>
            </div>
          </div>
          <div className="window-row height-sm mobile-bg-green02">
            <div className="window-left text-container">
              <h3>For Our Healthcare Partners</h3>
              <h2>Resources for HCPs & Clinics</h2>
              <p>We simplify the process for you and your patients while helping you make important decisions to ensure the best care. After being prescribed medical cannabis, it’s important that patients get registered to be able to place their orders. Access resources and information to help them with this process.</p>
              <div className="btn-container">
                <Button
                  url="/healthcare-professionals-clinics"
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
