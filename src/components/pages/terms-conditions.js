import React from 'react';
import '../../styles/app.scss';
import '../../styles/layout/legal.scss';

import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Helmet } from 'react-helmet';

const pageTitle = 'Terms & Conditions | Northern Green Canada';

function Page() {
  return (
    <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <section class="legal-page">
      <div className="inner-section width-03 text-centered bg-f7f8f9-bigknot-center">
        <div className="text-container">
          <h2>Terms & Conditions</h2>

          <h4>1. General</h4>
          <p>This website is provided to you by Northern Green Canada Inc. (“NGC” or “us”). If you do not agree to these terms and conditions, please do not use our services or this website.</p>
          <h4>2. Not Medical Advice</h4>
          <p>Nothing in this website constitutes medical advice.</p>
          <p>We provide certain information about cannabis, including information about certain strains of cannabis and our cannabis products, for your general information only.</p>
          <p>You must consult your health care provider to make any decisions regarding your treatment.</p>
          <h4>3. Refusal of Service and Products</h4>
          <p>NGC may refuse to provide services or products to anyone, at any time, for any reason, subject to our regulatory obligations.</p>
          <p>If we believe that you have made a false or fraudulent order, we will be entitled to cancel the order and inform the relevant authorities in addition to pursuing any other rights or remedies we have at law</p>
          <h4>4. Client Registration</h4>
          <p>You must receive a registration number from NGC and create an account on our website in order to make any purchases of our products.</p>
          <p>When you register for an account and when you make any purchases through our website, the information you provide must be accurate and complete. Failure to do so could result in a delay or refusal of service.</p>
          <p>Once you have an account:</p>
          <ol>
            <li>You must keep your account password secure;</li>
            <li>You must not allow anyone else to use your account or have your password;</li>
            <li>You must notify us if you suspect there has been unauthorized use of your account;</li>
            <li>You must only use our products as prescribed by your doctor; and</li>
            <li>You must not resell or otherwise transfer our products to any other person.</li>
          </ol>
          <p>You are solely responsible for all activity that occurs using your account. We will not be liable to you or to any third party for any use (whether authorized or unauthorized) of your account.</p>
          <p>You acknowledge and agree that we may access and/or disclose your account and related information if required to do so by law or if we reasonably believe that such actions are reasonably required to comply with our legal obligations, enforce or fulfill these terms and conditions, or protect the rights, property or safety of NGC.</p>
          <h4>5. Use of Email</h4>
          <p>Email is not a completely secure means of communication. NGC takes no responsibility for the privacy, integrity, or authenticity of email communications you may send to NGC.</p>
          <h4>6. Products and Prices</h4>
          <p>All purchases through our website are subject to product availability. We may, in our sole discretion, limit or cancel sales of our products to any person, subject to our regulatory obligations.</p>
          <p>Prices for our products are subject to change without notice. Unless otherwise indicated, prices displayed on our website are quoted in Canadian dollars and do not include taxes or the cost of shipping.</p>
          <h4>7. No Warranty</h4>
          <p>All products are sold by NGC “as is” and without any representations, merchantability, fitness for a particular purpose or any other warranty, express or implied. NGC shall not be liable to you or any other person for any loss, claim, damage or liability of any kind or nature that may arise from or in connection with the use of any of our products or their components or derivatives.</p>
          <p>We do not warrant that the products will meet your expectations or will have any particular physiological or medical effect.</p>
          <p>Information we provide about the levels of delta-9-tetrahydrocannabinol (commonly known as “THC”), cannabidiol (commonly known as “CBD”) or any other cannabinoids or other chemical components of our products is provided by a third party testing laboratory. NGC accepts no responsibility for the accuracy of such test results.</p>
          <p>If you order any biological material from us, such as cannabis plants or other starting materials such as seeds (if available):</p>
          <ol>
            <li>NGC does not guarantee that the biological material will survive the shipping or delivery process when it is being transported to you;</li>
            <li>NGC does not guarantee that the biological material will be biologically viable in any way; and</li>
            <li>NGC does not guarantee that the biological material, if surviving or viable, will develop in accordance with the typical or expected characteristics (including the cannabinoid profile and gender) of any particular strain of cannabis.</li>
          </ol>
          <br />
          <h4>8. No Returns</h4>
          <p>All sales are final. No returns of any products are accepted and no exchanges are available.</p>
          <h4>9. User Comments, Feedback and Other Submissions</h4>
          <p>Anything you submit to us, including user feedback, creative ideas, suggestions, proposals, plans, recipes, photos, images or other materials (collectively, “Comments”) automatically becomes our property. This includes anything you post on any of our social media channels. For more information, please see our Privacy Policy and our Public Social Media Policy.</p>
          <p>By making such submissions, you automatically grant NGC a royalty-free, perpetual, irrevocable, non-exclusive and fully sublicensable- right and license to use, reproduce, modify, adapt, post, publish, edit, translate, distribute, broadcast, perform, create derivative work of and display such Comments alone, or as a part of other works in any form, media, or technology, whether now known or hereafter developed.</p>
          <p>NGC is under no obligation to maintain any submissions in confidence, pay compensation for any submissions; or respond to any submissions.<br />We may, but have no obligation to, edit or remove content that we determine in our sole discretion is unlawful, offensive, or otherwise objectionable or which violates these terms and conditions.</p>
          <p>In making any submissions:</p>
          <ol>
          <li>You agree that your Comments will not violate any right of any third party, including copyright, trademark, privacy, personality or other personal or proprietary right;</li>
          <li>You agree that your Comments will not contain libellous or otherwise offensive material, or contain any malware that could in any way affect the operation of our website;</li>
          <li>You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third parties as to the origin of any Comments; and</li>
          <li>You are solely responsible for any Comments you make and their accuracy. </li>
          </ol>
          <h4>10. Prohibited Use</h4>
          <p>In addition to other prohibitions as set forth in these terms and conditions, you are prohibited from using our website or our services:</p>
          <ol>
          <li>For any unlawful purpose;</li>
          <li>To solicit others to perform or participate in any unlawful acts;</li>
          <li>To violate any applicable laws;</li>
          <li>To infringe upon our intellectual property rights or the intellectual property rights of others;</li>
          <li>To insult or offend others;</li>
          <li>To submit false or misleading information;</li>
          <li>To upload or transmit any software or code that could affect the functionality or security of our website or other websites;</li>
          <li>To collect or track the personal information of others;</li>
          <li>To spam, phish, pharm, pretext, spider, crawl, or scrape; or</li>
          <li>In contravention of the rules of the applicable social media platform.</li>
          </ol>
          <p>We reserve the right to terminate your use of our website for violating any of the prohibited uses.</p>
          <h4>11. Disclaimer of Website and Services</h4>
          <ol>
          <li>The use of our website and services is at your sole risk.</li>
          <li>Our website may contain typographical errors and omissions from time to time. We reserve the right to correct such errors and to update information on the website, including pricing information about our products.</li>
          <li>NGC reserves the right, at any time and without notice, to modify or terminate any aspect of these terms and conditions, our services, and this website.</li>
          </ol>
          <h4>12. Links to Third Party Websites and Materials</h4>
          <p>We do not take responsibility for links from or to websites outside of our website. NGC may occasionally provide links to media coverage and other third party materials potentially of interest to our clients. NGC does not endorse or adopt the views, analysis or projections contained in such materials.</p>
          <h4>13. Limitation of Liability</h4>
          <p>In no event will NGC, or our affiliates, our or their respective content or service providers, or any of our or their respective directors, officers, agents, contractors, suppliers or employees be liable to you or any third party for any indirect, special, incidental, consequential, exemplary or punitive damages, losses or causes of action, or lost revenue, lost profits, lost business or sales, or any other type of damage, whether based in contract or tort (including negligence), strict liability or any other theory of law, arising from your use of, or the inability to use, or the performance or functionality of our website, any of our products or any content or material or available on or through our website, the cost of procurement of substitute goods, data, information or services, loss of data, errors, mistakes or inaccuracies in the materials on the website, or any personal injury or property damage. These limitations shall apply even if NGC is advised of the possibility of such damages.</p>
          <h4>14. Indemnification</h4>
          <p>You agree to indemnify, defend and hold harmless NGC and our shareholders, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees harmless from any claim or demand, including reasonable attorneys’ fees and court costs, made by any third party due to or arising out of your breach of these terms and conditions or any other policy of NGC, or your violation of any law or the rights of any third party.</p>
          <h4>15. Intellectual Property</h4>
          <p>NGC retains and reserves all intellectual property rights over its products, services, methods, and processes, including this website and any branding of NGC used on our website.</p>
          <p>By using or accessing this website, you agree to comply with all applicable intellectual property and copyright laws.</p>
          <h4>16. No Waiver</h4>
          <p>Our failure to exercise or enforce any right or provision of these terms and conditions will not constitute a waiver of such right or provision.</p>
          <h4>17. Governing Law</h4>
          <p>Any disputes arising out of or relating to these terms and conditions, our website, products, services, or any other policy of NGC must be brought before the courts of the Province of Ontario in the City of Toronto, Ontario and you irrevocably consent to the exclusive jurisdiction and venue of such courts.</p>
        </div>
      </div>
    </section>

    </>
  );
}

export default Page;
