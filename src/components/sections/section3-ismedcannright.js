import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import '../../styles/components/ismedcannright-3.scss';
import ButtonList from '../button-list';


const conditionArray_painSleep = [
  {
    condition: 'Acute / Chronic Pain',
    url: '/shop/cbd'
  },
  {
    condition: 'Arthritis',
    url: '/shop/cbd'
  },
  {
    condition: 'Inflammation',
    url: '/shop/cbd'
  },
  {
    condition: 'Fibromyalgia',
    url: '/shop/cbd'
  },
  {
    condition: 'Insomnia',
    url: '/shop/cbd'
  },
  {
    condition: 'Post-Op Pain',
    url: '/shop/cbd'
  }
];
const conditionArray_gastro = [
  {
    condition: 'Appetite Loss',
    url: '/shop/cbd'
  },
  {
    condition: 'Irritable Bowel Syndrome',
    url: '/shop/cbd'
  },
  {
    condition: "Crohn's Disease",
    url: '/shop/cbd'
  },
  {
    condition: 'Nausea & Vomiting',
    url: '/shop/cbd'
  }
];
const conditionArray_mental = [
  {
    condition: 'Stress / Anxiety',
    url: '/shop/cbd'
  },
  {
    condition: 'PTSD',
    url: '/shop/cbd'
  },
  {
    condition: 'Depression',
    url: '/shop/cbd'
  },
  {
    condition: 'ADD / ADHD',
    url: '/shop/cbd'
  }
];
const conditionArray_neurological = [
  {
    condition: 'Epilepsy / Seizures',
    url: '/shop/cbd'
  },
  {
    condition: 'Multiple Sclerosis',
    url: '/shop/cbd'
  },
  {
    condition: 'Spasticity',
    url: '/shop/cbd'
  },
  {
    condition: "Parkinson's",
    url: '/shop/cbd'
  },
  {
    condition: 'ALS',
    url: '/shop/cbd'
  }
];
const conditionArray_specific = [
  {
    condition: 'Opioid Withdrawal',
    url: '/shop/cbd'
  },
  {
    condition: 'Cancer',
    url: '/shop/cbd'
  },
  {
    condition: 'Glaucoma',
    url: '/shop/cbd'
  },
  {
    condition: 'Hypertension',
    url: '/shop/cbd'
  },
  {
    condition: 'Muscular Dystrophy',
    url: '/shop/cbd'
  }
];


function Section3_IsMedCannRight() {
    return (
      <section className="ismedcannright_3">
        <div className="inner-section">
          <div className="text-container col-width-xsm">
            <h2>Every Patient Is Unique</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis non cumque nulla ex possimus voluptates eos sunt veritatis, odit alias quidem aut sint architecto ad optio esse, ipsum illo saepe!</p>
          </div>
          <div className="explore-medcann-card-container">
            <div className="explore-medcann-card border-radius">
              <h3>Explore Medicinal Cannabis</h3>
              <h4>For Pain/Sleep</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad illo iusto voluptatum, iste quas reiciendis quasi unde autem explicabo tenetur, similique ratione quae nesciunt, officiis doloremque saepe odio! Sit.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad illo iusto voluptatum, iste quas reiciendis quasi unde autem explicabo tenetur, similique ratione quae nesciunt, officiis doloremque saepe odio! Sit.</p>
              <div className="btn-container">
                <ButtonList numbers={conditionArray_gastro} />
              </div>
              <Link to="/learning-hub" className="primary-link">
                Learn More about Cannabis for Gastro-Intestinal Conditions
              </Link>
            </div>
            <div className="explore-medcann-card border-radius">
              <h3>Explore Medicinal Cannabis</h3>
              <h4>For Mental Health</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad illo iusto voluptatum, iste quas reiciendis quasi unde autem explicabo tenetur, similique ratione quae nesciunt, officiis doloremque saepe odio! Sit.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad illo iusto voluptatum, iste quas reiciendis quasi unde autem explicabo tenetur, similique ratione quae nesciunt, officiis doloremque saepe odio! Sit.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad illo iusto voluptatum, iste quas reiciendis quasi unde autem explicabo tenetur, similique ratione quae nesciunt, officiis doloremque saepe odio! Sit.</p>
              <div className="btn-container">
                <ButtonList numbers={conditionArray_specific} />
              </div>
              <Link to="/learning-hub" className="primary-link">
                Learn More about Cannabis for Other Specific Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

    )
}

export default Section3_IsMedCannRight;
