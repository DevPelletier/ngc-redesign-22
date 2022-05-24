import React from 'react';
// import root('/styles/app.scss');
// import root('/styles/layout/shop.scss');
import ShopAll from '../shop-all';
import DarkLogonWhyuluvngcprods from '../sections/darklogo_whyuluvngcprods';
import ExploreProdsMin from '../sections/exploreprods-min';
import { Helmet } from 'react-helmet';

const pageTitle = 'Our Products | Northern Green Canada';


function Shop() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

      <ShopAll />
      <ExploreProdsMin />
    </>
  );
}

export default Shop;
