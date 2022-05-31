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
          <h2>Learn The Science of Medicinal Cannabis</h2>
        </div>
        <div className="img-container col-width-md push-right border-radius">
          <img src="imgs/039-Sq.jpg" alt=""/>
        </div>
      </div>
    </section>

    <section className="article-info text-interject">
      <div className="inner-section two-col-even width-03">
        <div className="article-intro col-width-xsm">
          <p className="h4-style">How exactly does cannabis work within the human body? What are the compounds within cannabis that create the effects we experience when consuming it? What does the current scientific research tell us about the medicinal potential of this plant?</p>
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
          <h2>Learn the Science</h2>
          <p>The science of cannabis is actually quite new, relatively speaking. This is because scientific research on cannabis was, sadly and unfortunately, banned or illegal in most of the world for the majority of recent history. Only within the past few decades, a handful of countries (Canada being one of the global leaders!) have begun to allow and fund intense scientific research into the cannabis plant and the potentially huge medicinal impact that it can have.</p>
          <p>So what do we know about the science of cannabis so far?</p>
          <p>The science of how cannabis works is essentially the following process: naturally-occurring compounds within the cannabis plant (cannabinoids) interact with a system of receptors in the human body (the aptly-named endocannabinoid system (ECS)), and this system then affects many different bodily functions. Specifically, different cannabinoids exert their effects by interacting with cannabinoid receptors present on the surface of cells in different parts of the endocannabinoid system within our central nervous system.</p>
          <p>The science of how cannabis works is essentially the following process: naturally-occurring compounds within the cannabis plant (cannabinoids) interact with a system of receptors in the human body (the aptly-named endocannabinoid system (ECS)), and this system then affects many different bodily functions. Specifically, different cannabinoids exert their effects by interacting with cannabinoid receptors present on the surface of cells in different parts of the endocannabinoid system within our central nervous system.</p>
          <p>To date, two types of cannabinoid receptors have been identified that constitute the ECS - the CB1 and CB2 receptors.</p>
          <p>The CB1 receptors are primarily located on nerve cells in the brain, spinal cord, but they are also found in some peripheral organs and tissues such as the spleen, white blood cells, endocrine gland and parts of the reproductive, gastrointestinal and urinary tracts. In the brain, the CB1 receptors are abundant in various areas that are responsible for memory processing, pain regulation and motor control. CB1 receptors also regulate the release of other neuro-chemicals, such as serotonin, dopamine, and glutamate. In the brain stem, however, the concentration of cannabinoids is low, which may be related to why cannabis use is not associated with sudden death due to depressed respiration, for example.</p>
          <p>The CB2 receptors are mainly found on white blood cells, in the tonsils and in the spleen. The immune cells also express CB1, although there are fewer of them than CB2. In the immune system, one important function of the cannabinoid receptors is the regulation of cytokine release. Stimulation of the CB1 receptor produces cannabis-like effects on the psyche and circulation, while no such effect is seen when the CB2 receptor is activated. This means that interaction with the CB2 receptors may have potential for anti-inflammatory and anti-cancer effects.</p>
          <p>Study of the ECS was initially focused on attempts to understand (and demonize) an illegal drug, but new research has since flourished into a far more broad-based exploration into what is an astoundingly intricate and far-reaching system by which our bodies learn, feel, motivate, and keep themselves in balance. We are truly at the dawn of an age of discovery of the ECS and the development of new medicines that may help alleviate some of the cruelest diseases that people suffer from. At Northern Green, we are incredibly excited to see what discoveries await us as we continue to untangle the mysteries of our own human anatomy and this powerful plant.</p>
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
