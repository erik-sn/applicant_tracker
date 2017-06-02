import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TableHeader from '../../src/components/table_header';

describe('Applicant Column', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TableHeader />);
  });

  it('has correct container', () => {
    expect(wrapper.find('#table__header')).to.have.length(1);
    expect(wrapper.find('.table__row')).to.have.length(1);
  });

  it('has the correct amount of columns', () => {
    expect(wrapper.find('.table__col').length).to.equal(7);
  });
});
