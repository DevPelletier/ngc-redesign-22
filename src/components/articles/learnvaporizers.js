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
          <h2>Learn Cannabis Vaporizers</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">Cannabis vaporizers have increased in popularity the last few years as consumers look for healthier alternatives to smoking and an all-around smoother experience for consuming cannabis. You may be interested in these benefits but wondering - what exactly is a cannabis vaporizer, and how does it work?</p>
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
          <h2>Vaporizers</h2>
          <p>​​Vaporizers come in all shapes and sizes, but they all work mostly in the same way. A vaporizer is a device that heats up cannabis (either in dried flower or extracted form) enough to transmit its active ingredients (cannabinoids and terpenes) without actually burning the cannabis. This is done by heating the cannabis to a point far below the point of combustion, ranging from 180-200C, as opposed to the far hotter temperature of an open flame from your standard lighter (>500C). This way, the user can avoid the harmful chemicals that are created in smoke, and only consume the useful compounds of the cannabis plant in a vapour.</p>
          <p>Vaping cannabis is easy, discreet, and arguably healthier than traditional smoking methods. Most portable vaporizers contain variable temperature control devices that are operated with the click of a button or turn of a small dial. This activates the battery, which heats the element and vaporizes the flower or concentrate contained within the chamber, sending it into the mouthpiece for inhalation. Additionally, portable vaporizers allow for easy and discreet use as the cannabis vapor creates a less potent aroma.</p>
          <p>Vaporization can be a healthier alternative to smoking because this process occurs at relatively low temperatures. The flame from a lighter or match heats the flower to the point of combustion, and combustion can release harmful tar and carcinogens - no tobacco necessary.</p>
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
