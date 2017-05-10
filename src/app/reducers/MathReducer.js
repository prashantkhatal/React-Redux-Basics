/**
 * Reducers
 * Actions Must have *type* Property and it must be defined
 */

const MathReducer = (state = {result: 0, lastValues: []}, action) => {
    switch (action.type){
        case 'ADD':
            state = {
                ...state,
                result:state.result + action.value,
                lastValues: [...state.lastValues, action.value]
            }
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.value,
                lastValues: [...state.lastValues, action.value]
            }
            break;
    }

    return state;
};

export default MathReducer;