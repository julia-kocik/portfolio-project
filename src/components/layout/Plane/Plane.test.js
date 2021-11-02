import React from 'react';
import { shallow } from 'enzyme';
import { PlaneComponent } from './Plane';

describe('Component Plane', () => {
  it('should render without crashing', () => {
    const component = shallow(<PlaneComponent />);
    expect(component).toBeTruthy();
  });
});
