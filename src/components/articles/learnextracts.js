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
          <h2>Learn Cannabis Extracts</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/053-Sq.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">Cannabis extracts - seems like a simple enough concept, right? But there are actually several different types of extracts - so what’s the difference? What do these extracts actually look like? How many types are there and how do you use them?</p>
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
          <h2>Cannabis Extracts</h2>
          <p>Cannabis extracts - seems like a simple enough concept, right? But there are actually several different types of extracts - so what’s the difference? What do these extracts actually look like? How many types are there and how do you use them?</p>
          <p>There are many different types and forms of cannabis extracts. See some of the most common cannabis extracts today:</p>
          <p>
            <ul className="list-styled">
              <li>Tincture</li>
              <li>Live Resin</li>
              <li>Wax, Shatter, Crumble, Budder, etc.</li>
            </ul>
          </p>
          <p>NOTE: Tinctures are the most commonly used products in the medicinal cannabis market, whereas the latter (Wax, etc) types of extracts are more popular in the recreational cannabis market</p>
          <p>Cannabis extracts are usually the product of distilling down the most desirable parts of the plant - the cannabinoids and terpenes - and then transforming this concentrate into a usable format, such as an Oil, or a Spray. In some cases, even the specific cannabinoids and terpenes are isolated, and then reconstituted into a new, unique product with custom characteristics - such as Kaiser Day full-spectrum vaporizers.</p>
          <p>Pre-filled vape pens, such as the Kaiser Day vaporizers available to NGC Clients, are a discreet, portable, and efficient way to consume cannabis extracts. The cartridge's battery activates a heating element that warms the cannabis concentrate. Most vape pens are operated by pressing a button or, in the case of a buttonless pen, by simply taking a drag from the mouthpiece. Pre-filled cartridges and pens aren't refillable and need to be discarded after the concentrate runs out, but detachable batteries can be saved and reused many times.</p>
          <p>To learn more about vaporizers read our article here:<br /><a href="" className="primary-link">Learn Vaporizers</a></p>
          <p>Edibles are another form of cannabis extract that is rarely a part of the ‘extract’ conversation - but they should be! Store-bought and homemade edibles alike are made possible by cannabis extracts. Much like vapes, they don't require special equipment and are easy for new consumers to try.</p>
          <p>To learn more about edibles, read our article here:<br /><a href="" className="primary-link">Learn Edibles</a></p>
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
            Sign Up for Medicinal Cannabis
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Article;
