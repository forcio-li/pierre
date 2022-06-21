import './Studies.scss';
import { Study } from '../../types';
import { studies } from '../../data/studies';

interface StudyItemProps {
  study: Study;
}

export const StudyItem = ({ study }: StudyItemProps) => {
  return (
    <div className="study" key={study.company.id}>
      <div className="study__company">
        <img
          src={'/images/companies/' + study.company.logo}
          alt={study.company.name}
        />
        <div className="study__company-details">
          <h1 className="study__company-name">{study.company.name}</h1>
          <h2 className="study__company-location">
            <i className="fa-solid fa-map-pin" /> {study.company.location}
          </h2>
        </div>
      </div>
      <p className="study__dates">
        {study.startDate.toLocaleDateString()} -{' '}
        {study.endDate.toLocaleDateString() || 'Present'}
      </p>
      <h1 className="study__label">{study.label}</h1>
    </div>
  );
};

export const Studies = () => {
  return (
    <section id="studies" className="section-studies">
      <div className="section-studies__wrapper">
        <div className="section-studies-title">Studies</div>
        <div className="section-studies-subtitle">
          I studied at two computer programming schools!
        </div>
        <div className="section-studies__studies-list">
          {studies.map((study) => (
            <StudyItem key={study.label} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};
