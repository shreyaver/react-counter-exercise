import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';
import { shallow } from 'enzyme'

describe('button', () => {
  it('renders without crashing', () => {
    
    const button = renderer.create(<Button caption = "Click Me" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    
    const wrapper = shallow(<Button caption = "Click Me" onClick={jest.fn()}/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.props().onClick).toHaveBeenCalled();
  });
});
