import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const configSlice = createSlice({
    name: "config",
    initialState: 10,
    reducers: {
        setUpdateFactTime: (_, param: PayloadAction<number>) => {
            return param.payload;
        }
    }
});

export const { setUpdateFactTime } = configSlice.actions
export default configSlice.reducer