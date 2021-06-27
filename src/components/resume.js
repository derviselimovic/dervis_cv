import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import Contact from './contact';
import About from './about';
import Profiles from './profiles';
import Work from './work';
import Education from './education';
import Skills from './skills';
import Languages from './languages';


const Resume = ({ resume }) => {
  const { about, workExperience,  education, skills, profiles, name,  currentJobPosition, contact, languages} = resume;
  return (
    <React.Fragment>
      <Helmet>
        <title>{`${name} CV`}</title>
        <meta name="description" content={`resume for ${name}`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"
        />
      </Helmet>
      <Header basics={{name, currentJobPosition}} />
      <div id="content" className="container">
        <Contact basics={contact[0]} />
        <About about={about} />
        <Profiles profiles={profiles||[]} />
        <Work works={workExperience} />
        <Education educations={education} />
        <Skills skills={skills} />
        <Languages languages={languages} />
      </div>
    </React.Fragment>
  );
};

export default Resume;
