import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import '../../styles/components/exploreprods-min.scss';
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


function ExploreProdsMin() {
    return (
      <section class="exploreprods-min bg-grey-bigknot">
        <div className="inner-section">
          <h3>Explore Medicinal Cannabis</h3>
          <h4>For Pain/Sleep</h4>
          <div className="btn-container">
            <ButtonList numbers={conditionArray_painSleep} />
          </div>
          <h3>Explore Medicinal Cannabis</h3>
          <h4>For Gastro-Intestinal Conditions</h4>
          <div className="btn-container">
            <ButtonList numbers={conditionArray_gastro} />
          </div>
          <h3>Explore Medicinal Cannabis</h3>
          <h4>For Mental Health</h4>
          <div className="btn-container">
            <ButtonList numbers={conditionArray_mental} />
          </div>
          <h3>Explore Medicinal Cannabis</h3>
          <h4>For Neurological Conditions</h4>
          <div className="btn-container">
            <ButtonList numbers={conditionArray_neurological} />
          </div>
          <h3>Explore Medicinal Cannabis</h3>
          <h4>For Specific Conditions</h4>
          <div className="btn-container">
            <ButtonList numbers={conditionArray_specific} />
          </div>


        </div>
      </section>
    )
}

export default ExploreProdsMin;
