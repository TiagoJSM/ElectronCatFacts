import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const catFactsSlice = createSlice({
    name: "catFacts",
    initialState: {
        id: null,
        fact: null,
        loadingFact: false,
        loadingFactSuccess: false,
    },
    reducers: {
        fetchingCatFact: () => {
            return { id: null, fact: null, loadingFact: true, loadingFactSuccess: false };
        },
        fetchCatFactSuccess: (_, param: PayloadAction<{id: number, fact: string}>) => {
            const { id, fact } = param.payload
            return { id, fact, loadingFact: false, loadingFactSuccess: true };
        },
        fetchCatFactFailure: () => {
            return { id: null, fact: null, loadingFact: false, loadingFactSuccess: false };
        },
    }
});

export const { fetchingCatFact, fetchCatFactSuccess, fetchCatFactFailure } = catFactsSlice.actions
export default catFactsSlice.reducer