import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/article.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';

// UNUSED CONTENT STUFF
// <div className="two-offset-imgs">
//   <div className="img-container border-radius">
//     <img src="imgs/test.jpg" alt=""/>
//   </div>
//   <div className="img-container border-radius">
//     <img src="imgs/test.jpg" alt=""/>
//   </div>
// </div>
// <div className="single-col-text">
//   <h2>Article Content Goes Here</h2>
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
//   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
// </div>
// <div className="two-col-even text-and-image">
//   <div className="text-container">
//     <h2>Article Content Goes Here</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reiciendis quidem ipsam consequatur doloribus vero quam dolorem esse. Qui officia rem ad modi omnis sed dolorum, vel at accusamus nisi.</p>
//   </div>
//   <div className="img-container border-radius">
//     <img src="imgs/test.jpg" alt=""/>
//   </div>
// </div>

function Article() {
  return (
    <>

    <section className="article-hero">
      <div className="inner-section two-col-even width-02">
        <div className="text-container">
          <h6>May 24, 2022</h6>
          <h2>Learn 'Dried Flower' Cannabis</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">It's probably the first thing you think of when you picture "cannabis". But what is “Dried Flower” cannabis, really?</p>
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
          <h2>Dried Flower</h2>
          <p>The cannabis term ‘dried’ or ‘dry’ flower refers to flowers of the cannabis plant that have been cured and dried - simple as that! This means that dried flower, when kept in the ‘whole-bud’ form, is one of the least processed type of cannabis product, as the original plant is still fully intact. Dried flower can also be processed further into other forms of cannabis extracts, such as tinctures, essential oils, and others.</p>
          <p>Dried flower cannabis contains a variety of different cannabinoids (such as THC, CBD, and others) and terpenes in varying amounts and different ratios, depending on the strain. Cannabinoids are natural compounds found in cannabis that are responsible for its effects, while terpenes are aromatic oils found in cannabis that affect the specific effects, aroma, and flavour of each specific strain.</p>
          <p>As stated previously, dried flower is the least ‘processed’ type of cannabis product, which allows dried flower to typically retain its full spectrum of cannabinoids and terpenes. This means dried flower is an excellent way to maximize the Entourage Effect - or the natural compounding effect where different cannabinoids work together to enhance the natural properties of each cannabinoid and create a stronger effect than CBD or THC alone.</p>
          <p>The cannabis flower, once finished curing and drying,  is immediately ready to be consumed by smoking or vaporizing. When smoked or vaporized, dried flower has a much quicker onset time (typically 5-10 minutes) compared to ingested cannabis products like tinctures or tablets, which can take much longer – particularly helpful for patients taking cannabis medicine on an as needed basis or for symptoms that have a sudden onset, such as pain or nausea/vomiting. It usually takes approximately 4-6 hours for effects to dissipate, although residual effects can last for up to 24 hours.</p>
        </div>
      </div>
    </section>


    <section className="text-and-image get-your-rx">
      <div className="inner-section width-01 two-col-even">
      <div className="img-container border-radius">
        <img src="imgs/045-4to3-V.jpg" alt=""/>
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
