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
            <h3>Northern Green Cares</h3>
            <h2>We Support Our Patients</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus nobis perferendis explicabo consequuntur iusto provident consectetur doloribus atque quis odio eaque alias laborum ullam, ducimus sit accusamus mollitia officiis ratione.</p>
            <div className="btn-container">
              <Button
              >
                Our Patient Support Programs
              </Button>
            </div>
          </div>
        </div>
        <div className="offset-img border-radius">
          <div className="img-container">
            <img src="imgs/3-2-vert-01.jpg" alt=""/>
          </div>
        </div>
        <div className="section-spacer"></div>

      </section>
    )
}

export default OffsetImageSection;
