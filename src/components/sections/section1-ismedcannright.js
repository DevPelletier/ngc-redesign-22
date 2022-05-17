import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/ismedcannright1.scss';
import { Link } from 'react-router-dom';


function Section_IsMedCannRightForMe() {
    return (
      <section className="ismedcannright_1 bg-grey-bigknot">
        <div className="inner-section two-col-40-60">
          <div className="text-container margin-top-md">
            <h2>Is Medical Cannabis Right for Me?</h2>
            <p>Ever since recreational legalization in Canada in 2018, there has been a lot of buzz about the cannabis plant. However, medical cannabis use has been legal in Canada since 2001. Every year, more Canadian healthcare professionals and patients are using the growing volumes of clinical research and data to make informed decisions about medicinal cannabis for patients' specific ailments.</p>
            <p>Before starting on any new therapy, it’s important that a patient get all the facts and of course to talk with a trusted healthcare professional. At Northern Green, we believe in Patient Education First, so we have created a library of educational content about medicinal cannabis at our <a href="/learning-hub">Medicinal Cannabis Learning Hub</a>. This educational content imbrs for patients and professionals alike, with the goal of discovering how medicinal cannabis may be a promising therapeutic option for a patients' specific needs.</p>
            <p>Cannabis has been shown to be an effective therapeutic option for a range of ailments. See the info cards in this section for some of the most common medical conditions for which cannabis can be used as a therapeutic treatment option.</p>
            <p>For more information on medicinal cannabis, visit our Medicinal Cannabis Learning Hub at the link below:</p>
            <Link className="primary-link"
            to="/learning-hub"
            >
              Medicinal Cannabis Learning Hub
            </Link>
          </div>
          <div className="issue-cards-container">
            <div className="issue-card">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">bolt</span>
              </div>
              <div className="text-container">
                <h3>I need to manage my</h3>
                <h4>Chronic Pain & Inflammation</h4>
                <p>Nearly 8 million people in Canada - approximately 1 in 4 Canadians - live with chronic pain, many of whom report it adversely ffecting some or most of their daily activities.</p>
                <Link to="/learning-hub" className="primary-link"
                >
                  Learn More
                  <span className="material-symbols-rounded arrow">navigate_next</span>
                </Link>
              </div>
            </div>
            <div className="issue-card">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">hotel</span>
              </div>
              <div className="text-container">
                <h3>I need help with my</h3>
                <h4>Anxiety & Poor Sleep</h4>
                <p>Sleep and mental health are closely connected. However, studies show 33% of Canadians over 35 don't get enough sleep, and 50% of Canadian adults have trouble falling asleep or staying asleep.</p>
                <Link to="/learning-hub" className="primary-link"
                >
                  Learn More
                  <span className="material-symbols-rounded arrow">navigate_next</span>
                </Link>
              </div>
            </div>
            <div className="issue-card">
              <div className="icon-item">
                <span className="material-symbols-rounded blue01">sentiment_dissatisfied</span>
              </div>
              <div className="text-container">
                <h3>I Am Struggling with</h3>
                <h4>Depression / Lethargy</h4>
                <p>Depression will affect 1 in 8 Canadians at some point in their lives, and often for extended periods of time. Fatigue and lethargy is a frequently reported symptom in major depressive disorder, occuring in over 90% of patients.</p>
                <Link to="/learning-hub" className="primary-link"
                >
                  Learn More
                  <span className="material-symbols-rounded arrow">navigate_next</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}

export default Section_IsMedCannRightForMe;
