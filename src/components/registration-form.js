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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


    return (
        <section className="registration-form">
          <div className="inner-section reg-form-container border-radius">
            <h2>Registration Form</h2>
            {submitting &&
              <>
                <h4>Submitting...</h4>
                <ul>
                  {Object.entries(formData).map(([name, value]) => (
                     <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                  ))}
                </ul>
              </>
            }
            <form onSubmit={handleSubmit}>
              <label className="mainLabel left">
                <p>First Name</p>
                <input name="firstname" type="text" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel right">
                <p>Last Name</p>
                <input name="lastname" type="text" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel full">
                <p>Email</p>
                <input name="email" type="email" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel left">
                <p>Date of Birth</p>
                <input name="dateofbirth" type="date" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel right">
                <p>Phone Number</p>
                <input name="phone" type="tel" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel full">
                <p>Address</p>
                <input name="address-1" type="text" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel left">
                <p>Address Line 2</p>
                <input name="address-2" type="text" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel right">
                <p>City</p>
                <input name="city" type="text" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel left">
                <p>Province</p>
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
                <p>Postal Code</p>
                <input name="postalcode" type="text" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel left">
                <p>Medical Document Upload</p>
                <Button>
                  Upload Medical Document
                </Button>
                <p className="sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam expedita reprehenderit voluptatem illo mollitia laborum repellendus ea saepe hic, voluptatibus officia perferendis possimus, veniam incidunt, fugit vero in cumque ullam.</p>
              </label>
              <label className="mainLabel right">
                <p>Medical Cannabis Newsletter</p>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="newsletter" name="newsletter" value="Newsletter Opt-In" onChange={handleChange} />
                  <label for="newsletter">I Opt-In to receiving updates on medicinal cannabis and NGC products</label>
                </span>
                <p className="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum semper nibh eu auctor. </p>
              </label>
              <label className="mainLabel left">
                <p>Veterans Affairs Canada - K Number</p>
                <input name="k-number" type="text" className="border-radius" onChange={handleChange} />
              </label>
              <label className="mainLabel right non-text-input">
                <p>NGC Support Programs</p>
                <p>I intend to apply for the below NGC Patient Support Program:</p>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="support1" name="support1" value="Frontline Workers Discount" onChange={handleChange} />
                  <label for="support1">Frontline Workers Discount</label>
                </span>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="support2" name="support2" value="Seniors' Discount" onChange={handleChange} />
                  <label for="support2">Seniors' Discount</label>
                </span>
                <span className="checkbox-container non-text-input">
                  <input type="checkbox" id="support3" name="support3" value="Low-Income Compassionate Pricing" onChange={handleChange} />
                  <label for="support3">Low-Income Compassionate Pricing</label>
                </span>
              </label>
              <label className="mainLabel full">
                <p>Patient Authorization</p>
                <p className="sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, cum asperiores voluptatum repudiandae reiciendis vitae voluptate autem magni cupiditate consequuntur. Esse eos dolorum asperiores quibusdam consequuntur exercitationem veritatis consectetur dolor.</p>
                <p className="sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, cum asperiores voluptatum repudiandae reiciendis vitae voluptate autem magni cupiditate consequuntur. Esse eos dolorum asperiores quibusdam consequuntur exercitationem veritatis consectetur dolor.</p>
                <span className="checkbox-container">
                  <input type="checkbox" id="authorization" name="authorization" value="Patient Authorization" onChange={handleChange} />
                  <label for="authorization">I accept the above authorization Patient Information and Signee Acknowledgements</label>
                </span>
              </label>


              <Button
              type="submit"
              buttonStyle="btn--secondary"
              >
                Submit Registration
                <span className="material-symbols-rounded">check_circle</span>
              </Button>
            </form>
          </div>
        </section>
    )
}

export default RegistrationForm
