import { createStore, combineReducers } from 'redux'
import homeReducer from './home/reducer'
import aboutReducer from './home/reducer'

const store = createStore(
    combineReducers({
        homeReducer,
        aboutReducer
    }),
);

export default store;
