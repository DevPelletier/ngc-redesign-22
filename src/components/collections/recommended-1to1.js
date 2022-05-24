import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  driedflower_washingmachine,
  sprays_12thc20cbd,
  vaporizer_bliss
} from '../products/all-products';

const Collection = (props) => {
    return (

      <section className="suggested-prods">
        <div className="inner-section">
          <h2>You May Also Like:</h2>
          <div className="collection-listings-container">
            <ProductListingProps numbers={driedflower_washingmachine} />
            <ProductListingProps numbers={sprays_12thc20cbd} />
            <ProductListingProps numbers={vaporizer_bliss} />
          </div>
        </div>
      </section>

    )
}

export default Collection;
