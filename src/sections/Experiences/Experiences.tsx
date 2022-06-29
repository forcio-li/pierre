import './Experiences.scss';
import { Experience } from '../../types';
import { experiences } from '../../data/experiences';

interface ExpItemProps {
  experience: Experience;
}

export const ExpItem = ({ experience }: ExpItemProps) => {
  return (
    <div className="experience" key={experience.company.id}>
      <div className="experience__company">
        <img
          src={'/images/companies/' + experience.company.logo}
          alt={experience.company.name}
        />
        <div className="experience__company-details">
          <h1 className="experience__company-name">
            {experience.company.name}
          </h1>
          <h2 className="experience__company-location">
            <i className="fa-solid fa-map-pin" /> {experience.company.location}
          </h2>
        </div>
      </div>
      <div className="experience__dates">
        <ul>
          {experience.positions.map((position) => (
            <li key={position.label}>
              {position.startDate.toLocaleDateString()}
              <i className="fa-solid fa-right-long"></i>
              {position.endDate
                ? position.endDate.toLocaleDateString()
                : 'Present'}

              <div className="experience__dates-infos">
                <div className="experience__dates-infos__tags">
                  {position.tags}
                </div>
                {position.label}
              </div>
              <div className="experience__dates-infos__details">
                {position.details}
              </div>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Experiences = () => {
  return (
    <section id="experiences" className="section-experiences">
      <div className="section-experiences__wrapper">
        <div className="section-experiences-title">Experiences</div>
        <div className="section-experiences-subtitle">
          This is what I did after I left high school.
        </div>
        <div className="section-experiences__experiences-list">
          {experiences.map((experience) => (
            <ExpItem key={experience.company.name} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
