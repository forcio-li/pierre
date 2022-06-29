import './Footer.scss';

export const Footer = () => {
  return (
    <section id="footer" className="section-footer">
      <p className="section-footer__wrapper">
        Made with <i className="fa-solid fa-heart" /> by{' '}
        <a href="https://linkedin.com/in/pierreforcioli" target="_blank">
          Pierre Forcioli{' '}
        </a>
        &copy; {new Date().getFullYear()}
      </p>
    </section>
  );
};
