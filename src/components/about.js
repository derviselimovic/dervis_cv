import React from 'react';

const About = ({ about }) => (
  <section id="about" className="row">
    <aside className="col-sm-3">
      <h3>About</h3>
    </aside>
    <div className="col-sm-9">
      <p>{about}</p>
    </div>
  </section>
);

export default About;
