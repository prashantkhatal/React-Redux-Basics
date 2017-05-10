const actions = {'ADD':{type: 'ADD'},
    'SUBTRACT':{type: 'SUBTRACT'}
};

const geteActions = (actionName, value) => {

    return {...actions[actionName], value:value}
};

export default getActions;