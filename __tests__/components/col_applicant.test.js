import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ApplicantCol from '../../src/components/col_applicant';

describe('Applicant Column', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ApplicantCol name="test name" />);
  });

  it('has correct container', () => {
    expect(wrapper.find('.table__col')).to.have.length(1);
    expect(wrapper.find('.table__name')).to.have.length(1);
  });

  it('has the correct email', () => {
    const expected = 'test@nimble.com';
    expect(wrapper.find('.applicant__email').text()).to.equal(expected);
  });
});
