import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/offset-image-section.scss';
import { Link } from 'react-router-dom';

function OffsetImageSection() {
    return (
      <section className="offset-image">
        <div className="inner-section offset-text border-radius">
          <div className="text-container">
            <h3>NGC patient support programs</h3>
            <h2>Veteran’s Coverage & Compassionate Pricing</h2>
            <p>At NGC, everything we do is in support of our patients. We believe that the therapeutic potential and power of medicinal cannabis should be available to all patients who require it. That's why we are proud to offer discount and pricing programs that improve affordability and access to medicinal cannabis.</p>
            <div className="btn-container">
              <Button
                url="/support-programs"
              >
                Our Patient Support Programs
              </Button>
            </div>
          </div>
        </div>
        <div className="offset-img border-radius">
          <div className="img-container">
            <img src="imgs/026-4to3-V.jpg" alt=""/>
          </div>
        </div>
        <div className="inner-section section-spacer"></div>

      </section>
    )
}

export default OffsetImageSection;
