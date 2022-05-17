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
      <h3>NGC Client Accounts</h3>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How do I renew my prescription when it expires?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              Like other prescription medications, a patient is required to visit their prescribing Health Care Professional for a follow-up assessment to renew their medical cannabis prescription. Once we’ve received and processed your new Medical Document, we will send you a renewal email with a link to confirm your re-registration. Once you confirm your renewal information, you will be approved to shop with us once again.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Why does my account say it is 'inactive'?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            If your account says ‘INACTIVE’, it means that your account has some information outstanding or unverified, and you are not able to order medical cannabis until the given issue is rectified. Your account will remain ‘INACTIVE’ until the required information has been submitted and confirmed.</p>
            <p>You can usually find what the specific issue with your account is by navigating to your Account page within our Client Portal.</p>
            <p>You may also have an ‘INACTIVE’ account status if your prescription has expired without being renewed. Our Client Services team sends out periodic reminder emails to renew your prescription when you’re close to the prescription expiry date - look out for these in your inbox to ensure you don’t experience any service disruptions.</p>
            <p>If you are having difficulties, please contact us regarding your account status at: clientservices@northerngreencanada.com or 1-866-233-3707
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Can I claim my medical cannabis on my tax return?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            Yes you can!</p>
            <p>Anyone with a valid prescription to purchase medical cannabis from a licensed producer qualifies for this claim. The Canada Revenue Agency allows medical cannabis to be claimed as a ‘medical expense’ deduction on your federal income taxes. Please note that only cannabis products qualify for this claim - you cannot claim costs related to accessories or growing, such as vaporizers, storage, lights, and so forth.</p>
            <p>Remember to keep all of your order receipts from your orders with us for your tax return. If you do lose your receipts, don’t worry! You will also have all of your order receipts available in your account on our Client Portal for access at any time.
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>How do I make changes to my account information?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
            To make changes to your account information, such as changing your contact information or shipping address, contact our Client Services team at:</p>
            <p>ClientServices@northerngreencanada.com or 1-866-233-3707
            </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <p>Is my account information confidential?</p>
        </AccordionSummary>
        <AccordionDetails>
            <p>
              Of course! All of your personal information and payment information is kept strictly confidential and is encrypted on our platform. We also use industry leaders in terms of privacy, security, and trust for our internal information storage and payment processing.
            </p>
        </AccordionDetails>
      </Accordion>
    </>
    )
}

export default FAQGroup;
