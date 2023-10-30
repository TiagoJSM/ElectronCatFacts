import { fetchingCatFact, fetchCatFactSuccess, fetchCatFactFailure } from "../reducers/catFacts"
import { addToFavourites as addToFavouritesAction, removeFromFavourites as removeFromFavouritesAction } from "../reducers/favourites"
import { AppDispatch } from '../store/store';

export async function fetchCatFact(dispatch: AppDispatch) {
  dispatch(fetchingCatFact());
  const catResult = await window.catFactAPI.getRandomFact();
  if (catResult) {
    dispatch(fetchCatFactSuccess(catResult));
  }
  else {
    dispatch(fetchCatFactFailure());
  }
}

export const addToFavourites = (id: number) => async (dispatch: AppDispatch) => {
  const catResult = await window.catFactAPI.getFact(id);
  dispatch(addToFavouritesAction(catResult));
  fetchCatFact(dispatch);
}

export const removeFromFavourites = (id: number) => async (dispatch: AppDispatch) => {
  dispatch(removeFromFavouritesAction(id));
}