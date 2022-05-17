import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import '../../styles/components/exploreprods.scss';
import ExploreProdList from '../explore-prod-list';

const productCategories = [
  {
  name: 'Dried Flower',
  collectionID: '/shop#dried-flower',
  image: 'imgs/prod-driedflower.png'
  },
  {
  name: 'Oral Sprays',
  collectionID: '/shop#sprays',
  image: 'imgs/prod-spray.png'
  },
  {
  name: 'Vaporizers',
  collectionID: '/shop#vaporizers',
  image: 'imgs/prod-vaporizer.png'
  },
  {
  name: 'Oils',
  collectionID: '/shop#oils',
  image: 'imgs/prod-oil.png'
  },
  {
  name: 'Accessories',
  collectionID: '/shop#accessories',
  image: 'imgs/prod-accessory.png'
  }
];

const ExploreProds = (props) => (
  <section class="exploreprods">
    <div className="inner-section">
      <div className="text-container">
        <h2>Explore NGC Medicinal Cannabis</h2>
        <p>Discover NGC's collection of medicincal cannabis products - featuring NGC's hydroponically-grown dried flower, CBD and THC oils, full-spectrum vaporizers, and more.</p>
      </div>
      <div className="explore-prod-container">
        <ExploreProdList numbers={productCategories} />
      </div>
    </div>
  </section>
);

export default ExploreProds;
