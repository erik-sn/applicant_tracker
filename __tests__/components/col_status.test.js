import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import StatusCol from '../../src/components/col_status';

describe('Status Column', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StatusCol status="test status" />);
  });

  it('has correct container', () => {
    expect(wrapper.find('.table__col')).to.have.length(1);
    expect(wrapper.find('.table__status')).to.have.length(1);
  });

  it('has the correct status', () => {
    const expected = 'test status';
    expect(wrapper.find('.table__status_text').text()).to.equal(expected);
  });
});
