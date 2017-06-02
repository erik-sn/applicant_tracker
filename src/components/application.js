import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ApplicantTable from './applicant_table';
import ApplicantDetail from './applicant_detail';

const styleWithModal = {
  opacity: 0.4,
  pointerEvents: 'none',
};

class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      path: undefined,
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    this.setState({ path });
  }

  render() {
    return (
      <div className="application-container">
        <Route path="/:applicantName" component={ApplicantDetail} />
        <div
          className="application__inner"
          style={this.state.path !== '/' ? styleWithModal : {}}
        >
          <ApplicantTable />
        </div>
      </div>
    );
  }
};

export default Application;
