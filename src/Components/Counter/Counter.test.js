import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '.';
import { shallow } from 'enzyme'

describe('counter', () => {
  const initialValOfCounter = 1;
  const wrapper = shallow(<Counter counterVal={initialValOfCounter} incrementVal={2} decrementVal={3} />);
  beforeEach(() => {
    wrapper.instance().setState((state, props) => ({
      counter: initialValOfCounter
    }));
  });
  it('renders without crashing', () => {
    
    const counter = renderer.create(<Counter counterVal={1} incrementVal={2} decrementVal={3} />).toJSON();
    expect(counter).toMatchSnapshot();
  });
  it('sets initial state of counter to passed value', () => {
    
    expect(wrapper.instance().state.counter).toEqual(1);
  });
  it('increments counter by passed value', () => {
    
    wrapper.instance().increment();
    expect(wrapper.instance().state.counter).toEqual(3);
  });
  it('decrements counter by passed value', () => {
    
    wrapper.instance().decrement();
    expect(wrapper.instance().state.counter).toEqual(-2);
  });
});
