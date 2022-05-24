import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import '../../styles/components/ismedcannright-3.scss';
import ButtonList from '../button-list';

import {
  conditionArray_painSleep,
  conditionArray_gastro,
  conditionArray_mental,
  conditionArray_neurological,
  conditionArray_specific
} from './exploreprods-min';

// Unused text
// <p>Below are examples of some of the documented use-cases for medicinal cannabis treatment. You can learn more about these issues and medicinal cannabis generally at our <a href="/learning-hub">Medicinal Cannabis Learning Hub</a>.</p>


function Section3_IsMedCannRight() {
    return (
      <section className="ismedcannright_3 section-padding-lg-lg bg-green01-bigknot-right">
        <div className="inner-section">
          <div className="text-container col-width-xsm">
            <h2>Every Patient Is Unique</h2>
            <p>Medicinal cannabis may be suitable for some health conditions, where other treatments have been unsuccessful. However, every patient is unique! Those who are considering medicinal cannabis should always consult their chosen healthcare professional first and foremost for guidance on the use of medical cannabis.</p>
          </div>
          <div className="explore-medcann-card-container">
            <div className="explore-medcann-card border-radius">
              <h3>Explore Medicinal Cannabis</h3>
              <h4>For Pain/Sleep</h4>
              <p>If you’re one of the millions of people who have trouble sleeping, you may have considered a cannabis compound, such as CBD. Further to its anti-inflammatory properties, CBD is also non-psychotropic, meaning patients can access these health benefits without the 'high' feeling often associated with cannabis.</p>
              <div className="btn-container">
                <ButtonList numbers={conditionArray_painSleep} />
              </div>
              <Link to="/learning-hub" className="primary-link">
                Learn More about Cannabis for Pain/Sleep
              </Link>
            </div>
            <div className="explore-medcann-card border-radius">
              <h3>Explore Medicinal Cannabis</h3>
              <h4>For Gastro-Intestinal Conditions</h4>
              <p>Cannabis has great therapeutic potential in the treatment of gasto-intestinal conditions, including IBS. Particularly, potential treatments include associated frequent and problematic symptoms, including abdominal pain, and pain-modifying issues such as diarrhea and nausea.</p>
              <div className="btn-container">
                <ButtonList numbers={conditionArray_gastro} />
              </div>
              <Link to="/learning-hub" className="primary-link">
              Learn More about Medicinal Cannabis
              </Link>
            </div>
            <div className="explore-medcann-card border-radius">
              <h3>Explore Medicinal Cannabis</h3>
              <h4>For Mental Health</h4>
              <p>Recent studies have found that the patients who used cannabis to treat a range of medical problems - including anxiety - had largely improved cognitive performance and reduced clinical symptoms. These patients were also able to reduce use of conventional medications, including opioids, benzodiazepines, and other mood stabilizers. <a href="https://www.karger.com/Article/FullText/517425#:~:text=Cannabis%20and%20its%20derivatives%20have,such%20as%20diarrhea%20and%20nausea.">Source</a></p>
              <div className="btn-container">
                <ButtonList numbers={conditionArray_mental} />
              </div>
              <Link to="/learning-hub" className="primary-link">
                Learn More about Cannabis for Mental Health
              </Link>
            </div>
            <div className="explore-medcann-card border-radius">
              <h3>Explore Medicinal Cannabis</h3>
              <h4>For Neurological Conditions</h4>
              <p>Results of recent studies suggest that cannabis may serve as a valuable addition to symptomatic therapy of ALS, spasticity, and other related neuromuscular and neurological conditions. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6732193/#:~:text=Delta%2D9%2Dtetrahydrocannabinol%20(THC,treatment%20of%20spasticity%20in%20ALS.">Source</a></p>
              <div className="btn-container">
                <ButtonList numbers={conditionArray_neurological} />
              </div>
              <Link to="/learning-hub" className="primary-link">
                Learn More about Cannabis for Neurological Conditions
              </Link>
            </div>
            <div className="explore-medcann-card border-radius">
              <h3>Explore Medicinal Cannabis</h3>
              <h4>For Other Specific Conditions</h4>
              <p>Cannabis has historical use in alleviating cancer symptoms and treatment of side-effects, such as nausea and vomiting, cancer-related pain, neuropathy, general inflammation, as well as appetite and weight-loss. <a href="https://cancer.ca/en/treatments/complementary-therapies/medical-cannabis-and-cannabinoids">Source</a></p>
              <div className="btn-container">
                <ButtonList numbers={conditionArray_specific} />
              </div>
              <Link to="/learning-hub" className="primary-link">
                Learn More about Medicinal Cannabis
              </Link>
            </div>
          </div>
        </div>
      </section>

    )
}

export default Section3_IsMedCannRight;
