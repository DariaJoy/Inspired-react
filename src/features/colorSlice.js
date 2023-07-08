import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL } from '../const.js'

export const fetchColor = createAsyncThunk(
    'color/fetchColor',
    async () => {
        const response = await fetch(COLORS_URL);
        const data = await response.json();
        return data;
    }
)

const colorSlice = createSlice({
    name: 'color',
    reducers: {
        setActiveColor: (state, action) => {
            state.activeColor = action.payload;
        },
    },
    
});

export const {setActiveColor} = colorSlice.actions;

export default colorSlice.reducer;


