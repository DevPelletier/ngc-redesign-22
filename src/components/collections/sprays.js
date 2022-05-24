import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  sprays_cbd20,
  sprays_cbd50,
  sprays_thc20,
  sprays_12thc20cbd
} from '../products/all-products';

const Collection = (props) => {
    return (
      <div className="collection-container">
      <div className="scrollAnchor" ref={props.refProp}></div>
        <div className="collection-header">
          <h3>Cannabis Sprays</h3>
          <p>Discover NGC's line of medicinal cannabis extracts in a convenient metered-spray bottle. Each extract is packaged in an opaque, child-resistant, pharmaceutical-grade 15ml spray bottle to keep your medical cannabis safe, as well as providing a consistent dose per spray for ease-of-use.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={sprays_cbd20} />
          <ProductListingProps numbers={sprays_cbd50} />
          <ProductListingProps numbers={sprays_thc20} />
          <ProductListingProps numbers={sprays_12thc20cbd} />
        </div>
      </div>

    )
}

export default Collection;
