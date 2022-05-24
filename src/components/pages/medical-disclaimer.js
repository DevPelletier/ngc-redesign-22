import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Helmet } from 'react-helmet';

const pageTitle = 'Medical Disclaimer | Northern Green Canada';

function Page() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section class="legal-page">
      <div className="inner-section width-03 text-centered bg-f7f8f9-bigknot-center">
        <div className="text-container">
          <h2>Medical Disclaimer</h2>
          <p>While Northern Green Canada makes every attempt to ensure material provided on this site is accurate, current and complete, THIS WEBSITE IS NOT DESIGNED TO, AND DOES NOT, PROVIDE MEDICAL ADVICE.</p>
          <p>Northern Green Canada is not liable for any error or omission on this website or for any injury, loss or damage incurred by reliance on the information or advice provided on these pages.</p>
          <p>ALL CONTENT, INCLUDING TEXT, GRAPHICS, IMAGES AND INFORMATION AVAILABLE ON OR THROUGH THIS WEBSITE, IS FOR GENERAL INFORMATIONAL PURPOSES ONLY.</p><p>THE CONTENT IS NOT INTENDED TO BE A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS OR TREATMENT.</p><p>NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE, OR DELAY SEEKING IT, BECAUSE OF SOMETHING YOU HAVE READ ON THIS WEB SITE.</p><p>NEVER RELY ON INFORMATION ON THIS WEBSITE IN PLACE OF SEEKING PROFESSIONAL MEDICAL ADVICE.</p><p>NORTHERN GREEN CANADA IS NOT RESPONSIBLE OR LIABLE FOR ANY ADVICE, COURSE OF TREATMENT, DIAGNOSIS OR ANY OTHER INFORMATION, SERVICES OR PRODUCTS THAT YOU OBTAIN THROUGH THIS SITE.</p><p>YOU ARE ENCOURAGED TO CONFER WITH YOUR DOCTOR WITH REGARD TO INFORMATION CONTAINED ON OR GATHERED THROUGH THIS WEBSITE. AFTER READING ARTICLES OR OTHER CONTENT FROM THIS WEBSITE, YOU ARE ENCOURAGED TO REVIEW THE INFORMATION CAREFULLY WITH YOUR PROFESSIONAL HEALTHCARE PROVIDER.</p><br /><br />
          <p>Northern Green Canada may contain links to other external websites, which are not under the control of Northern Green Canada. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
        </div>
      </div>
    </section>

    </>
  );
}

export default Page;
