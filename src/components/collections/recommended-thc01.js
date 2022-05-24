import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/shop-collection.scss';
import ProductListingProps from '../product-listing-props';

import {
  driedflower_gg4,
  sprays_thc20,
  vaporizer_ascend
} from '../products/all-products';

const Collection = (props) => {
    return (

      <section className="suggested-prods">
        <div className="inner-section">
          <h2>You May Also Like:</h2>
          <div className="collection-listings-container">
            <ProductListingProps numbers={driedflower_gg4} />
            <ProductListingProps numbers={sprays_thc20} />
            <ProductListingProps numbers={vaporizer_ascend} />
          </div>
        </div>
      </section>

    )
}

export default Collection;
