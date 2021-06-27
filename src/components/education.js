import React from 'react';

const Education = ({ educations }) => (
	<section id="education" className="row">
		<aside className="col-sm-3">
			<h3>Education</h3>
		</aside>
		<div className="col-sm-9">
			<div className="row">
			{educations.map(education => (
        <div key={education.id} className="col-sm-12">
          <h4 className="strike-through">
            <span>{education.university}</span>
            <span className="date">
              {education.startdate} — {education.enddate}
            </span>
          </h4>
          <div className="area">
            {education.course}
          </div>
          <div className="studyType">
            {education.degree}
          </div>
        </div>
      ))}
			</div>
		</div>
	</section>);

export default Education;
