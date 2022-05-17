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
      <h3 >About NGC</h3>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>What licenses/health certifications does NGC hold?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            NGC is federally licensed under the Cannabis Act, issued by Health Canada, to cultivate, process, and sell cannabis for medical and non-medical purposes.</p>
            <p>The common term ‘LP’ stands for ‘Licensed Producer’, which essentially means that NGC is licensed to produce cannabis in some capacity, along with other Canadian ‘LP’s.</p>
            <p>However, not all LPs are equal - some are only licensed for some part of the process. For example, some LPs are only licensed to cultivate, and send their raw cannabis product to a different LP for processing, and then yet another to sell the finished cannabis products. NGC is licensed fully licensed under the Cannabis Act to cultivate, process, and sell our cannabis products.</p>
            <p>This way, we have full control over the entire process, so you can trust that NGC cannabis products are going to be of the highest quality without external interference.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Are NGC products organic?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              Northern Green products are not currently officially certified as organic. However, our facility and grow-practices are of the highest quality found in the industry, and we take great pride in our ability to grow the best-quality cannabis without the need for chemical pesticides or irradiation.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Does NGC have GMP certification?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              The Northern Green team are actively procuring EU-GMP certification, and hope to obtain this certification in the very near future. For more information on GMP: See Health Canada's info-page on GMP.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How is your dried flower packaged?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              Our team hand-packs every single package that leaves our facility. This is done to ensure that every package matches the advertised weight, and that the buds are distributed in a way that ensures every package contains the best possible product.
            </p>
        </AccordionDetails>
      </Accordion>
    </>
    )
}

export default FAQGroup;
