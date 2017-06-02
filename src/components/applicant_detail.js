import React from 'react';
import { Link } from 'react-router-dom';

import data from '../data.json';

export function nameToUrl(name) {
  return name.toLowerCase().replace(' ', '');
}

export function getNextApplicantUrl(name) {
  let nextIndex = data.findIndex(app => app.name === name) + 1;
  if (nextIndex === data.length) {
    nextIndex = 0;
  }
  return nameToUrl(data[nextIndex].name);
}

const ApplicantDetail = ({ match }) => {
  const { applicantName } = match.params;
  const applicant = data.find(person => nameToUrl(person.name) === applicantName);

  if (!applicant) {
    return (
      <div className="applicant_detail__container" >
        <h3>Cannot find Applicant: {applicantName}</h3>
      </div>
    );
  }
  const { name, applicationDate, location, status } = applicant;
  const nextApplicantUrl = getNextApplicantUrl(name);
  return (
    <div className="applicant_detail__container" >
      <div className="applicant__detail_title">
        <span>Applicant Detail</span>
        <div className="applicant_detail__buttons">
          <Link to={`/${nextApplicantUrl}`}><button>
            <div>Next</div><i className="material-icons">arrow_forward</i>
          </button></Link>
          <Link to="/"><button>
            <div>Close</div><i className="material-icons">close</i>
          </button></Link>
        </div>
      </div>
      <div className="applicant__detail_content">
        <h3>Name</h3>
        <div className="applicant__detail__text">{name}</div>
        <h3>Email</h3>
        <div className="applicant__detail__text">{name.split(' ')[0]}@nimble.com</div>
        <h3>Application Date</h3>
        <div className="applicant__detail__text">{applicationDate}</div>
        <h3>Location</h3>
        <div className="applicant__detail__text">{location}</div>
        <h3>Status</h3>
        <div className="applicant__detail__text">{status}</div>
      </div>
    </div>
  );
}

export default ApplicantDetail;

