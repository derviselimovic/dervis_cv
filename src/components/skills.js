import React from 'react';

const Skills = ({ skills }) => (
  <section id="skills" className="row">
  <aside className="col-sm-3">
    <h3>Skills</h3>
  </aside>
  <div className="col-sm-9">
    <div className="row">
    {skills.map(skill => (
      <div key={skill.id} className="col-sm-6">
        <div className="name">
          <h4>{skill.skill}</h4>
        </div>
        <ul className="keywords">
          {skill.technologyList.value.document.children[0].children.map((keyword, i) => (
            <li key={`skill_${i}`}>{keyword.children[0].children[0].value}</li>
          ))}
        </ul>
      </div>
    ))}
    </div>
  </div>
</section>);

export default Skills;
