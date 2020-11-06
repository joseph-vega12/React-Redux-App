import axios from 'axios';

export const FETCH_CAT_FACTS_START = 'FETCH_CAT_FACTS_START';
export const FETCH_CAT_FACTS_SUCCESS = 'FETCH_CAT_FACTS_SUCCESS';
export const FETCH_CAT_FACTS_FAILURE = 'FETCH_CAT_FACTS_FAILURE';

export const fetchCatFacts = () => {
    return(dispatch) => {
        dispatch({type: FETCH_CAT_FACTS_START});
        axios.get('https://cat-fact.herokuapp.com/facts')
        .then(res => {
            dispatch({ type: FETCH_CAT_FACTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.message);
        })
    }
}