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
      <h3 >NGC Products</h3>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>What products does NGC offer?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            Our current product offering can be seen within The Store on our website. Below the available products, be sure to check out the strains that are “In Production” for a list of upcoming strains in the near future!</p>
            <p>We are always identifying, producing, and testing additional strains. Looking for something in particular? Send us a message and let us know! We tailor our strain selection to our clinical research, but also customer feedback and demand.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How many products and strains does NGC offer?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              To view our currently available medical cannabis products, navigate to The Store. Please note: in order to see detailed product information and purchase medical cannabis, you must be a registered Northern Green medical cannabis client.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Is your dried flower 'full bud', 'ground', or 'milled'?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              All of our dried flower cannabis products are whole-cured full buds unless the name specifically states that the product has been milled. Further, our milled products are composed entirely of cured, whole buds and contain no ‘trim’ or ‘shake’.
            </p>
        </AccordionDetails>
      </Accordion>
    </>
    )
}

export default FAQGroup;
