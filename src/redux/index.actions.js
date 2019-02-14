export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementActionGenerator = () => {
    return {
        type: INCREMENT
    }
}
export const decrementActionGenerator = () => {
    return {
        type: DECREMENT
    }
}