import React from 'react';

import data from '../data.json';
import TableHeader from './table_header';
import TableRow from './table_row';

const ApplicantTable = () => (
  <div className="applicant_table__container" >
    <TableHeader />
    <div id="table__container">
      {data.map(applicant => <TableRow key={applicant.id} applicant={applicant} />)}
    </div>
  </div>
);

export default ApplicantTable;

