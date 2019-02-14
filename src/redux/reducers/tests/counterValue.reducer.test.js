import { counterValue } from '../counterValue.reducer';
import { incrementActionGenerator, decrementActionGenerator } from '../../index.actions';

describe('counterValue()', () => {
    it('returns incremented state for action type "INCREMENT"', () => {
        expect(counterValue(0, incrementActionGenerator())).toEqual(1);
    });
    it('returns decremented state for action type "DECREMENT"', () => {
        expect(counterValue(0, decrementActionGenerator())).toEqual(-1);
    });
    it('returns same state for undefined action type', () => {
        expect(counterValue(0, {type: 'random'})).toEqual(0);
    });
});