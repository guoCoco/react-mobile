

const homeReducer = (state = 0, action = {}) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'INCREMENT_ASYNC':
                return state;
        default:
            return state
    }
}

export default homeReducer;
