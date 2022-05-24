import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  driedflower_shishkaberry,
  vaporizer_bliss,
  vaporizer_relief,
  sprays_cbd20,
  driedflower_gg4
} from '../products/all-products';

const Collection = (props) => {

    return (
      <div className="collection-container" id="best-sellers">
      <div className="scrollAnchor" ref={props.refProp}></div>
        <div className="collection-header">
          <h3>Best Sellers</h3>
          <p>Discover the most popular medicinal cannabis products in NGC's collection - featuring NGC's hydroponically-grown dried flower, CBD and THC oils, full-spectrum vaporizers, and more.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={vaporizer_bliss} />
          <ProductListingProps numbers={sprays_cbd20} />
          <ProductListingProps numbers={vaporizer_relief} />
          <ProductListingProps numbers={driedflower_shishkaberry} />
          <ProductListingProps numbers={driedflower_gg4} />
        </div>
      </div>
    )
}

export default Collection;
