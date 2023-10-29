import { FETCHING_CAT_FACT, FETCH_CAT_FACT_SUCCESS, FETCH_CAT_FACT_FAILURE } from '../actions/catFacts';

const initialState = {
    fact: null,
    loadingFact: false,
    loadingFactSuccess: false,
};

export default function catFacts(state = initialState, action) {
    switch (action.type) {
        case FETCHING_CAT_FACT:
            return { ...state, fact: null, loadingFact: true };
        case FETCH_CAT_FACT_SUCCESS:
            return { ...state, fact: action.payload, loadingFact: false, loadingFactSuccess: true };
        case FETCH_CAT_FACT_FAILURE:
            return { ...state, fact: null, loadingFact: false, loadingFactSuccess: false };
        default:
            return state;
    }
}