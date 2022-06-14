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
          <h2>Learn Terpenes</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/047-Sq.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">The unique musky, skunky, and pungent aroma of cannabis is unmistakable: most people can smell it before they even see it. But what exactly are terpenes, and what role do they play in cannabis? </p>
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
          <h2>Terpenes</h2>
          <p>Terpenes, the aromatic compounds that determine the scent of many flowers and herbs, bestow cannabis with its distinctive odour and contribute to its flavour.</p>
          <p>Cannabis contains more than 150 types of terpenes. Although most terpenes are present in only trace amounts, the more prominent ones team together to give diverse cannabis strains their signature scent profiles. Beyond providing cannabis with its unique bouquet of scents, though, terpenes also hold diverse functions in the plant and can produce a range of therapeutic and mood-altering effects in cannabis consumers.</p>
          <p>Terpenes are naturally-occurring compounds found in the sticky, translucent glands (called trichomes) of cannabis plants. Terpenes are not solely for aroma, though - terpenes actually play an integral role in a cannabis plant’s growth and survival. These compounds support the plant’s immune system by conveying information about the surrounding environment, protecting plants from stressors and pathogens and helping to trigger immune responses.</p>
          <p>Similarly, for humans, the effects of terpenes appear to extend beyond feel-good benefits and stress relief. Until recently, the spotlight has been focused almost exclusively on the therapeutic qualities of cannabinoids, such as THC and CBD, but as our understanding of terpenes grows more sophisticated, it’s becoming apparent that these aromatic compounds are medicinal powerhouses too.</p>
          <p>Emerging evidence suggests that all plant compounds in cannabis work together synergistically—this is known as the entourage effect. The entourage effect can be thought of as: the whole of all compounds present in cannabis are more together than the sum of its parts. In other words, a special whole-plant synergy occurs when cannabinoids and terpenes are consumed together, as opposed to by themselves.</p>
          <p>For example, terpenes appear to play a part in influencing the effects of THC and CBD in the body. In a 2018 review of people with epilepsy, those who took full-spectrum CBD extract—including the full array of cannabinoids and terpenes available in the cannabis plant—experienced improved symptoms and fewer side effects than those who took CBD isolate, only containing CBD and some trace cannabinoids. The researchers also found that full-spectrum CBD extract was four times more potent than the CBD isolate, meaning patients could take a significantly lower dose.</p>
          <p>It’s vital to acknowledge that much is still unknown about terpenes and their interactions with other terpenes, cannabinoids, and flavonoids present in cannabis. Nonetheless, growing clinical interest in these aromatic compounds is yielding some fascinating findings. It’s likely that the coming years will see a more sophisticated understanding of terpenes develop, and how they behave both individually and synergistically.</p>
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
