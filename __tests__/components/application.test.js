import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Application from '../../src/components/application';

describe('Application', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Application />);
  });

  it('has correct container', () => {
    expect(wrapper.find('.application-container')).to.have.length(1);
  });

  it('has a route', () => {
    expect(wrapper.find('Route')).to.have.length(1);
  });

  it('has a applicant table component', () => {
    expect(wrapper.find('ApplicantTable')).to.have.length(1);
  });
});
