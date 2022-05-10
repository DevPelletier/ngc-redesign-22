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
  image: 'imgs/prod-square.png'
  },
  {
  name: 'Oral Sprays',
  collectionID: '/shop#sprays',
  image: 'imgs/prod-square.png'
  },
  {
  name: 'Vaporizers',
  collectionID: '/shop#vaporizers',
  image: 'imgs/prod-square.png'
  },
  {
  name: 'Oils',
  collectionID: '/shop#oils',
  image: 'imgs/prod-square.png'
  },
  {
  name: 'Accessories',
  collectionID: '/shop#accessories',
  image: 'imgs/prod-square.png'
  }
];

const ExploreProds = (props) => (
  <section class="exploreprods">
    <div className="inner-section">
      <div className="text-container">
        <h2>Explore Our Products</h2>
        <p>Northern Green offers a multitude of medicinal cannabis products to meet the unique needs and desires of many types of patients.</p>
      </div>
      <div className="explore-prod-container">
        <ExploreProdList numbers={productCategories} />
      </div>
    </div>
  </section>
);

export default ExploreProds;
