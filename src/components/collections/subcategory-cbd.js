import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';

import ProductListingProps from '../product-listing-props';

import {
  driedflower_washingmachine,
  sprays_cbd20,
  sprays_cbd50,
  oils_cbd20,
  sprays_12thc20cbd,
  oils_12thc20cbd,
  vaporizer_bliss,
  vaporizer_relief,
  vaporizer_relax
} from '../products/all-products';


const Collection = (props) => {
    return (
      <div className="collection-container" ref={props.refProp}>
        <div className="collection-header">
          <h3>High cbd Products</h3>
          <p>Discover NGC's medicinal cannabis extracts with High CBD content.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={driedflower_washingmachine} />
          <ProductListingProps numbers={sprays_cbd20} />
          <ProductListingProps numbers={sprays_cbd50} />
          <ProductListingProps numbers={oils_cbd20} />
          <ProductListingProps numbers={sprays_12thc20cbd} />
          <ProductListingProps numbers={oils_12thc20cbd} />
          <ProductListingProps numbers={vaporizer_bliss} />
          <ProductListingProps numbers={vaporizer_relief} />
          <ProductListingProps numbers={vaporizer_relax} />
        </div>
      </div>

    )
}

export default Collection;
