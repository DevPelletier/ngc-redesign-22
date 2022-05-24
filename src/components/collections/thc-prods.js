import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';

import ProductListingProps from '../product-listing-props';

import {
  driedflower_gg4,
  driedflower_sourtang,
  driedflower_darkangel,
  driedflower_sourogcheese,
  driedflower_watermelonog,
  sprays_thc20,
  oils_thc20,
  vaporizer_sleep,
  vaporizer_ascend
} from '../products/all-products';


const Collection = (props) => {
    return (
      <div className="collection-container" ref={props.refProp}>
        <div className="collection-header">
          <h3>High THC Products</h3>
          <p>Discover NGC's medicinal cannabis products with High THC content.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={driedflower_gg4} />
          <ProductListingProps numbers={driedflower_sourtang} />
          <ProductListingProps numbers={driedflower_darkangel} />
          <ProductListingProps numbers={driedflower_sourogcheese} />
          <ProductListingProps numbers={driedflower_watermelonog} />
          <ProductListingProps numbers={sprays_thc20} />
          <ProductListingProps numbers={oils_thc20} />
          <ProductListingProps numbers={vaporizer_sleep} />
          <ProductListingProps numbers={vaporizer_ascend} />
        </div>
      </div>

    )
}

export default Collection;
