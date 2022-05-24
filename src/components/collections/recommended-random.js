import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  driedflower_sourtang,
  sprays_cbd50,
  vaporizer_sleep
} from '../products/all-products';

const Collection = (props) => {
    return (

      <section className="suggested-prods">
        <div className="inner-section">
          <h2>You May Also Like:</h2>
          <div className="collection-listings-container">
            <ProductListingProps numbers={driedflower_sourtang} />
            <ProductListingProps numbers={sprays_cbd50} />
            <ProductListingProps numbers={vaporizer_sleep} />
          </div>
        </div>
      </section>

    )
}

export default Collection;
