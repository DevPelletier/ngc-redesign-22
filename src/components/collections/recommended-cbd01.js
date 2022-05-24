import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  sprays_cbd20,
  oils_cbd20,
  vaporizer_relief
} from '../products/all-products';

const Collection = (props) => {
    return (

      <section className="suggested-prods">
        <div className="inner-section">
          <h2>You May Also Like:</h2>
          <div className="collection-listings-container">
            <ProductListingProps numbers={sprays_cbd20} />
            <ProductListingProps numbers={oils_cbd20} />
            <ProductListingProps numbers={vaporizer_relief} />
          </div>
        </div>
      </section>

    )
}

export default Collection;
