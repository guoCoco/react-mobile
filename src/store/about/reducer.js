const defaultState = {
    name: '',
    age: 0,
}


const aboutReducer = (state = defaultState, action = {}) => {
    switch(action.type) {
        case 'ADD':
            return {...state, name: action.value}
        default:
            return state
    }
}

export default aboutReducer;
