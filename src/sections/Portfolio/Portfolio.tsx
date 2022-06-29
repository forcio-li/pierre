import React from 'react';
import './Portfolio.scss';
import { Project } from '../../types';
import { projects } from '../../data/portfolio';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface PortfolioItemProps {
  project: Project;
}

export const PortfolioItem = ({ project }: PortfolioItemProps) => {
  return (
    <div className="project">
      <a
        className="project__github"
        href={project.gitHub}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github" />
      </a>

      <div className="project__info">
        <div className="project__info-name">{project.label}</div>
      </div>
      <div className="project__details">
        <div className="project__school">
          Project for <span>{project.institution}</span>
        </div>
        <div className="project__year">
          Done in <span>{project.class}</span>
        </div>
      </div>
      <div className="project__languages">
        {project.languages
          .slice(0)
          .reverse()
          .map((language) => {
            return <i className={language} key={language} />;
          })}
      </div>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-portfolio">
      <div className="section-portfolio__wrapper">
        <div className="section-portfolio-title">Portfolio</div>
        <div className="section-portfolio-subtitle">
          Here are all the main projects I did during my studies.
        </div>
        <div className="section-portfolio__portfolio-list">
          {projects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
