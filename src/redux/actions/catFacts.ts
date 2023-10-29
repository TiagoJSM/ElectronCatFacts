export const FETCHING_CAT_FACT = 'FETCHING_CAT_FACT';
export const FETCH_CAT_FACT_SUCCESS = 'FETCH_CAT_FACT_SUCCESS';
export const FETCH_CAT_FACT_FAILURE = 'FETCH_CAT_FACT_FAILURE';

function fetchingCatFactAction() {
  return {
    type: FETCHING_CAT_FACT
  };
}

function fetchCatFactSuccessAction(fact: string) {
  return {
    type: FETCH_CAT_FACT_SUCCESS,
    payload: fact
  };
}

function fetchCatFactFailureAction() {
  return {
    type: FETCH_CAT_FACT_FAILURE,
  };
}

export async function fetchCatFact(dispatch) {
  dispatch(fetchingCatFactAction());
  const fact = await window.catFactAPI.getFact()
  if(fact) {
    dispatch(fetchCatFactSuccessAction(fact));
  }
  else {
    dispatch(fetchCatFactFailureAction());
  }
}