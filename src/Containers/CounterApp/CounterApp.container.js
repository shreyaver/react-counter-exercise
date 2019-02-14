import { incrementActionGenerator, decrementActionGenerator } from '../../redux/index.actions';
import { connect } from 'react-redux';
import Counter from '../../Components/Counter';

export const mapStateToProps = (state) => {
    return { counterValue: state.counterValue };
}
export const mapDispatchToProps = (dispatch) => {
    return { handleAddClick: () => dispatch(incrementActionGenerator()),
        handleSubtractClick: () => dispatch(decrementActionGenerator()),
    }
}
export const CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter);