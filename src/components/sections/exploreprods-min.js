import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import '../../styles/components/exploreprods-min.scss';
import ButtonList from '../button-list';

const conditionArray_painSleep = [
  {
    condition: 'Acute / Chronic Pain',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'Arthritis',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'Inflammation',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'Fibromyalgia',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'Insomnia',
    url: '/shop-subcategory-high-thc'
  },
  {
    condition: 'Post-Op Pain',
    url: '/shop-subcategory-high-cbd'
  }
];
const conditionArray_gastro = [
  {
    condition: 'Appetite Loss',
    url: '/shop-subcategory-high-thc'
  },
  {
    condition: 'Irritable Bowel Syndrome',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: "Crohn's Disease",
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'Nausea & Vomiting',
    url: '/shop-subcategory-1-to-1-thc-cbd'
  }
];
const conditionArray_mental = [
  {
    condition: 'Stress / Anxiety',
    url: '/shop-subcategory-1-to-1-thc-cbd'
  },
  {
    condition: 'PTSD',
    url: '/shop-subcategory-1-to-1-thc-cbd'
  },
  {
    condition: 'Depression',
    url: '/shop-subcategory-1-to-1-thc-cbd'
  },
  {
    condition: 'ADD / ADHD',
    url: '/shop-subcategory-high-thc'
  }
];
const conditionArray_neurological = [
  {
    condition: 'Epilepsy / Seizures',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'Multiple Sclerosis',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'Spasticity',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: "Parkinson's",
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'ALS',
    url: '/shop-subcategory-high-cbd'
  }
];
const conditionArray_specific = [
  {
    condition: 'Opioid Withdrawal',
    url: '/shop-subcategory-high-thc'
  },
  {
    condition: 'Cancer',
    url: '/shop-subcategory-high-cbd'
  },
  {
    condition: 'Glaucoma',
    url: '/shop-subcategory-high-thc'
  },
  {
    condition: 'Hypertension',
    url: '/shop-subcategory-1-to-1-thc-cbd'
  },
  {
    condition: 'Muscular Dystrophy',
    url: '/shop-subcategory-high-cbd'
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

export {conditionArray_painSleep};
export {conditionArray_gastro};
export {conditionArray_mental};
export {conditionArray_neurological};
export {conditionArray_specific};
