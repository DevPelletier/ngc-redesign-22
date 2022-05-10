import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/register.scss';
import RegularHero from '../regular-hero';
import RegistrationForm from '../registration-form';
import TwoStepsSection from '../sections/two-steps-section';
import ExploreProds from '../sections/exploreprods';
import IsMedCannRight_1 from '../sections/section1-ismedcannright';


function Register() {
  return (
    <>
      <RegularHero />
      <RegistrationForm />
      <TwoStepsSection />
      <ExploreProds />
      <IsMedCannRight_1 />
    </>
  );
}

export default Register;
