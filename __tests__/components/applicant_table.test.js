import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ApplicantTable from '../../src/components/applicant_table';

describe('Applicant Table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ApplicantTable />);
  });

  it('has correct container', () => {
    expect(wrapper.find('.applicant_table__container')).to.have.length(1);
  });

  it('has a table header', () => {
    expect(wrapper.find('TableHeader')).to.have.length(1);
  });

  it('has ten TableRows', () => {
    expect(wrapper.find('TableRow')).to.have.length(10);
  });
});

