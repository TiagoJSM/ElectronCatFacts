import { fetchingCatFact, fetchCatFactSuccess, fetchCatFactFailure} from "../reducers/catFacts"
import { AppDispatch } from '../store/store';

export async function fetchCatFact(dispatch: AppDispatch) {
  dispatch(fetchingCatFact());
  const fact = await window.catFactAPI.getFact()
  if(fact) {
    dispatch(fetchCatFactSuccess(fact));
  }
  else {
    dispatch(fetchCatFactFailure());
  }
}