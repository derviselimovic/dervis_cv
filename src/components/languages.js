import React from 'react';

const Languages = ({ languages }) => (
	<section id="languages" className="row">
		<aside className="col-sm-3">
			<h3>Languages</h3>
		</aside>
		<div className="col-sm-9">
      <div className="row">
      {languages.map(language => (
        <div key={language.id} className="col-sm-6">
          <div className="language">
            <strong>{language.language}</strong>
          </div>
          <div className="fluency">
            {language.languageLevel}
          </div>
        </div>
      ))}
			</div>
		</div>
	</section>);

export default Languages;