import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '.';
import { mount } from 'enzyme';

describe('Counter', () => {
  const props = {
    counterValue: 0,
    handleAddClick: jest.fn(),
    handleSubtractClick: jest.fn()
  }
  const wrapper = mount(<Counter {...props} />);
  it('renders without crashing', () => {
    const counter = renderer.create(<Counter {...props} />).toJSON();
    expect(counter).toMatchSnapshot();
  });
  it('sets initial value of counter to passed prop', () => {
    expect(wrapper.find('.Counter-display').text()).toEqual(`Counter: ${props.counterValue}`);
  });
  it('calls passed function on clicking "Add" button', () => {
    wrapper.find('.Add').simulate('click');
    expect(props.handleAddClick).toHaveBeenCalled();
  });
  it('calls passed function on clicking "Subtract" button', () => {
    wrapper.find('.Subtract').simulate('click');
    expect(props.handleSubtractClick).toHaveBeenCalled();
  });
});
