import './Navigation.scss';
import profile from '/images/profile.jpeg';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollPosition = () => {
    setScrollPosition(window.pageYOffset);
    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);

  return (
    <nav className={`navigation${scrollPosition <= 300 ? '' : ' visible'}`}>
      <div className="navigation__wrapper">
        <div className="navigation__identity">
          <img
            src={profile}
            alt="Pierre Forcioli"
            className="navigation__identity-picture"
            width={300}
            height={300}
          />
          <a href="" className="navigation__identity-name">
            Pierre Forcioli
          </a>
        </div>
        <div className="navigation__socials">
          <ul className="navigation__socials-list">
            <li className="navigation__socials-list__item">
              <a
                href="https://linkedin.com/in/pierreforcioli"
                target="_blank"
                className="navigation__sociale-list__item-link"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="navigation__socials-list__item">
              <a
                href="https://github.com/pforciol"
                target="_blank"
                className="navigation__sociale-list__item-link"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="navigation__socials-list__item">
              <a
                href="https://twitter.com/pierreforcioli"
                target="_blank"
                className="navigation__sociale-list__item-link"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
