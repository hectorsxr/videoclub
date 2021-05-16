import { createStore, combineReducers } from 'redux';
import clientReducer from './client/reducer';

const reducers = combineReducers({
    clientReducer
});

const store = createStore(
    reducers
);

export default store;
