import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";

import {Provider} from "react-redux";

import Home from "./components/home";
import {render} from "react-dom";

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

let store = createStore(combineReducers({user: UserReducer, math: MathReducer}), {}, applyMiddleware(/*MyLogger,*/ Logger));

//Executes once the state changes
store.subscribe(() =>{
    //console.log('Yes Store Updated and new states are: ', store.getState());
});

render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    window.document.getElementById('MyId'));