import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ArticleListingProps from '../article-listing-props';

import {
  learnCannabinoids,
  learnDriedFlower,
  learnEdibles,
  learnExtracts,
  learnTerpenes,
  learnTHCCBD,
  learnVaporizers,
  medicalCannabis101
} from '../articles/all-articles';

const Collection = (props) => {
    return (
      <>
      <section className="hub-latest section-padding-lg-sm">
        <div className="inner-section width-01">
          <h4>Latest Posts</h4>
          <div className="blog-latest-container">
            <ArticleListingProps numbers={learnCannabinoids} />
            <ArticleListingProps numbers={learnDriedFlower} />
            <ArticleListingProps numbers={learnEdibles} />
            <ArticleListingProps numbers={learnExtracts} />
            <ArticleListingProps numbers={learnTerpenes} />
            <ArticleListingProps numbers={learnTHCCBD} />
            <ArticleListingProps numbers={learnVaporizers} />
          </div>
        </div>
      </section>
      </>
    )
}

export default Collection;
