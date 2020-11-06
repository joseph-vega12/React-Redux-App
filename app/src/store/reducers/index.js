import { FETCH_CAT_FACTS_START, FETCH_CAT_FACTS_SUCCESS } from '../actions';

const initialState = {
    isLoading: false,
    catFactsData: [],
    error: '',
}

export const catReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CAT_FACTS_START: 
        return {
            ...state, 
            isLoading: true,
            error: '',
        }
        case FETCH_CAT_FACTS_SUCCESS:
        return {
            ...state,
            isLoading: false,
            catData: action.payload,
        }
        default:
            return(state);
    }
}