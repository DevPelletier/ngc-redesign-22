import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  vaporizer_bliss,
  vaporizer_relief,
  vaporizer_relax,
  vaporizer_ascend,
  vaporizer_sleep
} from '../products/all-products';

const Collection = (props) => {
    return (
      <div className="collection-container">
      <div className="scrollAnchor" ref={props.refProp}></div>
        <div className="collection-header">
          <h3>Vaporizers</h3>
          <p>NGC has partnered with <a href="https://kaiserday.com/" target="_blank">Kaiser Day Cannaceuticals</a> to carry their line of custom-formulation, full-spectrum vaporizers. Each vaporizer formula has been specifically created to maximize the potential therapeutic effects of the cannabinoids they contain, for specific purposes.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={vaporizer_bliss} />
          <ProductListingProps numbers={vaporizer_relief} />
          <ProductListingProps numbers={vaporizer_relax} />
          <ProductListingProps numbers={vaporizer_ascend} />
          <ProductListingProps numbers={vaporizer_sleep} />
        </div>
      </div>

    )
}

export default Collection;
