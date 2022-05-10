import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/shop.scss';
import ShopHero from '../shop-hero';
import ShopCollection from '../shop-collection';
import ShopAll from '../shop-all';
import DarkLogonWhyuluvngcprods from '../sections/darklogo_whyuluvngcprods';
import ExploreProdsMin from '../sections/exploreprods-min';


function Shop() {
  return (
    <>
      <ShopAll />
      <DarkLogonWhyuluvngcprods />
      <ExploreProdsMin />
    </>
  );
}

export default Shop;
