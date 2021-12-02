import React, { Suspense } from "react";
import "../landing_page/landing.css";
import { useImage } from 'react-image';

/* eslint no-use-before-define: 0 */ // --> OFF

const Navbar = () => {
  function MyImageComponent() {
    const { src } = useImage({
      srcList: 'https://sntechnologies.org/wp-content/uploads/2021/08/undraw_events_trans.png',
    })

    return <img alt="image" src={src} />
  }
  return (
    <div>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="/" className="nav__logo">
              'O'ppointment
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link active">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="/contact" className="nav__link">
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <a href="/signup" className="nav__link">
                  Sign Up
                </a>
              </li>
              <li className="nav__item">
                <a href="/signin" className="nav__link">
                  Log In
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        <div className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi,
              <br />
              I'am <span className="home__title-color">'O'ppointment</span>
              <br />
              Your Assistant
            </h1>

            <a href="/" className="button">
              Contact
            </a>
          </div>

          <div className="home__social">
            <a href="/" className="home__social-icon">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="/" className="home__social-icon">
              <i className="bx bxl-behance"></i>
            </a>
            <a href="/" className="home__social-icon">
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <div className="home__img">
            <Suspense fallback={<div>Loading... </div>}>
              <MyImageComponent />
            </Suspense>
          </div>
        </div>

        <section className="about section " id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <Suspense fallback={<div>Loading... </div>}>

                <MyImageComponent />
              </Suspense>
            </div>

            <div>
              {/* <h2 className="about__subtitle">I'am Marlon</h2> */}
              <p className="about__text">
                This booking app will help you book appointments for your
                customer with ease and efficiently.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>

          <div className="contact__container bd-grid">
            <form action="" className="contact__form">
              <input type="text" placeholder="Name" className="contact__input" />
              <input type="mail" placeholder="Email" className="contact__input" />
              <textarea
                name=""
                id=""
                cols="0"
                rows="10"
                className="contact__input"
              ></textarea>
              <input
                type="button"
                value="Enter"
                className="contact__button button"
              />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Navbar;
