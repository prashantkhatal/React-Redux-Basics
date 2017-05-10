/**
 * Reducers
 * Actions Must have *type* Property and it must be defined
 */

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
};

export default UserReducer;