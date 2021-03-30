import axios from 'axios';
import { response } from 'express';


const initialState = {
    loading: false,
    article: []
};

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

function requestArticles() {
    let articles = axios.get('/aip/hacker-news')
        .then(response => response.data);
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ARTICLES + '_PENDING':
            return { ...state, loading: true };
        case REQUEST_ARTICLES + '_FULFILLED':
            return { ...state, loading: false, articles: action.payload };
        case REQUEST_ARTICLES + '_REJECTED':
            return { ...state, loading: false }
        default: return state;
    }
};

