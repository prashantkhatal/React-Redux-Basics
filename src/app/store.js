import {createStore, applyMiddleware} from "redux";

import reducers from './reducers';

import Logger from "redux-logger";
// import thunk from "redux-thunk";
// import Promise from "redux-promise-middleware";

const store = createStore(reducers, {}, applyMiddleware(/*MyLogger,*/ Logger));

//Executes once the state changes
// store.subscribe(() =>{
//     //console.log('Yes Store Updated and new states are: ', store.getState());
// });


export default store;