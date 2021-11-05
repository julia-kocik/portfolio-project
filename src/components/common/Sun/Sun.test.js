import React from 'react';
import { shallow } from 'enzyme';
import { SunComponent } from './Sun';

describe('Component Sun', () => {
  it('should render without crashing', () => {
    const component = shallow(<SunComponent />);
    expect(component).toBeTruthy();
  });
});
