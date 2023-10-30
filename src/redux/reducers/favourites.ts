import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Favourite {
    id: number,
    fact: string
}

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: {
        favourites: []
    },
    reducers: {
        addToFavourites: (state: any, param: PayloadAction<Favourite>) => {
            state.favourites.push(param.payload);
        },
        removeFromFavourites: (state: any, param: PayloadAction<number>) => {
            state.favourites = state.favourites.filter((f: Favourite) => f.id !== param.payload);
        }
    }
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer