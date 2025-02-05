import React, { useState } from 'react';
import "./header.css";

const Header = () => {
   /*========== Change Background Header ==========================*/ 
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      // when the scroll is higher than 200 viewport height, add the Scroll-header class to a tag with the header tag
      if (this.scrollY >= 80) header.classList.add ("scroll-header");
      else header.classList.remove("scroll-header");
    });
    /*========== Toggle Menu ==========*/
    const [toggle, setToggle] = useState(false); // Changed variable name to lowercase "toggle" and function name to "setToggle"
    const [activeNav, setActiveNav] = useState("#home");
    
    return (
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">Imen</a>
          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}> {/* Changed Toggle to toggle */}
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#qualification"  onClick={() => setActiveNav("#qualification")} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-scenery nav__icon"></i> Qualification
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>

            <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i> {/* Changed class to className and Toggle to toggle */}

          </div>
          <div className="nav__toggle" onClick={() => setToggle(!toggle)}> {/* Changed Toggle to toggle */}
             <i className="uil uil-apps"></i> {/* Changed class to className */}
          </div>
        </nav>
      </header>
    );
  }
  
export default Header;
