import React from 'react';

const Contact = ({ basics }) => (
  <section id="contact" className="row">
    <aside className="col-sm-3">
      <h3>Contact</h3>
    </aside>
    <div className="col-sm-9">
      <div className="row">
        <div className="col-sm-6">
          <strong>Email</strong>
          <div className="email">{basics.email}</div>
        </div>
        <div className="col-sm-6">
          <strong>Phone</strong>
          <div className="phone">{basics.phone}</div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
