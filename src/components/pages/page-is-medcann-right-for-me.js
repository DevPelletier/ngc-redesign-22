import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/ismedcannright1.scss';
import { Link } from 'react-router-dom';

import RegularHero from '../regular-hero';
import IsMedCannRight_3 from '../sections/section3-ismedcannright';
import ExploreProds from '../sections/exploreprods';


function Page_IsMedCannRightForMe() {
  return (
    <>
      <RegularHero />
      <IsMedCannRight_3 />
      <ExploreProds />
    </>
  );
}

export default Page_IsMedCannRightForMe;
