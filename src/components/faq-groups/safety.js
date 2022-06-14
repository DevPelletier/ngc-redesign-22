import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import '../../styles/components/faqs.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';


const FAQGroup = (props) => {
    return (
      <>
      <div className="scrollAnchor" ref={props.refProp}></div>
      <h3 >Medical Cannabis Safety & Regulations</h3>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How do I legally carry my medical cannabis products?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            Taken directly from the Health Canada guidelines for medical cannabis possession:</p>
            <p>“You should carry a copy of your registration certificate, which is proof that you can possess or produce a limited amount of cannabis for medical purposes. You will need to show this if police or law enforcement representatives ask you for proof.</p>
            <p>You are allowed to possess up to a 30-day supply of dried marijuana, or its equivalent. Your maximum amount is based on the lower amount of what your health care practitioner has recommended, or 150 grams.”</p>
            <p>We will send you your Certificate of Registration by email when you are first approved as an NGC client, and for every subsequent prescription renewal. You can also access this document at any time by contacting our Client Services team.
            </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>How much cannabis am I allowed to possess in public?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
          Under the Cannabis Act, medical cannabis patients are allowed to possess a 30-day supply, up to 150 grams (or equivalent), at one time.</p>
          <p>Medicinal cannabis patients must be prepared to show that they are legally allowed to possess more than the regular 30 grams (or equivalent) allowed to all legal-age Canadians if requested by law enforcement. This can be done by showing a Certificate of Registration issued by NGC upon your registration and/or prescription renewal. You can access this document at any time by contacting our Client Services team.
          </p>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>Can I consume alcohol while taking cannabis?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
            We do not recommend consuming any alcohol while using medical cannabis.
          </p>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>Can I use cannabis with my other medications?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
            This depends entirely on the medication and the user. Always consult with your health care practitioner if you are taking other medications while taking medical cannabis, or cannabis for recreational purposes.
          </p>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>Does cannabis have any side effects?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
          Patients generally tolerate medical cannabis well, as long as they abide by their Healthcare Professional’s prescriptive advice.</p>
          <p>A low dosage often provides satisfactory relief, allowing side effects to occur infrequently. When side effects do occur, it is usually the result of a high dosage, fast titration (quick increase in dosage) or combined use with a substance such as alcohol that intensifies the effects.</p>
          <p>Known side-effects of medicinal cannabis are dry-mouth, mood-alterations, insomnia, a faster, increased heartbeat and fatigue.  Other effects include relaxation, fits of laughter, hunger, and heightened sensitivity to the perception of colour and sound.</p>
          <p>Patients may also experience slower reaction time and lower awareness, particularly during the first few hours of use. For more information, please review the Health Canada consumer information on cannabis here and here.</p>
          <p>Should you experience any unexpected side effects while taking cannabis for medical purposes, stop consuming cannabis immediately and contact your chosen Healthcare Professional, or go to the emergency department of your nearest hospital if side-effects are serious.
          </p>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>Can I drive if I am taking cannabis?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
          No. It is against the law to get behind the wheel while impaired to any degree by drugs, alcohol, or a combination of both. Even if you are a prescribed medical cannabis client, you do not get an exemption to drive while under the influence of cannabis.</p>
          <p>For more information, see the Government of Canada’s page on drug-impaired driving here.
          </p>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>Can I travel with my medical cannabis?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
          Domestic travel (within Canada) with cannabis is allowed, within Canada's legal limits and regulations. International travel with cannabis is not legal.</p>
          <p>Our tips for a safe and easy journey:</p>
          <ul>
            <li>Keep your medical cannabis in an odour-free container, in your carry-on</li>
            <li>Always bring your documentation and keep it on-hand</li>
            <li>For flights, liquids (oils) must still be under 100mL (same requirements as all liquids on flights)</li>
            <li>You must always stay within your carrying limit</li>
          </ul>
      </AccordionDetails>
    </Accordion>
    </>
    )
}

export default FAQGroup;
