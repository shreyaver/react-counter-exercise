import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import { CounterApp } from './CounterApp.container';
import Counter from '../../Components/Counter';
import { incrementActionGenerator, decrementActionGenerator } from '../../redux/index.actions';

describe('CounterApp', () => {
    const testState = {
        counterValue: 0
      };
    const store = createMockStore(testState);
    store.dispatch = jest.fn();
    const wrapper = mount( <Provider store={store}><CounterApp /></Provider> );
    it('renders without crashing', () => {
        const counterApp = renderer.create( <Provider store={store}><CounterApp /></Provider>).toJSON();
        expect(counterApp).toMatchSnapshot();
    });
    it('sets initial value of counter to passed prop', () => {
        expect(wrapper.find(Counter).props().counterValue).toEqual(testState.counterValue);
    });
    it('calls dispatch with "INCREMENT" action on clicking "ADD" button', () => {
        wrapper.find('.Add').simulate('click');
        expect(store.dispatch).toHaveBeenCalledWith(incrementActionGenerator());
    });
    it('calls dispatch with "DECREMENT" action on clicking "SUBTRACT" button', () => {
        wrapper.find('.Subtract').simulate('click');
        expect(store.dispatch).toHaveBeenCalledWith(decrementActionGenerator());
    });

})