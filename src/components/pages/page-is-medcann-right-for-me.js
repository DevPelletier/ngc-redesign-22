import React from 'react';
import '../../styles/app.scss';
import { Button } from '../button';
import '../../styles/components/ismedcannright1.scss';
import { Link } from 'react-router-dom';

import RegularHero from '../regular-hero';
import IsMedCannRight_3 from '../sections/section3-ismedcannright';
import ExploreProds from '../sections/exploreprods';
import { Helmet } from 'react-helmet';

const pageTitle = 'Is Medical Cannabis Right For Me? | Northern Green Canada';


function Page_IsMedCannRightForMe() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

      <RegularHero />
      <IsMedCannRight_3 />
      <ExploreProds />
    </>
  );
}

export default Page_IsMedCannRightForMe;
