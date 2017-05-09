import {createStore, combineReducers, applyMiddleware} from "redux";
import Logger from "redux-logger";

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


const UserReducer = (state = {name:'Prashant', age:27}, action) =>{
    switch (action.type){
        case 'SET_NAME':
            state = {
                ...state,
                name: action.value
            };
            break;

        case 'SET_AGE':
            state = {
                ...state,
                age: action.value
            };
            break;
    }

    return state;
}

/**
 * Middle ware-
 * It must call next method at end to continue execution else the reducers will not execute
 * Here Function params name can custom out like next => myNext.....
 */


const MyLogger = (store) => (next) => (action) => {
    console.log("My Logger =", action);
    next(action);
};

let store = createStore(combineReducers({UserReducer, MathReducer}), {}, applyMiddleware(/*MyLogger,*/ Logger));

//Executed once the state changes
store.subscribe(() =>{
    //console.log('Yes Store Updated and new states are: ', store.getState());
});


store.dispatch({
    type:'ADD',
    value:5
});

store.dispatch({
    type:'ADD',
    value:45
});

store.dispatch({
    type:'SUBTRACT',
    value:27
});

store.dispatch({
    type:'SET_NAME',
    value:'Sachin'
});

store.dispatch({
    type:'SET_AGE',
    value:31
});