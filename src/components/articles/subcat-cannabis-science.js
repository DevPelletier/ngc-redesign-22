import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ArticleListingProps from '../article-listing-props';

import {
  learnCannabinoids,
  learnTheScience,
  learnTHCCBD,
  learnExtracts,
  learnTerpenes
} from '../articles/all-articles';

const Collection = (props) => {
    return (
      <>
      <section className="hub-highlights section-padding-lg-sm">
        <div className="inner-section width-02">
          <h4>Cannabis Science</h4>
          <div className="blog-highlights-container">
            <ArticleListingProps numbers={learnCannabinoids} />
            <ArticleListingProps numbers={learnTheScience} />
            <ArticleListingProps numbers={learnTHCCBD} />
            <ArticleListingProps numbers={learnExtracts} />
            <ArticleListingProps numbers={learnTerpenes} />
          </div>
        </div>
      </section>
      </>
    )
}

export default Collection;
