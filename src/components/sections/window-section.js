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
                <img src="imgs/16-9-vert-01.jpg" alt=""/>
              </div>
            </div>
            <div className="window-right text-container">
              <h3>Northern Green Cares</h3>
              <h2>We Support Our Patients</h2>
              <p>You can rest assured - at NGC we develop medicinal cannabis products backed by research from a wide range of scientists, doctors, and a network of cultivation experts, both domestic and international. Our team fosters a client-centered care approach - what you value is what we care about.</p>
              <p>NGC's Client Services Team is available to answer any questions you have, and assist you along the path to improving your quality of life. We believe in reaching beyond common service standards, and as such, we have a dedicated team committed to premium, holistic support for our registered clients.</p>
              <div className="btn-container">
                <Button
                  buttonStyle="btn--secondary"
                  url="/about-us"
                >
                  Learn More About NGC
                </Button>
              </div>
            </div>
          </div>
          <div className="window-row height-md mobile-bg-green02">
            <div className="window-left text-container">
              <h3>For Our Healthcare Partners</h3>
              <h2>Resources for Healthcare Partners</h2>
              <p>We simplify the process for you and your patients, while helping you make important decisions to ensure the best care.</p>
              <p>Once a patient is prescribed medical cannabis, it’s essential that patients can quickly and efficiently get access to their treatment. NGC is dedicated to working closely with our Healthcare Partners to ensure that this process is as smooth and effortless as possible for every single patient.</p>
              <p>Access resources and information to help them with this process below:</p>
              <div className="btn-container">
                <Button
                  url="/healthcare-professionals-clinics"
                >
                  HCP & Clinic Resources
                </Button>
              </div>
            </div>
            <div className="window-right img-window">
              <div className="img-container">
                <img src="imgs/3-2-vert-01.jpg" alt=""/>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
}

export default WindowSection;
