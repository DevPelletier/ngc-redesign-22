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
          <h2>Learn Cannabinoids</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/013-Sq.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">Cannabinoids - as their name implies - are the unique compounds found in cannabis that make this plant into the powerhouse that we know today. So what exactly are these compounds, and what do they do? Let’s learn about cannabinoids.</p>
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
          <h2>Cannabinoids</h2>
          <p>Cannabinoids are naturally occurring compounds found in the Cannabis plant. There are over 480 different compounds present within the cannabis plant, but only around 66 are termed ‘cannabinoids’. More specifically these cannabinoids are called ‘phytocannabinoids’, as they are cannabinoids that come from a plant.</p>
          <p>Cannabinoids are classified in this way because, contrary to popular belief, cannabinoids are not unique to the cannabis plant! These compounds are also found in many other organisms on earth, including the human body. ‘Endocannabinoids’ are cannabinoids produced within the human body, and these are an essential component of the human bodies' endocannabinoid system (ECS), which is largely responsible for maintaining internal balance.</p>
          <p>The most well-known phytocannabinoids are THC, which is the main psychoactive ingredient in cannabis, and CBD, which makes up a large portion of the plant resin extract.</p>
          <p>Cannabinoids are organized into classes, including the following:
            <ul className="list-styled">
              <li>Cannabigerols (CBG)</li>
              <li>Cannabichromenes (CBC)</li>
              <li>Cannabidiol (CBD)</li>
              <li>Tetrahydrocannabinol (THC)</li>
              <li>Cannabinol (CBN)</li>
              <li>And many others,</li>
            </ul>
          </p>
          <p>The main way in which the cannabinoids are differentiated is based on their degree of psychoactivity. For example, CBG, CBC and CBD are not known to be psycholgically active agents whereas THC, CBN and CBDL along with some other cannabinoids are known to have varying degrees of psychoactivity.</p>
          <p><strong>Did You Know?</strong><br />
          When THC is exposed to the air, it becomes oxidized and forms CBN which also interacts with THC to lessen its impact. This is why cannabis that has been left out unused will has less potent effects when smoked, due to the increased CBN to THC ratio.</p>
          <p>Cannabinoids exert their effects by interacting with specific cannabinoid receptors present on the surface of cells in the human body. Cannabinoids that serve both medicinal and recreational purposes change the way we feel, and they have regulatory effects on several body functions. These receptors are found in different parts of the central nervous system and the two main types of cannabinoid receptors in the body are CB1 and CB2.</p>
          <p>In the early 1990s, a substance that naturally occurs in the human brain (called anandimide) was discovered to interact with these receptors, too. This and other cannabinoid-like compounds were henceforth referred to as endocannabinoids - meaning cannabinoids that are endogenous to (come from within) the human body. Further, the system in the human body that cannabinoids (and endocannabinoids) interact with is called the Endocannabinoid System.</p>
          <p>Learn more about the Endocannabinoid System here:<br /><a href="/" className="primary-link">Learn the Science</a></p>
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
