import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/article.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';

function Article() {
  return (
    <>

    <section className="article-hero">
      <div className="inner-section two-col-even width-02">
        <div className="text-container">
          <h6>May 24, 2022</h6>
          <h2>A First In Canada - NGC Becomes EU GMP Certified</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
        </div>
        <div className="article-author-tags-container">
          <h6>Written By:</h6>
          <h3>Author Name</h3>
          <h6>Tags:</h6>
          <Link to="/">
            <h3>Cannabis 101</h3>
          </Link>
          <Link to="/">
            <h3>Health & Wellness</h3>
          </Link>
        </div>
      </div>
    </section>

    <section className="article">
      <div className="inner-section width-02">

        <div className="single-col-text">
          <h2>Article Content Goes Here</h2>
          <p>On March 6, 2020, Northern Green Canada Inc. became the first privately-owned Licensed Producer (LP) of cannabis in Canada to be certified with European Union Good Manufacturing Practices (EU GMP)! This certification allows NGC to provide our quality medical cannabis to EU patients.</p>
          <p>"It is a privilege to serve the cannabis patients of the European Union. We are proud of our team for the steadfast commitment to Good Manufacturing Practices standards that they continue to display in realizing this responsibility to quality," stated Lisa McCormack, NGC's President and CEO.</p>
          <p>"We will continue operations as a leading medical cannabis producer in Canada and now, with our EU GMP certification, we are prepared to serve the global market. Supply agreements are being finalized with top EU distributors and we are ready to begin to fulfill them."</p>
          <p>Northern Green Canada Inc. is a federally licensed producer of cannabis, focused on providing cannabis medications for a better quality of life. We are an R&D-driven company committed to the health and well-being of our patients. Our experienced team of experts works from NGC's now EU GMP certified, 2,500m indoor growing and processing facility, with 4,275m of expansion capability. We are currently expanding our extraction capacity to produce oils, and are working with respected partners on treatment based cannabis medications. NGC is partnered with key global players to create distribution networks for patients worldwide.</p>
        </div>

      </div>
    </section>


    <section className="text-and-image get-your-rx">
      <div className="inner-section width-01 two-col-even">
      <div className="img-container border-radius">
        <img src="imgs/square01.jpg" alt=""/>
      </div>
        <div className="text-container col-width-md center-selfXY">
          <h2>How Can I Try Medicinal Cannabis?</h2>
          <p>In order to access NGC medicinal cannabis, Health Canada requires patients to (1) Sign Up with NGC, and (2) have a valid prescription. The first step takes 1-2 minutes - once you are registered with us, we can assist you in booking a visit with your chosen Healthcare Professional to obtain a prescription for medical cannabis.</p>
          <div className="btn-container">
            <Button
              buttonStyle="btn--primary"
              url="/register"
            >
            Sign Up for Medical Cannabis
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Article;
