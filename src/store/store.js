import { createStore, combineReducers } from 'redux'
import homeReducer from './home/reducer'
import aboutReducer from './home/reducer'
import todoListReducer from './todoListRedux/reducer'

const store = createStore(
    combineReducers({
        homeReducer,
        aboutReducer,
        todosList: todoListReducer
    }),
);

export default store;
