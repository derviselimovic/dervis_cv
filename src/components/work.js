import React from 'react';

const Work = ({ works }) => (
  <section id="work" className="row">
    <aside className="col-sm-3">
      <h3>Work</h3>
    </aside>
    <div className="col-sm-9">
      <div className="row">
        {works.map(work => (
          <div key={work.id} className="col-sm-12">
            <h4 className="strike-through">
              <span>{work.company}</span>
              <span className="date">
                {work.startdate} — {work.enddate}
              </span>
            </h4>
            <div className="website pull-right">
              <a href="{work.url}">{work.companyWebsite}</a>
            </div>
            <div className="position">{work.jobPosition}</div>
            {work.highlights && (
              <React.Fragment>
                <h4>Highlights</h4>
                <ul className="highlights">
                  {work.highlights.value.document.children[0].children.map((highlight, i) => (
                    <li key={i} className="bullet">{highlight.children[0].children[0].value}</li>
                  ))}
                </ul>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
