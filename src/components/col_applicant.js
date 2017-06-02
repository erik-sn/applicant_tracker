import React from 'react';

const ColApplicant = ({ name }) => (
  <div className="table__col table__name" >
    <div className="table__name_picture"><div className="picture" /></div>
    <div className="table__name_info">
      <div className="applicant__name">{name}</div>
      <div className="applicant__email">{`${name.split(' ')[0]}@nimble.com`}</div>
    </div>
  </div>
);

export default ColApplicant;

