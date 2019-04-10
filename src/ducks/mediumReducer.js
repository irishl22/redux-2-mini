import axios from 'axios'

const initialState = {
    articles: [],
    loading: false
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

export function requestArticles() {
    let articles = axios.get('/api/medium').then(res => {
        return res.data
    })
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_ARTICLES + '_PENDING':
            return {...state, loading: true}
        case REQUEST_ARTICLES + '_FULFILLED':
            return {...state, articles: action.payload, loading: false}   
        case REQUEST_ARTICLES + '_REJECTED':
            return {...state, loading: false}   
        default:
            return state;
    }
}