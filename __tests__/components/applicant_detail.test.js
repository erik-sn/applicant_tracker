import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ApplicantDetail from '../../src/components/applicant_detail';

describe('Applicant Detail', () => {
  let wrapper;
  const match = {
    params: { applicantName: 'nickwenzel' },
  };
  beforeEach(() => {
    wrapper = shallow(<ApplicantDetail match={match} />);
  });

  it('has correct container', () => {
    expect(wrapper.find('.applicant_detail__container')).to.have.length(1);
  });

  it('has two links with the correct to props', () => {
    expect(wrapper.find('Link').at(0).props().to).to.equal('/brittanisobus');
    expect(wrapper.find('Link').at(1).props().to).to.equal('/');
  });

  it('has a button inside each link', () => {
    expect(wrapper.find('Link').at(0).find('button').length).to.equal(1);
    expect(wrapper.find('Link').at(1).find('button').length).to.equal(1);
  });

  it('has the correct amount oflabels', () => {
    expect(wrapper.find('h3').length).to.equal(5);
    expect(wrapper.find('.applicant__detail__text').length).to.equal(5);
  });
});


describe('Applicant does not exist', () => {
  let wrapper;
  const match = {
    params: { applicantName: 'doesnotexist' },
  };
  beforeEach(() => {
    wrapper = shallow(<ApplicantDetail match={match} />);
  });

  it('should prompt that the applicant with given name could not be found', () => {
    const expected = `Cannot find Applicant: ${match.params.applicantName}`;
    expect(wrapper.find('h3').text()).to.equal(expected);
  });
});
