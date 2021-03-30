import { createStore, applyMiddleware, combineReducers } from 'redux';
// import reducer from './hackerNewsReducer';
import mediumReducer from './mediumReducer';
import promiseMiddleware from 'redux-promise-middleware';
import hackerNewsReducer from './hackerNewsReducer';
import redditReducer from './redditReducer';


const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
    reddit: redditReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

