import './Hero.scss';
import profile from '/images/profile.png';
import { Navigation } from '../../components';
import { taglineStrings } from '../../data/taglineStrings';

import Typewriter from 'typewriter-effect';
import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [transitionModal, setTransitionModal] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setTransitionModal(true);
    }, 1);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTransitionModal(false);
  };

  const handleScrolltoStudies = () => {
    const studies = document.getElementById('studies')?.offsetTop;
    const nav = document.getElementById('nav')?.offsetHeight;

    window.scrollTo({
      top: nav && studies ? studies - nav : 0,
      behavior: 'smooth',
    });
  };

  return (
    <section id="hero" className="section-hero">
      <Navigation />
      <ReactModal
        appElement={document.getElementById('root') || document.body}
        isOpen={modalVisible}
        onRequestClose={handleCloseModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        overlayClassName={`section-hero__modal-overlay${
          transitionModal ? ' visible' : ''
        }`}
        className="section-hero__modal"
      >
        <div className="section-hero__modal-content">
          <div className="section-hero__modal-content-close">
            <button onClick={handleCloseModal}>
              <i className="fa-solid fa-times"></i>
            </button>
          </div>

          <div className="title">Get in touch</div>
          <div className="section-hero__modal-content-wrapper">
            <form
              className="section-hero__modal-content__form"
              name="contact"
              data-netlify="true"
              method="POST"
              action="/#/?success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="section-hero__modal-content__form-duo">
                <div className="section-hero__modal-content__form-block duo">
                  <label htmlFor="firstname">Firstname</label>
                  <input type="text" id="firstname" name="firstname" />
                </div>
                <div className="section-hero__modal-content__form-block duo">
                  <label htmlFor="lastname">Lastname</label>
                  <input type="text" id="lastname" name="lastname" />
                </div>
              </div>
              <div className="section-hero__modal-content__form-block">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="section-hero__modal-content__form-block">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </div>
              <div className="section-hero__modal-content__form-block buttons">
                <button type="submit">
                  Send<i className="fa-solid fa-paper-plane"></i>
                </button>
                <div className="socials">
                  <button type="button" className="twitter">
                    <a href="https://twitter.com/messages/compose?recipient_id=1305564898873823234">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </button>
                  <button type="button" className="linkedin">
                    <a href="https://www.linkedin.com/in/pierreforcioli/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </button>
                  <button type="button" className="mail">
                    <a href="mailto:pierre.forcioli.06@gmail.com">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ReactModal>
      <div className="section-hero__wrapper">
        <div className="section-hero__tagline">
          <img
            src={profile}
            alt="Pierre Forcioli"
            className="section-hero__tagline-picture"
            width={300}
            height={300}
          />
          <div className="section-hero__tagline-text">
            <span className="section-hero__tagline-text-name">
              Pierre Forcioli
            </span>
            <div className="section-hero__tagline-text-job">
              Software Engineer at{' '}
              <a href="https://holbertonschool.com" target="_blank">
                <span className="section-hero__tagline-text-job__link">
                  Holberton School
                </span>
              </a>
              .
            </div>
          </div>
        </div>
        <div className="section-hero__content">
          <div className="section-hero__content-me">
            <i className="fa-solid fa-terminal" />
            <p className="section-hero__content-me-text typewriter">I am</p>
            <div className="section-hero__content-me-text typewriter">
              <Typewriter
                options={{
                  strings: taglineStrings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="section-hero__content-me-text normal">
              I am available for work
            </p>{' '}
          </div>
          <div className="section-hero__content-buttons">
            <button
              className="section-hero__content-buttons__button"
              onClick={handleOpenModal}
            >
              Get in touch <i className="fa-solid fa-rocket" />
            </button>
            <button
              className="section-hero__content-buttons__button inverted"
              onClick={handleScrolltoStudies}
            >
              More about me <i className="fa-solid fa-arrow-down" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
