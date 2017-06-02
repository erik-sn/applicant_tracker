import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ApplicantTable from './applicant_table';
import ApplicantDetail from './applicant_detail';

const styleWithModal = {
  opacity: 0.4,
  pointerEvents: 'none',
};

const Application = () => {
  let style;
  if (typeof window !== 'undefined') {
    style = window.location.pathname !== '/' ? styleWithModal : {};
  }
  return (
    <div className="application-container">
      <Route path="/:applicantName" component={ApplicantDetail} />
      <div
        className="application__inner"
        style={style }
      >
        <ApplicantTable />
      </div>
    </div>
  );
};

export default Application;
