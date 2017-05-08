import {createStore} from "redux";

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD':
            state = state + action.value;
            break;
        case 'SUBTRACT':
            state = state + action.value;
            break;
    }

    return state;
};

let store = createStore(reducer, 1 );

//Executed once the state changes
store.subscribe(() =>{
    console.log('Yes Store Updated', store.getState());
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