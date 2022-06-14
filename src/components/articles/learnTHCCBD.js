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
          <h2>Learn THC & CBD</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/023-Sq.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">The most researched and popular active compounds in cannabis are THC and CBD - we’re sure you’ve seen and heard these terms in popular culture, but do you know what they mean, and why they are so popular? Read on to find out!</p>
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
          <h2>THC & CBD</h2>
          <p> THC, which is the abbreviation of the scientific name for the compound delta-9-tetrahydrocannabinol. THC is is the main psychoactive substance that produces the “high” associated with smoking cannabis.</p>
          <p>CBD - also known as Cannabidiol - is a non-psychoactive cannabinoid with anti-pain, anti-inflammatory, and anti-cancer properties while having zero psychoactive effect. Both THC and CBD are cannabinoids - which simply is a classification for the unique compounds found in the cannabis plant that interact with your body’s endocannabinoid system. You can learn more about these topics here:</p>
          <p><a href="" className="primary-link">Learn Cannabinoids</a> or <a href="" className="primary-link">Learn the Science of Cannabis</a></p>
          <p>Although THC and CBD are two of the more widely recognized cannabinoids, scientific research on its use to alleviate and treat illness is still relatively new, due to cannabis being illegal in most of the world for the majority of recent history. However, we do know that THC interacts with the human body’s endocannabinoid system to stimulate the release of dopamine in the brain, which is what causes feelings of euphoria, as well as relaxation, increased appetite, and heightened sensory perception. Furthermore, CBD has shown huge promise in medicinal use for the above properties, as well as an anticonvulsant, antipsychotic, and anxiolytic.</p>
          <p>The potency (concentration or strength) of THC and CBD (and other cannabinoids) in cannabis products is often shown as a percentage by weight (or by volume of a liquid). THC potency in dried flower cannabis, specifically, has increased from an average of 3% in the 1980s to around 15% today. This is due to cannabis growers using selective breeding and advanced growing techniques to maximize the cannabinoid content of cannabis - increasing THC content as well as the other useful cannabinoids and terpenes within the cannabis plant. Cannabis that contains very low amounts of THC in its flowers and leaves (less than 0.3%) is classified as ‘hemp’.</p>
          <p>Both THC and CBD can be consumed in a number of different forms, including:
            <ul className="list-styled">
              <li>Dried Flower</li>
              <li>Oils/Tinctures</li>
              <li>Sprays</li>
              <li>Vaporizers</li>
              <li>Edibles (gummies, chocolates, etc.)</li>
              <li>Topicals (lotions, salves, etc.)</li>
              <li>Beverages</li>
              <li>And more!</li>
            </ul>
          </p>
          <p>To learn more about types of cannabis, read our articles below:</p>
          <p>
            <a href="" className="primary-link">Learn Dried Flower</a>
            <a href="" className="primary-link">Learn Extracts</a>
            <a href="" className="primary-link">Learn Vaporizers</a>
            <a href="" className="primary-link">Learn Edibles</a>
          </p>
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
