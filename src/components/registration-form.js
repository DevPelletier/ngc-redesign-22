import React, { useReducer, useState } from 'react';
import '../styles/app.scss';
import { Button } from './button';
import '../styles/components/registration-form.scss';
import CustomDropdownScript from './custom-dropdown';


// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react
// USING THIS REACT FORM TUTORIAL TO BUILD THIS

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}



function RegistrationForm() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    setSubmitting(true);
    document.getElementById("formID").style.display = "none";
    document.getElementById("reg-form-sec").scrollIntoView({behavior: "smooth"});

    setTimeout(() => {
      setSubmitting(false);

      setTimeout(() => {
        setSubmitted(true);
      }, 0)

    }, 3000)

  }

  // const handleChange = event => {
  //   setFormData({
  //     name: event.target.name,
  //     value: event.target.value,
  //   });
  // }


    return (
        <section className="registration-form" id="reg-form-sec">
          <div className="inner-section reg-form-container border-radius">
            <div className="form-header">
              <div className="img-container exact-size">
                <img src="imgs/ngc_logobadge_green.jpg" alt=""/>
              </div>
              <h2>Registration Form</h2>
              <p><span className="required">*</span> - required field</p>
            </div>
            <form onSubmit={handleSubmit} id="formID">
              <label className="mainLabel left">
                <p>First Name <span className="required">*</span></p>
                <input name="firstname" type="text" className="border-radius" />
              </label>
              <label className="mainLabel right">
                <p>Last Name <span className="required">*</span></p>
                <input name="lastname" type="text" className="border-radius"  />
              </label>
              <label className="mainLabel full">
                <p>Email <span className="required">*</span></p>
                <input name="email" type="email" className="border-radius"  />
              </label>
              <label className="mainLabel left">
                <p>Date of Birth <span className="required">*</span></p>
                <input name="dateofbirth" type="date" className="border-radius"  />
              </label>
              <label className="mainLabel right">
                <p>Phone Number <span className="required">*</span></p>
                <input name="phone" type="tel" className="border-radius"  />
              </label>
              <label className="mainLabel full">
                <p>Address <span className="required">*</span></p>
                <input name="address-1" type="text" className="border-radius"  />
              </label>
              <label className="mainLabel left">
                <p>Address Line 2</p>
                <input name="address-2" type="text" className="border-radius"  />
              </label>
              <label className="mainLabel right">
                <p>City <span className="required">*</span></p>
                <input name="city" type="text" className="border-radius"  />
              </label>
              <label className="mainLabel left">
                <p>Province <span className="required">*</span></p>
                <span className="dropdown-container">
                  <select name="province" id="province">
                    <option value="quebec">AB</option>
                    <option value="british columbia">BC</option>
                    <option value="manitoba">MB</option>
                    <option value="new brunswick">NB</option>
                    <option value="newfoundland">NL</option>
                    <option value="nova scotia">NS</option>
                    <option value="nunavut">NV</option>
                    <option value="northwest territories">NWT</option>
                    <option value="ontario">ON</option>
                    <option value="prince edward island">PEI</option>
                    <option value="quebec">QC</option>
                    <option value="saskatchewan">SK</option>
                    <option value="yukon">YK</option>
                  </select>
                </span>
              </label>
              <label className="mainLabel right">
                <p>Postal Code <span className="required">*</span></p>
                <input name="postalcode" type="text" className="border-radius"  />
              </label>
              <label className="mainLabel left">
                <p>Medical Document Upload</p>
                <Button>
                  Upload Medical Document
                </Button>
                <p className="sm">NOTE: A Medical Document is not required for initial registration - please skip this step if you do not have a valid Medical Document.</p>
              </label>
              <label className="mainLabel right">
                <p>Medical Cannabis Newsletter</p>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="newsletter" name="newsletter" value="Newsletter Opt-In"  />
                  <label for="newsletter">I Opt-In to receiving updates on medicinal cannabis and NGC products</label>
                </span>
              </label>
              <label className="mainLabel left">
                <p>Veterans Affairs Canada - K Number</p>
                <input name="k-number" type="text" className="border-radius"  />
              </label>
              <label className="mainLabel right non-text-input">
                <p>NGC Support Programs</p>
                <p>I intend to apply for the below NGC Patient Support Program:</p>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="veterans" name="veterans" value="Frontline Workers Discount"  />
                  <label for="veterans">Veterans Discount</label>
                </span>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="frontline" name="frontline" value="Frontline Workers Discount"  />
                  <label for="frontline">Frontline Workers Discount</label>
                </span>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="seniors" name="seniors" value="Seniors' Discount"  />
                  <label for="seniors">Seniors' Discount</label>
                </span>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="comppricing" name="comppricing" value="Low-Income Compassionate Pricing"  />
                  <label for="comppricing">Low-Income Compassionate Pricing</label>
                </span>
              </label>
              <label className="mainLabel full">
                <p>Patient Authorization <span className="required">*</span></p>
                <p className="sm">Northern Green Canada (NGC) is required to collect the following personal information from applicants to comply with Health Canada regulations to Access to Cannabis for Medical Purposes Regulation (ACMPR). This information may be amended from time to time. The information collected by NGC stays confidential. NGC uses and discloses personal information in accordance with the provisions of the Personal Information Protection and Electronic Documents Act (PIPEDA), the Ontario Personal Information Protection Act, ACMPR, and NGC’s privacy policy. Personal information collected in these forms is only for the purposes of providing medical cannabis and related services to applicants.</p>
                <p>Signee Acknowledgements</p>
                <p className="sm">The signee hereby confirms the information set out in the application is correct and complete and that Northern Green Canada is relying on this information.</p>
                <p className="sm">The signee hereby states:</p>
                <ol type="a">
                  <li><p className="sm">
                    The applicant ordinarily resides in Canada;
                  </p></li>
                  <li><p className="sm">
                    The information in the application and the medical document is correct and complete;
                  </p></li>
                  <li><p className="sm">
                    The medical document is not being used to seek or obtain fresh or dried marihuana or cannabis oil from another source;
                  </p></li>
                  <li><p className="sm">
                    The original of the medical document is provided in support of the application;
                  </p></li>
                  <li><p className="sm">
                  The applicant will use fresh or dried marihuana or cannabis oil only for their own medical purposes.
                  </p></li>
                  <li><p className="sm">
                    The applicant consents to the health care practitioner named in the Medical document disclosing required personal health information to the Northern Green Canada for the purpose of registering the applicant in compliance with the requirements of the Access to Cannabis for Medical Purposes Regulations.
                  </p></li>
                  <li><p className="sm">
                    The applicant is aware that the benefits and risks associated with the use of marihuana are not fully understood and that the use of marihuana may involve risks that have not been identified; and the applicant accepts those risks
                  </p></li>
                  <li><p className="sm">
                    By signing this registration form, applicant or caregiver (if applicable) allow Northern Green Canada to send registration information to the mailing and email addresses provided therein.<br />
                    The signee hereby acknowledges that this Application requires you to provide certain Personal Information to Northern Green Canada. Such information is being collected and will be used by Northern Green Canada for the purposes of completing your registration, which includes, without limitation, determining your eligibility to purchase products from Northern Green Canada, for determining your qualification for financial assistance, if available to you, from certain third parties (i.e.Veteran’s Affairs Canada)<br />
                    Quebec’s Commission de la santé et de la sécurité du travail or private insurance companies) (collectively, “Authorized Third Parties”), for research and study purposes and for providing ongoing support to you. You hereby agree that your Personal Information may be disclosed by Northern Green Canada to: (a) Authorized Third Parties, (b) any parties, including but not limited medical or academic researchers, involved in conducting research or study services but only provided such parties are under strict obligations to maintain the confidentiality of the Applicant’s Personal Information and (c) Northern Green Canada client support team. By signing this Application, you consent to the foregoing collection, use and disclosure of your Personal Information.
                  </p></li>
                </ol>

                <span className="checkbox-container">
                  <input type="checkbox" id="authorization" name="authorization" value="Patient Authorization"  />
                  <label for="authorization">I accept the above authorization Patient Information and Signee Acknowledgements</label>
                </span>
              </label>

              <button
                type="submit"
                className="btn btn--secondary full"
                >
                Submit Registration
                <span className="material-symbols-rounded">check_circle</span>
              </button>
            </form>
            {submitting &&
              <>
                <div className="submitted-alert">
                  <h4>Submitting...</h4>
                </div>
              </>
            }
            {submitted &&
              <>
                <div className="submitted-alert">
                  <h4>Success!</h4>
                </div>
              </>
            }

          </div>
        </section>
    )
}

export default RegistrationForm

// UNUSED STUFF
// <Button
// type="submit"
// buttonStyle="btn--secondary"
// >
//   Submit Registration
//   <span className="material-symbols-rounded">check_circle</span>
// </Button>
