import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import homeReducer from './home/reducer';
import aboutReducer from './home/reducer';
import todoListReducer from './todoListRedux/reducer';

import { helloSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        homeReducer,
        aboutReducer,
        todosList: todoListReducer
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);

export default store;
