import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ArticleListingProps from '../article-listing-props';

import {
  beginnersGuide,
  medicalCannabis101,
  isMedCannRight,
  learnTheScience,
  learnTHCCBD,
  learnCannabinoids,
  learnTerpenes
} from '../articles/all-articles';

const Collection = (props) => {
    return (
      <>
      <section className="hub-highlights">
        <div className="inner-section width-02">
          <h4>Beginner's Guides</h4>
          <div className="blog-highlights-container">
            <ArticleListingProps numbers={isMedCannRight} />
            <ArticleListingProps numbers={learnTheScience} />
            <ArticleListingProps numbers={learnTHCCBD} />
            <ArticleListingProps numbers={learnCannabinoids} />
            <ArticleListingProps numbers={learnTerpenes} />
          </div>
        </div>
      </section>
      </>
    )
}

export default Collection;
