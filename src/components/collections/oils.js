import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  oils_cbd20,
  oils_thc20,
  oils_12thc20cbd
} from '../products/all-products';

const Collection = (props) => {
    return (
      <div className="collection-container">
      <div className="scrollAnchor" ref={props.refProp}></div>
        <div className="collection-header">
          <h3>Cannabis Oils</h3>
          <p>Discover NGC's line of medicinal cannabis extracts. Each extract is packaged in an opaque, child-resistant, pharmaceutical-grade 30ml bottle to keep your medical cannabis safe, as well as a graduated 1.0ml dropper for ease-of-use.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={oils_cbd20} />
          <ProductListingProps numbers={oils_thc20} />
          <ProductListingProps numbers={oils_12thc20cbd} />
        </div>
      </div>

    )
}

export default Collection;
