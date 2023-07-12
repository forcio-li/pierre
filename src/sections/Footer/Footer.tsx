import './Footer.scss';

export const Footer = () => {
  return (
    <section id="footer" className="section-footer">
      <p className="section-footer__wrapper">
        <div className="resume">
          <a
            href="/files/CV - FR - Pierre Forcioli - Fullstack Developer.pdf"
            download
            target="_blank"
            className="navigation__sociale-list__item-link"
          >
            <i className="fa-solid fa-file-arrow-down"></i> Download my resume
          </a>
        </div>
        <div>
          Made with <i className="fa-solid fa-heart" /> by{' '}
          <a href="https://linkedin.com/in/pierreforcioli" target="_blank">
            Pierre Forcioli{' '}
          </a>
          &copy; {new Date().getFullYear()}
        </div>
      </p>
    </section>
  );
};
