import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableRow, { nameToUrl } from '../../src/components/table_row';

describe('Table Row', () => {
  let wrapper;
  const applicant = {
    id: 2,
    name: 'Nick Wenzel',
    status: 'needs screening',
    applicationDate: '5/1/2017',
    location: 'new york',
  };
  beforeEach(() => {
    wrapper = shallow(<TableRow applicant={applicant} />);
  });

  it('has correct container', () => {
    expect(wrapper.find('.table__row')).to.have.length(1);
  });

  it('has a link component with correct to', () => {
    expect(wrapper.find('Link').length).to.equal(1);
  });

  it('has an applicant column and status column', () => {
    expect(wrapper.find('ColApplicant').length).to.equal(1);
    expect(wrapper.find('ColStatus').length).to.equal(1);
  });

  it('has the correct amount of table__col divs', () => {
    expect(wrapper.find('.table__col').length).to.equal(5);
  });
});

describe('nameToUrl', () => {

  it('returns the correct url', () => {
    expect(nameToUrl('Erik Niehaus')).to.equal('erikniehaus');
  });
});
