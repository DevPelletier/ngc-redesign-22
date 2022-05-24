import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  driedflower_shishkaberry,
  driedflower_darkangel,
  driedflower_gg4,
  driedflower_sourtang,
  driedflower_washingmachine,
  driedflower_orangevelvet,
  driedflower_sourogcheese,
  driedflower_watermelonog
} from '../products/all-products';

const Collection = (props) => {
    return (
      <div className="collection-container">
      <div className="scrollAnchor" ref={props.refProp}></div>
        <div className="collection-header">
          <h3>Dried Flower</h3>
          <p>Grown in NGC's highly controlled, pesticide-free, state-of-the-art hydroponic facility, where our expert grow team cultivates cannabis strains that are industry-leading in quality and consistency.</p>
        </div>
        <div className="collection-listings-container">
          <ProductListingProps numbers={driedflower_shishkaberry} />
          <ProductListingProps numbers={driedflower_darkangel} />
          <ProductListingProps numbers={driedflower_gg4} />
          <ProductListingProps numbers={driedflower_sourtang} />
          <ProductListingProps numbers={driedflower_washingmachine} />
          <ProductListingProps numbers={driedflower_orangevelvet} />
          <ProductListingProps numbers={driedflower_sourogcheese} />
          <ProductListingProps numbers={driedflower_watermelonog} />
        </div>
      </div>

    )
}

export default Collection;
