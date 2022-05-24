import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';

import ProductListingProps from '../product-listing-props';

import {
  sprays_cbd20,
  sprays_cbd50,
  oils_cbd20
} from '../products/all-products';


const Collection = (props) => {
    return (
      <div className="collection-container" ref={props.refProp}>
        <div className="collection-header">
          <h3>No THC Products</h3>
          <p>Discover NGC's medicinal cannabis products with zero THC.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={sprays_cbd20} />
          <ProductListingProps numbers={sprays_cbd50} />
          <ProductListingProps numbers={oils_cbd20} />
        </div>
      </div>

    )
}

export default Collection;
