import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/shop.scss';
// import ShopHero from '../shop-hero';
// import ShopCollection from '../shop-collection';
import ShopAll from '../shop-all';
// import DarkLogonWhyuluvngcprods from '../sections/darklogo_whyuluvngcprods'; not included for now
import DarkLogoStampSection from '../sections/dark-logostamp-section';
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
      <DarkLogoStampSection />
      <ExploreProdsMin />
    </>
  );
}

export default Shop;
