import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/standard-page.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/layout/404.scss';

function Page404() {
  return (
    <>
      <section className="standard">
        <div className="inner-section">
          <div className="text-container">
            <h4>This Page Could Not Be Found (404)</h4>
            <p className="h1-style">We're unable to harvest the page you're looking for. Sorry about that!</p>
            <Link to="/" className="primary-link">
              Go Back to the homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page404;
