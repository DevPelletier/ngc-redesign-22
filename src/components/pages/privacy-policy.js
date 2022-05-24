import React from 'react';
import '../../styles/app.scss';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Helmet } from 'react-helmet';

const pageTitle = 'Privacy Policy | Northern Green Canada';

function Page() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section class="legal-page">
      <div className="inner-section width-03 text-centered bg-f7f8f9-bigknot-center">
        <div className="text-container">
          <h2>Privacy Policy</h2>

          <p>On this webpage, we set out: </p>
          <ol>
            <li>
              <p><strong>Our Privacy Policy, and</strong></p>
            </li>
            <li>
              <p><strong>Our Public Social Media Policy</strong></p>
            </li>
          </ol>
          <p>By using this website and any of our services, including creating an account to make purchases through this website, using our online shopping portal, and speaking with our Client Care Department, you consent to our collection of certain personal information about you.</p>
          <p>If you do not wish for us to collect your personal information, please do not use this website or our services.</p>
          <br /><br />
          <h4>1.1 Overview</h4>
          <p>This privacy policy (“Privacy Policy”) explains how your personal information is collected, used and disclosed by NGC. This Privacy Policy is based on the federal Personal Information Protection and Electronic Documents Act as well as the relevant provincial legislation concerning the collection, use and protection of medical information such as the Personal Health Information Protection Act (Ontario).</p>
          <br /><br />
          <h4>1.2 Collection, Use and Disclosure of Personal Information</h4>
          <p>“Personal Information” is any information about an identifiable individual.<br />NGC collects Personal Information directly from our clients, their authorized representatives, and their doctors, nurse practitioners, and other medical professionals as applicable. We collect Personal Information from you when you register for an account, place an order, subscribe to our communications, respond to a survey or enter information on the Website.</p>
          <p>We will use your Personal Information:</p>
          <ol>
            <li>To maintain your account with us;</li>
            <li>To process your Product orders and deliveries;</li>
            <li>For related administrative purposes; and</li>
            <li>For such other purposes to which you may consent. </li>
          </ol>
          <p>We may also use your Personal Information for statistical purposes, for example to identify the types of diagnoses that our clients are using cannabis to treat, and the types of strains or characteristics of cannabis that are most beneficial for different diagnoses.  We may publish and/or disclose to third parties such aggregate statistics, but we will not disclose any identifiable Personal Information except in accordance with this Policy.</p>
          <br /><br />
          <h4>1.3 Examples of Personal Information Collection, Use, and Disclosure</h4>
          <p>Without limiting the generality of any of the foregoing, NGC may collect, use, and disclose your Personal Information as follows:</p>
          <ol>
            <li>When you register with us and create an account, NGC may collect and use your Personal Information to confirm your registration status and to maintain your registered account;</li>
            <li>To fulfill your order, NGC has a regulatory obligation to collect certain Personal Information about you, including certain health care information, and to confirm such information with your doctor or nurse practitioner;</li>
            <li>When you purchase a product from us, NGC may collect certain Personal Information, including credit card or other financial information to process the transaction;</li>
            <li>If you call us or correspond with us, NGC may collect and use your Personal Information, including by recording those calls, for quality assurance and training purposes, and to help us develop and improve our services;</li>
            <li>NGC may use your Personal Information to manage and administer our business, including maintaining business records, and analyzing, developing and improving our products and services;</li>
            <li>NGC may use your Personal Information to send you communications, including updates and bulletins;</li>
            <li>NGC may collect and use Personal Information you voluntarily provide in order to develop and improve our products and services;</li>
            <li>NGC may collect and use your Personal Information if you participate in interactive services such as message boards, user reviews, or other similar functions;</li>
            <li>NGC may collect cookies in connection with your use of our website and may use such data to optimize the website content and function;</li>
            <li>NGC may collect and use your Personal Information in connection with evaluating resumés and other information submitted to us in connection with employment opportunities, including to keep such information on file for candidates who are not offered a position, in the event that a comparable position becomes available later on; and</li>
            <li>NGC may collect, use and disclose Personal Information in order to comply with our regulatory obligations and other applicable law.</li>
          </ol>
          <br /><br />
          <h4>1.4 Access to your Personal Information</h4>
          <p>You may request access to any of your Personal Information in our possession, including to correct such Personal Information.</p>
          <p>Summary Personal Information is available on reasonable notice. More detailed requests which require retrieval costs may be subject to reasonable costs.</p>
          <p>Your rights to access your Personal Information are not absolute. We may deny you access to your Personal Information when:</p>
          <ol>
            <li>It is required or authorized by law, including when a record containing your Personal Information is protected by solicitor-client privilege;</li>
            <li>To do so would reveal confidential commercial information and the Personal Information cannot be severed from the record;</li>
            <li>To do so could reasonably be expected to threaten the life or security of another individual and the Personal Information cannot be severed from the record; or</li>
            <li>The Personal Information was generated in the course of a formal dispute resolution process.</li>
          </ol>
          <p>If we deny your request for access to your Personal Information, we will explain the reason for such denial.</p>
          <br /><br />
          <h4>1.5 Security of Your Personal Information</h4>
          <p>We take reasonable precautions to ensure that your Personal Information is kept safe from loss, theft, unauthorized access, disclosure, copying, use or modification. The steps we take to protect your personal information include:</p>
          <ol>
            <li>Premises security; and</li>
            <li>Restricted file access to Personal Information.</li>
          </ol>
          <br /><br />
          <h4>1.6 Use of Cookies</h4>
          <p>We may collect some information about your computer (commonly known as “cookies”) when you look at our website. The type of information we may collect from cookies includes your IP address, the date and time the computer visited the website, and how the website was used.</p>
          <p>We use the cookie information to improve our knowledge of the use of our website. You can erase or block cookies from being collected by changing the settings on your internet browser.</p>
          <br /><br />
          <h4>1.7 Third Party Links</h4>
          <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party websites may have separate and independent privacy policies. We therefore have no responsibility or liability of these linked sites.</p>
          <br /><br />
          <h4>1.8 Changes to This Privacy Policy</h4>
          <p>From time to time NGC may update this Privacy Policy. You agree to review this Privacy Policy regularly for any changes.</p>
          <br /><br />
          <h4>1.9 Personal Information Posted by You</h4>
          <p>If you submit any user feedback, creative ideas, suggestions, proposals, plans, recipes, photos, images or other materials (collectively, “Comments”) which contain your Personal Information to NGC, you consent to the collection, retention, and public disclosure by NGC of such Comments, including any Personal Information they contain.</p>
          <p>If you believe that your Personal Information has been posted by a third party without your consent, you should contact NGC by phone at 1-905-235-0348 or by email at privacy@northerngreencanada.com.</p>
          <br /><br />
          <h4>1.10 Contacting Us</h4>
          <p>If you have questions about this Privacy Policy, please call us at 1-905-235-0348 or email us at privacy@northerngreencanada.com.</p>
          <p> </p>
          <h2>2. PUBLIC SOCIAL MEDIA POLICY</h2>
          <h4>2.1 General</h4>
          <p>NGC has and is developing a range of social media channels, which we invite people to like or follow us on. We use these different channels to provide company updates and to get valuable feedback from you – our customers and general audience.</p>
          <p>In addition to complying with NGC’s policies and terms and conditions, please respect the guidelines currently in place of whichever social media channel you are using.</p>
          <br /><br />
          <h4>2.2 Acceptable Use of NGC’s Social Media</h4>
          <p>We reserve the right to remove any contributions that break the rules of the relevant social media channel, or which are not in line with the following general guidelines:</p>
          <ol>
            <li>Be tasteful with your posts and comments;</li>
            <li>Do not post messages that are unlawful, offensive, or otherwise objectionable;</li>
            <li>Do not post the same message or similar messages more than once (also called “spamming”); and</li>
            <li>Do not advertise products or services.</li>
          </ol>
          <p>NGC reserves the right to restrict or remove any content that is deemed in violation of this social media policy or any applicable law, and to block any users from its social media channels at its sole discretion and without explanation.</p>
          <br /><br />
          <h4>2.3 Contacting Us</h4>
          <p>If you have questions about this Public Social Media Policy, please call us at 1-877-291-3394 or email us at privacy@northerngreencanada.com.</p>

        </div>
      </div>
    </section>

    </>
  );
}

export default Page;
