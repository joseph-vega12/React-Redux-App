import { FETCH_CAT_FACTS_START, FETCH_CAT_FACTS_SUCCESS } from '../actions';

const initialState = {
    isLoading: false,
    catFactsData: [],
    error: '',
}

export const 