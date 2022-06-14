import React from 'react';
import '../../styles/app.scss';
import '../../styles/components/info-cards.scss';
import { Button } from '../button';
import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from 'react-router-dom';


function InfoCards() {
    return (
        <>
        <section className="info-cards">

        <Switch>
          <Route path="/support-programs">

            <div className="inner-section width-02 info-card-container">
              <div className="info-card border-radius">
                <h4>Veterans 🇨🇦</h4>
                <p>We support our nations' veterans! Northern Green is dedicated to helping you navigate the Veterans Affairs Canada system. We ensure you are getting all the benefits and entitlements you deserve and access the medication you need.</p>
                <Button
                  url="/veterans"
                  >
                  Learn More
                </Button>
              </div>
              <div className="info-card border-radius">
                <h4>Front-Line Workers</h4>
                <p>In these unprecedented times, NGC wants to recognize and thank the Front-Line Workers that helped, and continue to help us all get through the pandemic.</p>
                <Button
                  url="/frontline-workers"
                  >
                  Learn More
                </Button>
              </div>
              <div className="info-card border-radius">
                <h4>Seniors</h4>
                <p>Northern Green Canada supports our nations' elders! Living on a retirement income or CP benefits can create barriers to access for seniors who rely on medical cannabis for relief. Our aim is to help you access affordable medication by giving you greater access to cannabis medicines that best fits your needs and budget. NGC is now offering a seniors discount with proof of income or CP payments.</p>
                <Button
                  url="/seniors-discount"
                  >
                  Learn More
                </Button>
              </div>
              <div className="info-card border-radius">
                <h4>Low-Income Pricing</h4>
                <p>NGC offers a Compassionate Pricing Program to our clients who qualify for financial assistance to obtain medical cannabis. Our goal is to protect your safety and empower your ability to get access to medical cannabis for your health care needs. At NGC, our Compassionate Pricing Program is applicable to all our products and strains. We believe in staying inclusive and enabling our clients to apply their Compassionate Pricing discount to any strain and product we offer.</p>
                <Button
                  url="/compassionate-pricing-low-income"
                  >
                  Learn More
                </Button>
              </div>
              <div className="info-card border-radius">
                <h4>Insurance Coverage</h4>
                <p>Insurance coverage can make a big difference in the affordability of your medical cannabis. Unlike other prescription medications, medical cannabis has not been issued a “DIN” or Drug Identification Number.</p>
                <p>To find out if you qualify, check directly with your insurance provider or plan administrator. We also provide up-to-date information below on which Canadian insurance companies are currently offering coverage to medical cannabis patients.</p>
                <Button
                  url="/insurance-coverage"
                  >
                  Learn More
                </Button>
              </div>

            </div>

          </Route>
          <Route path="/veterans">
            <div className="inner-section width-02 info-card-container">
              <div className="info-card border-radius">
                <h4>Veterans Affairs Canada</h4>
                <p>To arrange direct billing for our veteran patients, Veterans Affairs Canada requires NGC to provide your information, for which we will need your permission.</p>
                <Button
                  url="/"
                  target="_blank"
                  >
                  VAC Form PDF
                </Button>
              </div>
            </div>

          </Route>
          <Route path="/insurance-coverage">
            <div className="inner-section width-02 info-card-container">
              <div className="info-card border-radius">
                <h4>Info Card Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente sequi, quod commodi asperiores voluptatem placeat rerum velit nostrum quasi facere repudiandae similique a, quo officia deleniti saepe sint dignissimos.</p>
                <Button
                  url="/"
                  >
                  Patient Support
                </Button>
              </div>
              <div className="info-card border-radius">
                <h4>Info Card Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente sequi, quod commodi asperiores voluptatem placeat rerum velit nostrum quasi facere repudiandae similique a, quo officia deleniti saepe sint dignissimos.</p>
                <Button
                  url="/"
                  >
                  Patient Support
                </Button>
              </div>
              <div className="info-card border-radius">
                <h4>Info Card Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente sequi, quod commodi asperiores voluptatem placeat rerum velit nostrum quasi facere repudiandae similique a, quo officia deleniti saepe sint dignissimos.</p>
                <Button
                  url="/"
                  >
                  Patient Support
                </Button>
              </div>
              <div className="info-card border-radius">
                <h4>Info Card Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente sequi, quod commodi asperiores voluptatem placeat rerum velit nostrum quasi facere repudiandae similique a, quo officia deleniti saepe sint dignissimos.</p>
                <Button
                  url="/"
                  >
                  Patient Support
                </Button>
              </div>
            </div>

          </Route>
          <Route path="/compassionate-pricing-low-income">
            <div className="inner-section width-02 info-card-container">
              <div className="info-card border-radius">
                <h4>Compassionate Pricing Form</h4>
                <p>Our Compassionate Pricing Program are for those individuals living on an income under $30,000.00 per year. Clients who qualify under the compassionate pricing program are eligible to receive 20% off their purchase of medical cannabis products.</p>
                <p>To become eligible, clients will have to complete the form below and submit the appropriate supporting documentation along with a client registration application.</p>
                <Button
                  url="/"
                  >
                  Download PDF Form
                </Button>
              </div>
            </div>

          </Route>
          <Route path="/seniors-discount">
            <div className="inner-section width-02 info-card-container">
              <div className="info-card border-radius">
                <h4>Seniors Discount Form</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laudantium, quae labore eius. Laborum nesciunt fuga sunt perferendis architecto ipsa ipsum, inventore fugiat natus labore modi velit officiis eos. Reprehenderit.</p>
                <Button
                  url="/"
                  >
                  Download PDF Form
                </Button>
              </div>
            </div>

          </Route>
          <Route path="/healthcare-professionals-clinics">
            <div className="inner-section flex-center-col">
              <h2>Patient Prescriptions & Registration</h2>
              <h4>Medical Document Secure Fax: 1-877-291-3394</h4>
              <br />
            </div>
            <div className="inner-section width-02 info-card-container">
              <div className="info-card border-radius">
                <div>
                  <h4>Registration Form</h4>
                  <p>Under Health Canada regulations, all patients must register with their chosen Licensed Cannabis Producer in order to purchase medical cannabis products.</p>
                  <p>You can register online, or by submitting a <a href="/" target="_blank">PDF Registration Form</a> to NGC by email or by post.</p>
                </div>
                <div>
                  <Link to="/" className="primary-link">
                    PDF Form
                  </Link>
                  <Button
                    url="/register"
                    buttonStyle="btn--secondary"
                    >
                    Online Registration
                  </Button>
                </div>
              </div>
              <div className="info-card border-radius">
                <div>
                  <h4>Medical Document</h4>
                  <p>This document is required by Health Canada for NGC to fulfill a medicinal cannabis prescription. Please submit this form by secure fax or by mail to the fax number and mailing address - this info is on the front page of the form.</p>
                </div>

                <Button
                  url="/"
                  buttonStyle="btn--secondary"
                  >
                  Medical Document PDF
                </Button>
              </div>
            </div>
          </Route>
          <Route path="/find-a-clinic">
            <div className="inner-section width-01 info-card-container grid-3-col">
              <div className="info-card clinic border-radius">
                <div className="container">
                  <h4>Toronto Poly Clinic - North York</h4>
                  <p>5460 Yonge St, Unit #204<br />Toronto, ON</p>
                  <div className="link-container">
                    <h3 className="left">
                      <span class="material-symbols-rounded">open_in_new</span>
                    </h3>
                    <Link to="http://www.torontopolyclinic.com/" className="right">
                      TorontoPolyClinic.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">mail</span>
                    </h3>
                    <Link to="mailto:mmp@torontopolyclinic.com" className=" right">
                      mmp@torontopolyclinic.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">android_dialer</span>
                    </h3>
                    <Link to="" className=" right">
                      416-250-7171
                    </Link>
                  </div>
                </div>
                <Button
                  url="https://goo.gl/maps/AzeNr8riqknvdRTn7"
                  buttonStyle="btn--secondary"
                  target="_blank"
                  >
                  Find On Maps
                </Button>
              </div>
              <div className="info-card clinic border-radius">
                <div>
                  <h4>Toronto Poly Clinic - Thornhill</h4>
                  <p>298 John St, Unit #CRU-3<br />Thornhill, ON</p>
                  <div className="link-container">
                    <h3 className="left">
                      <span class="material-symbols-rounded">open_in_new</span>
                    </h3>
                    <Link to="http://www.torontopolyclinic.com/" className=" right">
                      TorontoPolyClinic.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">mail</span>
                    </h3>
                    <Link to="mailto:mmp@torontopolyclinic.com" className=" right">
                      mmp@torontopolyclinic.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">android_dialer</span>
                    </h3>
                    <Link to="" className=" right">
                      905-482-8648
                    </Link>
                  </div>
                </div>
                <Button
                  url="https://goo.gl/maps/buv1PV8kNQ5f4kUL6"
                  buttonStyle="btn--secondary"
                  target="_blank"
                  >
                  Find On Maps
                </Button>
              </div>
              <div className="info-card clinic border-radius">
                <div>
                  <h4>Apollo Cannabis Clinics - Etobicoke</h4>
                  <p>295 The West Mall, Unit #100<br />Etobicoke, ON</p>
                  <div className="link-container">
                    <h3 className="left">
                      <span class="material-symbols-rounded">open_in_new</span>
                    </h3>
                    <Link to="http://www.apollocannabis.ca/" className=" right">
                      ApolloCannabis.ca
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">mail</span>
                    </h3>
                    <Link to="mailto:booking@apolloresearch.com" className=" right">
                      booking@apolloresearch.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">android_dialer</span>
                    </h3>
                    <Link to="" className=" right">
                      (877) 560-9195
                    </Link>
                  </div>
                </div>
                <Button
                  url="https://goo.gl/maps/buv1PV8kNQ5f4kUL6"
                  buttonStyle="btn--secondary"
                  target="_blank"
                  >
                  Find On Maps
                </Button>
              </div>
              <div className="info-card clinic border-radius">
                <div>
                  <h4>Apollo Cannabis Clinics - Yonge & Eglinton</h4>
                  <p>2352 Yonge St, Second Floor<br />Toronto, ON</p>
                  <div className="link-container">
                    <h3 className="left">
                      <span class="material-symbols-rounded">open_in_new</span>
                    </h3>
                    <Link to="http://www.apollocannabis.ca/" className=" right">
                      ApolloCannabis.ca
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">mail</span>
                    </h3>
                    <Link to="mailto:booking@apolloresearch.com" className=" right">
                      booking@apolloresearch.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">android_dialer</span>
                    </h3>
                    <Link to="" className=" right">
                      (877) 560-9195
                    </Link>
                  </div>
                </div>
                <Button
                  url="https://goo.gl/maps/buv1PV8kNQ5f4kUL6"
                  buttonStyle="btn--secondary"
                  target="_blank"
                  >
                  Find On Maps
                </Button>
              </div>
              <div className="info-card clinic border-radius">
                <div>
                  <h4>Apollo Cannabis Clinics - Yorkville</h4>
                  <p>1255 Bay St Unit #702<br />Toronto, ON</p>
                  <div className="link-container">
                    <h3 className="left">
                      <span class="material-symbols-rounded">open_in_new</span>
                    </h3>
                    <Link to="http://www.apollocannabis.ca/" className=" right">
                      ApolloCannabis.ca
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">mail</span>
                    </h3>
                    <Link to="mailto:booking@apolloresearch.com" className=" right">
                      booking@apolloresearch.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">android_dialer</span>
                    </h3>
                    <Link to="" className=" right">
                      (877) 560-9195
                    </Link>
                  </div>
                </div>
                <Button
                  url="https://goo.gl/maps/buv1PV8kNQ5f4kUL6"
                  buttonStyle="btn--secondary"
                  target="_blank"
                  >
                  Find On Maps
                </Button>
              </div>
              <div className="info-card clinic border-radius">
                <div>
                  <h4>Apollo Cannabis Clinics - Aurora</h4>
                  <p>372 Hollandview Trail Unit #201<br />Aurora, ON</p>
                  <div className="link-container">
                    <h3 className="left">
                      <span class="material-symbols-rounded">open_in_new</span>
                    </h3>
                    <Link to="http://www.apollocannabis.ca/" className=" right">
                      ApolloCannabis.ca
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">mail</span>
                    </h3>
                    <Link to="mailto:booking@apolloresearch.com" className=" right">
                      booking@apolloresearch.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">android_dialer</span>
                    </h3>
                    <Link to="" className=" right">
                      (877) 560-9195
                    </Link>
                  </div>
                </div>
                <Button
                  url="https://goo.gl/maps/buv1PV8kNQ5f4kUL6"
                  buttonStyle="btn--secondary"
                  target="_blank"
                  >
                  Find On Maps
                </Button>
              </div>
              <div className="info-card clinic border-radius">
                <div>
                  <h4>Apollo Cannabis Clinics - North York</h4>
                  <p>240 Duncan Mill Rd, Suite #201<br />Toronto, ON</p>
                  <div className="link-container">
                    <h3 className="left">
                      <span class="material-symbols-rounded">open_in_new</span>
                    </h3>
                    <Link to="http://www.apollocannabis.ca/" className=" right">
                      ApolloCannabis.ca
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">mail</span>
                    </h3>
                    <Link to="mailto:booking@apolloresearch.com" className=" right">
                      booking@apolloresearch.com
                    </Link>
                    <h3 className="left">
                      <span class="material-symbols-rounded">android_dialer</span>
                    </h3>
                    <Link to="" className=" right">
                      (877) 560-9195
                    </Link>
                  </div>
                </div>
                <Button
                  url="https://goo.gl/maps/buv1PV8kNQ5f4kUL6"
                  buttonStyle="btn--secondary"
                  target="_blank"
                  >
                  Find On Maps
                </Button>
              </div>


            </div>
          </Route>
          <Route path="/careers">
            <div className="inner-section flex-center-col">
              <h2>Available Positions</h2>
            </div>
            <div className="inner-section width-02 info-card-container">
              <div className="info-card border-radius">
                <div>
                  <h4>No Current Available Positions</h4>
                  <p>Northern Green Canada is not currently accepting applications. Check back soon for updates and openings!</p>
                  <h3>MAY, 2022</h3>
                </div>
                <Button
                  url="mailto:ClientServices@northerngreencanada.com"
                  >
                  Contact Us
                </Button>
              </div>
            </div>
          </Route>
          <Route path="/client-forms">
            <div className="inner-section width-02 info-card-container">
              <div className="info-card border-radius">
                <div>
                  <h4>Registration Form</h4>
                  <p>Registering with us is the first step to gaining access to Northern Green medical cannabis products. You can register online, or by submitting a <a href="/" target="_blank">PDF Registration Form</a> to NGC by email or by post.</p>
                </div>
                <div>
                  <Link to="/" className="primary-link">
                    PDF Form
                  </Link>
                  <Button
                    url="/register"
                    buttonStyle="btn--secondary"
                    >
                    Online Registration
                  </Button>
                </div>
              </div>
              <div className="info-card border-radius">
                <div>
                  <h4>Medical Document</h4>
                  <p>This form is for your Medical Information and Prescription, and is to be completed by a Health Care Professional. Any prescribing HCP can complete and submit this document for you, from your family doctor to your local cannabis clinic.</p>
                  <p>Be sure to bring the NGC Medical Document with you to your appointment, and request to have NGC as your chosen provider.</p>
                </div>
                <Button
                  url="/"
                  buttonStyle="btn--secondary"
                  >
                  PDF Download
                </Button>
              </div>
            </div>
          </Route>



          <Route>
            // <p>Nothing here!</p>
          </Route>

        </Switch>

        </section>
        </>
    )
}

export default InfoCards
