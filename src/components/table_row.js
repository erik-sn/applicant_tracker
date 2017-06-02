import React from 'react';
import { Link } from 'react-router-dom';

import ApplicantCol from './col_applicant';
import StatusCol from './col_status';

export function nameToUrl(name) {
  return name.toLowerCase().replace(' ', '');
}

const TableRow = ({ applicant }) => (
  <Link to={nameToUrl(applicant.name)} className="table__row" >
    <ApplicantCol name={applicant.name} />
    <StatusCol status={applicant.status} />
    <div className="table__col table__date" >{applicant.applicationDate}</div>
    <div className="table__col table__action" >no action</div>
    <div className="table__col table__location" >{applicant.location}</div>
    <div className="table__col table__needs" >high needs</div>
    <div className="table__col table__info">
      <i className="material-icons">info</i>
    </div>
  </Link>
);

export default TableRow;

