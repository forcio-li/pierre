import './Skills.scss';
import { Skill } from '../../types';
import { skills } from '../../data';

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div className="skill">
      <div className="skill__icon">
        <i className={skill.logo}></i>
      </div>
      <div className="skill__name">{skill.name}</div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section-skills">
      <div className="section-skills__wrapper">
        <div className="section-skills-title">Skills</div>
        <div className="section-skills-subtitle">
          Here are all the technologies ans softwares that I have already used
          during my studies ans past experiences
        </div>
        <div className="section-skills__skills-list">
          {skills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
