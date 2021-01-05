
const defaultState = [{
  id: 0,
  value: 'study',
}]


const homeReducer = (state = defaultState, action = {}) => {
  switch(action.type) {
      case 'ADD':
          return  [...state, {
            id: action.id,
            value: action.value,
            completed: false
          } ];
      default:
          return state;
  }
}

export default homeReducer;