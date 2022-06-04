import './Hero.scss';
import profile from '/images/profile.jpeg';
import { Navigation } from '../../components';

import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section id="hero" className="section-hero">
      <Navigation />
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
            <button className="section-hero__content-buttons__button">
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
