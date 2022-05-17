import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import '../styles/components/navbar.scss';
import Burger from './burger';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Hide Button if window size is <=?px
  const showButton = () => {
    if(window.innerWidth <= 1300) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  // Ensures Buttons are HIDDEN if FIRST DOM load is <=Xpx
  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  // Removed Stuff
  // <div className="navcolorbar">
  //   <div></div><div></div>
  // </div>




    return (
        <nav className="navbar test">
          <div className="inner-section navbar-container">
            <div className="img-container exact-size">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src="./imgs/ngc_logo_wordmark_green.png" alt="Northern Green Canada Logo Wordmark Green" />
              </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              <Burger>{click ? 'close' : 'menu'}</Burger>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item dropdown">
                <button class="nav-links dropdown_btn">
                  Patients
                  <span className="material-symbols-rounded">arrow_drop_down</span>
                </button>
                <div class="dropdown_container">
                  <Link
                    to="/start-here"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Start Here
                    </div>
                  </Link>
                  <Link
                    to="/register"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      How to Register
                    </div>
                  </Link>
                  <Link
                    to="/transfer-your-prescription"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Transfer Your Rx
                    </div>
                  </Link>
                  <Link
                    to="/find-a-clinic"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Find A Clinic
                    </div>
                  </Link>
                  <Link
                    to="/support-programs"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      NGC Support Programs
                    </div>
                  </Link>
                  <Link to="/patient-faqs"
                  className='dropdown-link'
                  onClick={closeMobileMenu}
                  >
                    <div class="dropdown-btn">
                      FAQs
                    </div>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button class="nav-links dropdown_btn">
                  HCPs &<br />Clinics
                  <span className="material-symbols-rounded">arrow_drop_down</span>
                </button>
                <div class="dropdown_container">
                  <Link
                    to="/professionals-clinics/resources-hub"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Resources Hub
                    </div>
                  </Link>
                  <Link
                    to="/professionals-clinics/working-with-ngc"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Working with NGC
                    </div>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button class="nav-links dropdown_btn">
                  <Link
                    to="/learning-hub"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    Learn<br />Cannabis
                  </Link>
                  <span className="material-symbols-rounded">arrow_drop_down</span>
                </button>
                <div class="dropdown_container">
                  <Link
                    to="/learning-hub/article"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Medical Cannabis 101
                    </div>
                  </Link>
                  <Link
                    to="/is-medical-cannabis-right-for-me"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Is Medical Cannabis<br />Right For Me?
                    </div>
                  </Link>
                  <Link
                    to="/learning-hub/article"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Learn Dried Flower
                    </div>
                  </Link>
                  <Link
                    to="/learning-hub/article"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Learn Extracts
                    </div>
                  </Link>
                  <Link
                    to="/learning-hub/article"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Learn Vaporizers
                    </div>
                  </Link>
                  <Link
                    to="/learning-hub/article"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Learn Edibles
                    </div>
                  </Link>
                  <Link
                    to="/learning-hub/article"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Learn Cannabinoids<br />& Terpenes
                    </div>
                  </Link>
                  <Link
                    to="/learning-hub/article"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Learn The Science
                    </div>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <button class="nav-links dropdown_btn">
                  <Link
                    to="/shop"
                    onClick={closeMobileMenu}
                    >
                    Shop<br />Products
                  </Link>
                  <span className="material-symbols-rounded">arrow_drop_down</span>
                </button>
                <div class="dropdown_container">
                  <Link
                    to="/shop#most-popular"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Most Popular
                    </div>
                  </Link>
                  <Link
                    to="/shop#dried-flower"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Dried Flower
                    </div>
                  </Link>
                  <Link
                    to="/shop#oils"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Cannabis Oils
                    </div>
                  </Link>
                  <Link
                    to="/shop#sprays"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Cannabis Sprays
                    </div>
                  </Link>

                  <Link
                    to="/shop#vaporizers"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Vaporizers
                    </div>
                  </Link>
                  <Link
                    to="/shop#accessories"
                    className='dropdown-link'
                    onClick={closeMobileMenu}
                    >
                    <div class="dropdown-btn">
                      Accessories
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <Button
                  onClick={closeMobileMenu}
                  url="/sign-in"
                  >
                  Client Login
                </Button>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;
