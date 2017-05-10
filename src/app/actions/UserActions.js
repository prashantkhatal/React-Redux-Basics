const actions = {'SET_NAME':{type: 'SET_NAME'},
    'SET_AGE':{type: 'SET_AGE'}
};

const getActions = (actionName, value) => {

    return {...actions[actionName], value:value};

    //@Todo - This is not working
    // return customDispatcher => {
    //     setTimeout( () => {customDispatcher({
    //         ...actions[actionName], value:value
    //     })}, 3000);
    // }
    // return setTimeout( () => {
    //     return {...actions[actionName], value:value};
    // },3000); //{...actions[actionName], value:value}


    //@Todo - This is not working
    // return {...actions[actionName],
    //     value: new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             resolve(value);
    //         }, 3000)
    //     })
    // };
};

export default getActions;