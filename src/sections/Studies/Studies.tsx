import './Studies.scss';
import { Study } from '../../types';

interface StudyItemProps {
  study: Study;
}

export const StudyItem = ({ study }: StudyItemProps) => {
  //   return <div className="study">{study}</div>;
};

export const Studies = () => {
  return (
    <section id="skills" className="section-skills">
      <div className="section-skills__wrapper">
        <div className="section-skills-title">Skills</div>
        <div className="section-skills-subtitle">
          Here are all the technologies ans softwares that I have already used
          during my studies ans past experiences
        </div>
        <div className="section-skills__skills-list">
          {/* {studies.map((study) => (
            <StudyItem key={study.id} study={study} />
          ))} */}
        </div>
      </div>
    </section>
  );
};
