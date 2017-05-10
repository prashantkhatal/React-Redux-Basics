import {createStore, combineReducers, applyMiddleware} from "redux";

import user from "./reducers/UserReducer";
import math from "./reducers/MathReducer";

import Logger from "redux-logger";
// import thunk from "redux-thunk";
// import Promise from "redux-promise-middleware";

const store = createStore(combineReducers({
    user,
    math
}), {}, applyMiddleware(/*MyLogger,*/ Logger));

//Executes once the state changes
// store.subscribe(() =>{
//     //console.log('Yes Store Updated and new states are: ', store.getState());
// });


export default store;