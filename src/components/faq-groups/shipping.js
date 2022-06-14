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
      <h3 >Shipping</h3>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How much do you charge for shipping?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              Shipping rates depend on your location, and on the shipping provider you choose for your order. However, Northern Green offers free shipping on all orders over $100.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>What shipping options do you offer?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            Northern Green currently offers delivery through Canada Post. We currently are operating exclusively in Ontario, with plans to expand to other provinces soon.</p>
            <p>Canada Post:
              <br />Xpresspost (1-2 business days)
              <br />Regular Parcel (1-3 business days)
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Can I track my package?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              Once your package is shipped from our facility, you will receive an email with your tracking information. Click the link in your order confirmation email to track your package all the way to your doorstep.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>What happens if I am not home to receive my package?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            For Purolator and Canada Post deliveries, if no one is home to sign for the package, a delivery slip will be left. The package will then be taken to the carrier’s nearest depot. Refer to this slip for the date of pickup and location of your package.</p>
            <p>Please note that if your package is left too long at the depot (usually 2 weeks), it will be sent back to our facility to be destroyed. At this point, no refund will be issued.
            </p>
        </AccordionDetails>
      </Accordion>
    </>
    )
}

export default FAQGroup;
