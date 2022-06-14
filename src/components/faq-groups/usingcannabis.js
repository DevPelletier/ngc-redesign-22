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
      <h3 >Using Cannabis Products</h3>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>What is medical cannabis and how does it work?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              For questions related to the use of medical cannabis, please refer to the articles on our blog tagged as Cannabis 101.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How do I use your medicinal cannabis products?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            Dried flower cannabis is commonly smoked or vaporized.</p>
            <p>Combustion (Smoking) is a popular method of consuming dried flower, and is fast-acting. However, smoking dried flower can feel harsher than other options.</p>
            <p>Vaporizing is achieved by heating the dried flower to a temperature that is below the point of combustion, but still hot enough to vaporize the cannabinoids in order to be inhaled. This is seen as a 'cleaner' and 'less harsh' alternative to smoking.</p>
            <p>For more information on cannabis, please visit the Northern Green Canada Blog. We constantly update our blog with articles on Cannabis Culture, Health, Products, Cannabis Basics, and new Research and Science updates in the medical cannabis industry.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How do I dose my medicinal cannabis?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              Always refer to your healthcare professional for dosing information and medical advice in general.
            </p>
        </AccordionDetails>
      </Accordion>
    </>
    )
}

export default FAQGroup;
