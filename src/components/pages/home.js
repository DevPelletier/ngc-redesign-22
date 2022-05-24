import React from 'react';
import '../../styles/app.scss';
import LandingHero from '../landing-hero';
import TwoStepsSection from '../sections/two-steps-section';
import DarkLogoStampSection from '../sections/dark-logostamp-section';
import IsMedCannRight_1 from '../sections/section1-ismedcannright';
import WindowSection from '../sections/window-section';
import OffsetImageSection from '../sections/offset-image-section';
import { Helmet } from 'react-helmet';

const pageTitle = 'Medical Cannabis | Northern Green Canada';

function Home() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <LandingHero />
      <TwoStepsSection />
      <DarkLogoStampSection />
      <IsMedCannRight_1 />
      <WindowSection />
      <OffsetImageSection />
    </>
  );
}

export default Home;
