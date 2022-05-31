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
          <h2>Learn Cannabis Edibles</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">When you think ‘cannabis edibles’, you’re probably thinking of those magical brownies a friend once told you about. But is that all there is to edibles? Far from it! Find out how far the world of edibles has come, and the potential of edibles to help medicinal cannabis users.</p>
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
          <h2>Edibles</h2>
          <p>The days of only being able to use cannabis by smoking a joint or eating a brownie are long gone. Today, it is possible to vaporize, drink, or even absorb the substance transdermally. However, cannabis edibles continue to be a very popular and very effective method of consuming cannabis for both recreational and medicinal purposes - especially for those who want to avoid smoking or vaporizing. In this article, we outline all you need to know about cannabis edibles.</p>
          <p>A cannabis edible is a food or drink product that contains a significant concentration of cannabinoids, such as THC - it’s as simple as that! Commonly sold edibles include baked goods, beverages, chocolates, candies, and so on.</p>
          <p>Please note: Newcomers to cannabis edibles should proceed with caution! The dosages, onset, intensity, and timeline of effects from a cannabis edible are very different from smoking or vaporizing cannabis! In general, edibles take up to 90 minutes to affect, and the effects will last approximately 4-8 hours - much longer than the effects of smoking or vaporizing cannabis. Once you consume an edible, the cannabinoids are broken down and absorbed through the stomach and intestines, and metabolized by your liver.</p>
          <p>As for dosage, a beginner should remain in the 1-5mg range and wait until the following day to evaluate the effects. If these effects are minimal, increase by a maximum of 2.5mg. An intermediate user could use 5-15mg, while an experienced cannabis user might have 20mg per dose.</p>
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
