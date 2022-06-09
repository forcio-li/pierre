import './Hero.scss';
import profile from '/images/profile.jpeg';
import { Navigation } from '../../components';

import Typewriter from 'typewriter-effect';
import ReactModal from 'react-modal';
import { useState } from 'react';

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

  return (
    <section id="hero" className="section-hero">
      <Navigation />
      <ReactModal
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
          <div className="title">Get in touch</div>
          <div className="section-hero__modal-content-close">
            <button onClick={handleCloseModal}>
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          <div className="section-hero__modal-content-wrapper">
            <form className="section-hero__modal-content__form">
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
                <p className="or">
                  <i className="fa-solid fa-minus"></i>
                </p>
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
                </div>
              </div>
            </form>
            <div className="section-hero__modal-content__infos"></div>
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
                  strings: [
                    'available for work',
                    'really curious',
                    'in love with the coffee',
                    'addicted to cats',
                  ],
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
            <button className="section-hero__content-buttons__button inverted">
              Learn more <i className="fa-solid fa-arrow-down" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
