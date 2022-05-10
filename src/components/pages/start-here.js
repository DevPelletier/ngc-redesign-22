import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/layout/start-here.scss';
import '../../styles/layout/article.scss';
import { Link } from 'react-router-dom';
import IsMedCannRight_1 from '../sections/section1-ismedcannright';
import ExploreProds from '../sections/exploreprods';
import ExploreProdsMin from '../sections/exploreprods-min';


function StartHere() {
  return (
    <>
      <section className="text-and-image">
        <div className="inner-section width-02 two-col-even">
          <div className="text-container">
            <h2>The Beginner's Guide to Medicinal Cannabis</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error, unde consectetur dolor reiciendis sint nobis, ut inventore in laboriosam reprehenderit eius laborum perferendis. Sed necessitatibus autem asperiores impedit esse.</p>
          </div>
          <div className="img-container col-width-md push-right border-radius">
            <img src="imgs/3-2-vert-01.jpg" alt=""/>
          </div>
        </div>
      </section>
      <section className="text-interject">
        <div className="inner-section width-03">
          <p className="h4-style">New to medicinal cannabis? No problem. If you’re thinking about joining the revolution, here’s everything you need to know before you get started. Soon you’ll be a pro.</p>
        </div>
      </section>
      <section className="text-and-image">
        <div className="inner-section width-01 two-col-even">
        <div className="img-container border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
          <div className="text-container col-width-md center-selfXY">
            <h2>What Is Medicinal Cannabis?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error, unde consectetur dolor reiciendis sint nobis, ut inventore in laboriosam reprehenderit eius laborum perferendis. Sed necessitatibus autem asperiores impedit esse.</p>
            <Link to="/" className="primary-link"
            >
            Read Our Cannabis 101
            </Link>
            <Link to="/" className="primary-link"
            >
            Learn How Medical Cannabis Works
            </Link>
          </div>
        </div>
      </section>
      <section className="text-and-image">
        <div className="inner-section width-01 two-col-even">
          <div className="text-container col-width-md float-left center-selfY">
            <h2>What Does Medicinal Cannabis Look Like?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error, unde consectetur dolor reiciendis sint nobis, ut inventore in laboriosam reprehenderit eius laborum perferendis. Sed necessitatibus autem asperiores impedit esse.</p>
            <Link to="/learning-hub" className="primary-link"
            >
            Learn About Cannabis Extracts
            </Link>
            <Link to="/learning-hub" className="primary-link"
            >
            Learn About Dried Flower
            </Link>
            <Link to="/learning-hub" className="primary-link"
            >
            Learn About Vaporizers
            </Link>
            <Link to="/learning-hub" className="primary-link"
            >
            Learn About Capsules
            </Link>
          </div>
          <div className="img-container border-radius">
            <img src="imgs/3-2-vert-01.jpg" alt=""/>
          </div>
        </div>
      </section>

      <IsMedCannRight_1 />

      <section className="text-and-image">
        <div className="inner-section width-01 two-col-even">
        <div className="img-container border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
          <div className="text-container col-width-md center-selfXY">
            <h2>Getting Your Prescription for Medicinal Cannabis</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error, unde consectetur dolor reiciendis sint nobis, ut inventore in laboriosam reprehenderit eius laborum perferendis. Sed necessitatibus autem asperiores impedit esse.</p>
            <div className="btn-container">
              <Button
                buttonStyle="btn--secondary"
                url="/register"
              >
              Sign Up for Medical Cannabis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ExploreProds />
      <ExploreProdsMin />

    </>
  );
}

export default StartHere;
