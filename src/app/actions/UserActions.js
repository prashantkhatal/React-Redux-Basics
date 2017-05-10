const actions = {'SET_NAME':{type: 'SET_NAME'},
    'SET_AGE':{type: 'SET_AGE'}
};

const getActions = (actionName, value) => {

    return {...actions[actionName], value:value}
};

export default getActions;