import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  accessories_popsocket,
  accessories_rollingpaper,
  accessories_cardgrinder,
  accessories_lighter
} from '../products/all-products';

const Collection = (props) => {
    return (
      <>
      <div className="collection-container">
      <div className="scrollAnchor" ref={props.refProp}></div>
        <div className="collection-header">
          <h3>Accessories</h3>
          <p>Shop our accessories and ensure that you have everything you need for the complete Northern Green Canada experience.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={accessories_popsocket} />
          <ProductListingProps numbers={accessories_rollingpaper} />
          <ProductListingProps numbers={accessories_cardgrinder} />
          <ProductListingProps numbers={accessories_lighter} />

        </div>
      </div>
      </>

    )
}

export default Collection;
