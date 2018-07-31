import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';
import reducer from '../reducers/reducer';

const initialState = {};
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export const store = createStoreWithMiddleware(reducer, initialState);