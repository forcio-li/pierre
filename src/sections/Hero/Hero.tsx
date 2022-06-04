import './Hero.scss';

import { Navigation } from '../../components';

export const Hero = () => {
  return (
    <section id="hero" className="section-hero">
      <Navigation />
      <div className="section-hero__wrapper">
        <div className="section-hero__first">
          <h1 className="section-hero__header">
            <span>Hey</span> 👋,
            <br />
            I'm Pierre
          </h1>
          <h2 className="section-hero__subcontent">
            Software Engineer at{' '}
            <a
              href="https://www.holbertonschool.com/"
              className="section-hero__subcontent-link"
            >
              Holberton School
            </a>
            , open to work!
          </h2>
        </div>
      </div>
    </section>
  );
};
