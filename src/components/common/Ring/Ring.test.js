import React from 'react';
import { shallow } from 'enzyme';
import { RingComponent } from './Ring';

describe('Component Ring', () => {
  it('should render without crashing', () => {
    const component = shallow(<RingComponent />);
    expect(component).toBeTruthy();
  });
});
