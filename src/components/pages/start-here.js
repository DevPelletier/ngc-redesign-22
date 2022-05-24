import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/layout/start-here.scss';
import '../../styles/layout/article.scss';
import { Link } from 'react-router-dom';
import IsMedCannRight_1 from '../sections/section1-ismedcannright';
import ExploreProds from '../sections/exploreprods';
import ExploreProdsMin from '../sections/exploreprods-min';
import { Helmet } from 'react-helmet';

const pageTitle = 'New to Medicinal Cannabis? Start Here | Northern Green Canada';

// Source:
// https://cannigma.com/treatment/medical-cannabis-101-beginners-guide/
// https://cannabis.shoppersdrugmart.ca/en_CA/blog/beginners-guide-cannabis

function StartHere() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

      <section className="text-and-image">
        <div className="inner-section width-02 two-col-even">
          <div className="text-container">
            <h2>The Beginner's Guide to Medicinal Cannabis</h2>
            <p>For new patients, discovering the world of medical (or even <i>recreational</i>) cannabis can be a bewildering experience at times. This is partly due to the fact that cannabis is such a complex plant, and the culture and industry surrounding medical and recreational cannabis has grown so large, and continues to grow rapidly.</p>
            <p>Similar to the standard dosing advice, we advise our new patients to "start low and go slow". Remember that there is an ever-expanding base of research behind the science of cannabis, and it is growing every day. Furthermore, there have been countless patients who have been in your shoes before - don't worry!</p>
            <p>Our <a href="mailto:ClientServices@NorthernGreenCanada.com">Client Services Team</a> is full of people that have had this exact same learning experience - and they're here to help. Reach out to them for anything and everything about cannabis - they'll be happy to help!</p>
          </div>
          <div className="img-container col-width-md push-right border-radius">
            <img src="imgs/3-2-vert-01.jpg" alt=""/>
          </div>
        </div>
      </section>
      <section className="text-interject">
        <div className="inner-section width-03">
          <p className="h4-style">New to medicinal cannabis? No problem. If you’re thinking about joining the revolution, here’s everything you need to know before you get started:</p>
        </div>
      </section>
      <section className="text-and-image">
        <div className="inner-section width-01 two-col-even">
          <div className="img-container border-radius">
            <img src="imgs/square01.jpg" alt=""/>
          </div>
          <div className="text-container col-width-md center-selfXY">
            <h2>What Is Medicinal Cannabis?</h2>
            <p>For decades, cannabis has been known as an illegal drug with a subculture of its own, far from the mainstream. In recent years though, scientists have found more and more evidence of its therapeutic potential. Cannabis has become a trusted, daily medication for millions of people across the world, treating conditions ranging from anxiety to arthritis to the nausea caused by chemotherapy, without the dangerous and harmful side effects of many popular pharmaceuticals.</p>

            <p>The world of cannabis also has an entire language all of its own. In this introduction to medical cannabis, we’ll break down how cannabis works, what types of cannabis products exist today, how patients can use cannabis, what to look for when deciding which cannabis product to use, and cannabis safety.</p>
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
          <div className="text-container col-width-md center-selfXY">
            <h2>How does cannabis work?</h2>
            <p>In the early 1990s, researchers discovered a previously unknown communication system involved in the regulation of nearly every essential function in the body. They named it the endocannabinoid system (ECS) after the plant elements that led researchers to its discovery — cannabinoids.</p>
            <p>This system is made up of cannabinoid receptors (called CB1 and CB2), endocannabinoids (natural chemicals in the human body which activate or modulate CB1 and CB2 activity), and enzymes which metabolize the endocannabinoids.</p>
            <p>The ECS modulates many of the body’s most important functions, including sleep, hunger, pain, anxiety, nausea and energy metabolism, among others. In fact, the endocannabinoid system is so vital to maintaining homeostasis — a state of balance in the body — that some researchers believe many health conditions can be explained by endocannabinoid deficiencies. These conditions include migraines, irritable bowel syndrome, and fibromyalgia, among others. </p>
            <Link to="/" className="primary-link"
            >
            Read Our Cannabis 101
            </Link>
            <Link to="/" className="primary-link"
            >
            Learn How Medical Cannabis Works
            </Link>
          </div>
          <div className="img-container col-width-md push-right border-radius">
            <img src="imgs/3-2-vert-01.jpg" alt=""/>
          </div>
        </div>
      </section>

      <section className="text-and-image">
        <div className="inner-section width-01 two-col-even">
          <div className="text-container col-width-lg center-selfXY">
            <h2>The Cannabis Plant</h2>
            <p>Cannabinoids, as you may have guessed, refer to a specific set of natural compounds found in the cannabis plant - there are more than 140 unique cannabinoids that we currently know of.</p>

            <h4>THC & CBD</h4>
            <p>The two most prominent cannabinoids are tetrahydrocannabinol (THC), which provides cannabis with much of its psychotropic and medicinal effects, and cannabidiol (CBD), which is touted for having medicinal benefits without the same intoxicating “high” of THC.</p>
            <p>THC can be used as an analgesic and anti-inflammatory, and for its ability to prevent nausea and vomiting, and increase appetite. The high caused by THC can cause feelings of euphoria and calm, which can uplift depression and ease anxiety.</p>
            <p>CBD, on the other hand, doesn’t cause the same psychotropic high as THC, and doesn’t impair patients’ ability to function normally. Proposed uses for CBD include as an anticonvulsant, anti-inflammatory, antioxidant, and antipsychotic, and its ability to ease pain, anxiety, and depression, among other uses.</p>

            <h4>Terpenes</h4>
            <p>Terpenes are natural compounds that produce the aroma and taste of cannabis (and a variety of other plants). Terpenes are the reason one “strain” of cannabis might smell and tastes like lemon, while another gives off a pine-y aroma.</p>
            <p>Scientists also believe that the varying sedating, uplifting, and other distinguishing effects of cannabis strains are a result of their terpenoid profile and that terpenes play a role in the medical therapeutic effects of cannabis. The terpene levels are often presented on the packaging of medical marijuana products, next to the THC:CBD ratio and sativa-indica origins of the strain.</p>
            <Link to="/" className="primary-link"
            >
            Read Our Cannabis 101
            </Link>
            <Link to="/" className="primary-link"
            >
            Learn How Medical Cannabis Works
            </Link>
          </div>
          <div className="img-container border-radius col-width-sm push-right">
            <img src="imgs/16-9-vert-01.jpg" alt=""/>
          </div>
        </div>
      </section>

      <section className="text-and-image">
        <div className="inner-section width-01 two-col-even">
          <div className="img-container border-radius top">
            <img src="imgs/square01.jpg" alt=""/>
          </div>
          <div className="text-container col-width-md push-right center-selfY bottom">
            <h2>What Does Medicinal Cannabis Look Like?</h2>
            <p>Today, there are a large number of product types and formats for medical cannabis. From the most basic - the organically grown, dried, and cured flower of the cannabis plant - to extracts that can be vaporized, baked into foods, taken in pill or liquid form, and more. Each product type differs in terms of their general effects and side-effects, dosing, and more.</p>
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
        </div>
      </section>


      <section className="text-and-image">
        <div className="inner-section width-01 two-col-even">
          <div className="text-container col-width-md center-selfXY">
            <h2>Dosing Medicinal Cannabis</h2>
            <p>With most medications, dosing is pretty simple — there are clinical trials, FDA approval, and recommendations handed down to doctors and pharmacists based on specific chemical calculations.</p>
            <p>For cannabis, however, dosing is not yet an exact science and a much more individualized approach is required. A doctor prescribing cannabis must consider the best delivery methods for their patient as well as the right CBD-to-THC ratio, terpenes, or which strain of marijuana is best for the patient.</p>
            <p>Today’s cannabis products can be quite potent, and the effects may be something a patient has not experienced before, so patients are advised to “start low and go slow”. This means taking a low dose and then increasing it slowly, as needed, after gauging the effects. The first time using cannabis should also be done in a comfortable place and with a trusted confidant.</p>
            <Link to="/" className="primary-link"
            >
            Read Our Cannabis 101
            </Link>
            <Link to="/" className="primary-link"
            >
            Learn How Medical Cannabis Works
            </Link>
          </div>
          <div className="img-container border-radius col-width-lg">
            <img src="imgs/square01.jpg" alt=""/>
          </div>
        </div>
      </section>

      <section className="text-and-image">
        <div className="inner-section width-01 two-col-even">
        <div className="img-container border-radius col-width-md">
          <img src="imgs/3-2-vert-01.jpg" alt=""/>
        </div>
          <div className="text-container center-selfXY">
            <h2>Why Medical?</h2>
            <p>Now that you know a little bit about cannabis, you may be asking yourself:</p> <p><strong>"Cannabis is legal for recreational-use in Canada, too. Why do I need a prescription?"</strong></p>
            <p>Fair question, and one that we get a lot! There are many significant benefits to getting a medical cannabis prescription - especially for patients using cannabis for medical purposes, of course! As with all medical products, always consult your chosen healthcare professional first and foremost for guidance.</p>
            <p>See our Top 4 Reasons to Choose Medical Cannabis below:</p>
            <ol>
              <li>
                Cut Your Costs - You can claim your medical cannabis (and related expenses) on your tax return.
                <p>Cannabis is an eligible medical expense under Revenue Canada’s Medical Expense Tax Credit. This means, with receipts from a Health Canada-licensed producer and medical authorization, you can claim expenses related to medical cannabis on your tax return.</p>
              </li>
              <li>
                Potential Insurance Coverage - Your medical cannabis costs may be covered by medical insurance
                <p>Several Canadian insurance companies have begun to add the option for medical cannabis coverage. If any of your insurance plans include this coverage, your medical cannabis could be partially or fully paid for by your insurance provider.</p>
              </li>
              <li>
                Medical Guidance & Safety in Treatment - You will receive medical guidance on products specific to your needs.
                <p>NGC and Healthcare Practitioners at our Affiliate Clinics will always be available to offer Product Guidance, Prescription Management, Medical Advice, and more for our medical clients. </p>
              </li>
              <li>
                Access Specialized Products, and Never Lose Access - NGC has a dedicated product inventory for medical clients.
                <p>At NGC, we have a dedicated product inventory for medical clients. In all aspects of our business, our medical clients always come first. NGC is also creating prorprietary medical cannabis products to target specific medical issues - taking the guesswork out of your treatment.</p>
              </li>
            </ol>
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

      <section className="text-and-image get-your-rx">
        <div className="inner-section width-01 two-col-even">
        <div className="img-container border-radius">
          <img src="imgs/square01.jpg" alt=""/>
        </div>
          <div className="text-container col-width-md center-selfXY">
            <h2>Getting Your Prescription for Medicinal Cannabis</h2>
            <p>The process of getting a prescription for medicinal cannabis is fairly straightforward - and we're here to help you throughout the process!</p>
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

      <ExploreProds />

    </>
  );
}

export default StartHere;
