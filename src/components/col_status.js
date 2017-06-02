import React from 'react';

const ColStatus = ({ status }) => {
  const color = 'red';
  return (
    <div className="table__col table__status" >
      <span className="table__status_icon">
        <div className="circle" style={{ background: color }} />
      </span>
      <span className="table__status_text">{status}</span>
    </div>
  );
}

export default ColStatus;

