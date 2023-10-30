import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Favourite {
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
        removeFromFavourites: (_, param: PayloadAction<number>) => {
            return { favourites: [] };
        }
    }
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer