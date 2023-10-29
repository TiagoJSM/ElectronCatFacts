import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const catFactsSlice = createSlice({
    name: "catFacts",
    initialState: {
        fact: null,
        loadingFact: false,
        loadingFactSuccess: false,
    },
    reducers: {
        fetchingCatFact: () => {
            return { fact: null, loadingFact: true, loadingFactSuccess: false };
        },
        fetchCatFactSuccess: (_, param: PayloadAction<string>) => {
            return { fact: param.payload, loadingFact: false, loadingFactSuccess: true };
        },
        fetchCatFactFailure: () => {
            return { fact: null, loadingFact: false, loadingFactSuccess: false };
        },
    }
});

export const { fetchingCatFact, fetchCatFactSuccess, fetchCatFactFailure } = catFactsSlice.actions
export default catFactsSlice.reducer