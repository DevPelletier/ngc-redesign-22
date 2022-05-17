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
      <h3 id="first">Registration & Prescriptions</h3>
      <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>I'd like to Register! Where do I start?</p>
      </AccordionSummary>
      <AccordionDetails>
        <p>
        Step 1: Submit your Registration Form to us through our Registration Page here. Once we receive and confirm your registration, you will be prompted by email to Step 2 of the registration process.<br /><br />
        Step 2: Visit your chosen Health Care Professional to complete an initial assessment to obtain a medical cannabis prescription. Your assessment can be completed by any prescribing Health Care Professional, from your family doctor to your local cannabis clinic.  Be sure to bring the NGC Medical Document with you to your appointment, and request to have NGC as your chosen provider.<br /><br />
        That's it! Once we receive your on-boarding documents, our team will verify your information and your prescription - this process takes 1-2 business days. Once approved, we will activate your account and notify you, so that you can login to the Northern Green Client Portal and start shopping!<br /><br />
        Our Client Services Team is always happy to help you through the registration process, or answer any other questions you may have about cannabis. Contact us by phone at 1-866-233-3707, or by email at ClientServices@northerngreencanada.com.<br /><br />
        </p>
      </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>How do I get a Prescription?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
          In order to receive a medical cannabis prescription, you must be assessed by a prescribing Health Care Professional.</p><p>
           You can schedule an assessment for medical cannabis with your chosen Healthcare Professional - this could be a local cannabis clinic, or even your family physician. Bring the Northern Green Medical Document to your appointment, and be sure to request to have NGC as your chosen Licensed Producer.</p><p>
           Upon approval for a medical cannabis prescription, your physician will submit your Medical Document directly to us for verification (we will notify you when we receive your Medical Document).
          </p>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>How long does it take to register?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
          Once we receive all of your required on-boarding documents, our team will verify your information and your prescription - this process usually takes 1-2 business days.</p><p>
           Please note: The timeline of the entire registration process largely depends on how quickly an initial assessment can be scheduled, after which your Medical Document is submitted to us.</p><p>
           We are proud of making our registration process as streamlined as possible, so that patients don’t have to wait any longer than necessary to access medical cannabis. Please let us know if you have any comments or questions about this process - we are constantly striving to better serve our medical cannabis clients.
          </p>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>Can I transfer my prescription to you from another Licensed Cannabis Producer?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
          Transferring to NGC as your chosen Licensed Producer (LP) of medical cannabis is fairly simple. There are 2 steps you need to complete in order to access medical cannabis from Northern Green:</p><p>
           Step 1: Complete and submit our Registration Form.</p><p>
           Step 2: Contact your chosen Healthcare Professional to get a new prescription submitted to us (easily fill-able with our Medical Document).</p><p>
           After we have received all the required paperwork, our Client Services Team should have you registered and approved within 1-2 business days.</p><p>
           If you encounter any problems or issues with this process, please don’t hesitate to contact us - we’re happy to help! For assistance, please provide as much information as possible to our team by reaching out via email or by phone. We will ensure we’re readily available to help facilitate your requests!
          </p>
      </AccordionDetails>
    </Accordion>
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
         <p>Will I receive an official ID or authorization to possess my medicinal cannabis?</p>
      </AccordionSummary>
      <AccordionDetails>
          <p>
            Yes, once you are fully registered and approved with NGC, a registration certificate will be sent to you via email (or mail, by request to our Client Services team). This document contains all of the information you will need regarding your prescription, and will serve as proof of possession for your product.
          </p>
      </AccordionDetails>
    </Accordion>
    </>
    )
}

export default FAQGroup;
