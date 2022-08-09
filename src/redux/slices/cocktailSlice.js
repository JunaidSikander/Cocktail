import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk('cocktails/fetchCocktails', async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    return await response.json();
});

export const fetchSingleCocktail = createAsyncThunk('cocktails/fetchSingleCocktail', async ({id}) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    return await response.json();
});

export const fetchSearchCocktail = createAsyncThunk('cocktails/fetchSearchCocktail', async ({searchText}) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
    return await response.json();
})


const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState: {
        cocktails: [],
        cocktail: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [fetchCocktails.pending]: (state) => {
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks;
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [fetchSingleCocktail.pending]: (state) => {
            state.loading = true;
        },
        [fetchSingleCocktail.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktail = action.payload.drinks;
        },
        [fetchSingleCocktail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [fetchSearchCocktail.pending]: (state) => {
            state.loading = true;
        },
        [fetchSearchCocktail.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks;
        },
        [fetchSearchCocktail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default cocktailSlice.reducer;