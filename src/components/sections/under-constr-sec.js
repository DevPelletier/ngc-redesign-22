import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/under-constr-sec.scss';
import { Link } from 'react-router-dom';

function UnderConstrSection() {
  return (
    <>
      <section className="under-constr-sec">
        <div className="inner-section">
          <h2>Not Found or Under Construction!</h2>
          <p>Please navigate back to the homepage:</p>
          <Button
          url="/"
          >
            Back to Home
          </Button>
        </div>
      </section>

    </>
  );
}

export default UnderConstrSection;
