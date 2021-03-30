import { createStore, applyMiddleware } from 'redux';
import reducer from './hackerNewsReducer';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(promiseMiddleware));

