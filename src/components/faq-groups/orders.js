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
      <h3 >Ordering</h3>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How do I order cannabis products from NGC?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            Once you are a fully registered patient with us, you can order your desired cannabis products through our Northern Green Client Portal.</p>
            <p>If you would like help ordering, please do not hesitate to contact us to guide you through the process, or take your order by phone if you require.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Is there a limit on how much cannabis I can buy?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            Under the Cannabis Act, medical cannabis patients can order up to 150 grams of dried cannabis (or equivalent) at one time.</p>
            <p>In terms of types of cannabis products: you are not necessarily limited at all! However, if your Health Care Professional specified maximum THC or CBD levels for your prescription, or specified to only use certain types of cannabis products, products outside of these prescribed limits will not be available to you on our Client Portal.</p>
            <p>If there are no caveats on your prescription, you can purchase any of our available cannabis products in any combination that you desire. Please note: if you are combining different strains, or different cannabis product types (for example: dried flower and oil), there is a minimum purchase of 5 grams (or equivalent).</p>
            <p>As a reminder: you should always follow the advice of your prescribing healthcare professional in terms of the type, dosage, and general responsible use practices of medical cannabis for your specific condition.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>What forms of payment do you accept?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              We accept Visa, Mastercard, Visa Debit, and Mastercard Debit.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Can I change or cancel my order once I've placed it?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            Unfortunately, once an order has been placed into our system, we are unable to change or cancel it.</p>
            <p>Please contact our Client Services team immediately if you have an issue with your order and we will work with you to rectify the situation as best we can.
            </p>
        </AccordionDetails>
      </Accordion>
    </>
    )
}

export default FAQGroup;
