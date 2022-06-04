import { useState } from 'react';
import { Link } from 'react-scroll';
import profile from '../../../public/images/profile.jpeg';

import './Navigation.scss';

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`navigation ${toggle ? 'navigation--active' : ''}`}>
      <a className="navigation__name" href="./">
        <img
          className="navigation__name-image"
          src={profile}
          alt="Pierre Forcioli"
        />
        Pierre Forcioli
      </a>
      <button className="navigation__toggle" onClick={() => setToggle(!toggle)}>
        <i className={`fa-solid ${toggle ? 'fa-xmark' : 'fa-bars'}`}></i>
      </button>
      <div className="navigation__wrapper">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link to="experiences" onClick={() => setToggle(false)}>
              <i className="navigation__list-item__icon fa-solid fa-briefcase" />
              Experiences
            </Link>
          </li>
          <li className="navigation__list-item">
            <i className="navigation__list-item__icon fa-solid fa-graduation-cap" />
            <Link to="education" onClick={() => setToggle(false)}>
              Education
            </Link>
          </li>
          <li className="navigation__list-item">
            <i className="navigation__list-item__icon fa-solid fa-screwdriver-wrench" />
            <Link to="skills" onClick={() => setToggle(false)}>
              Skills
            </Link>
          </li>
          <li className="navigation__list-item">
            <i className="navigation__list-item__icon fa-solid fa-code-branch" />
            <Link to="projects" onClick={() => setToggle(false)}>
              Projects
            </Link>
          </li>
          <li className="navigation__list-item">
            <i className="navigation__list-item__icon fa-solid fa-address-card" />
            <Link to="contact" onClick={() => setToggle(false)}>
              Contact
            </Link>
            <img
              className="navigation__list-item__image"
              src={profile}
              alt="Pierre Forcioli"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
