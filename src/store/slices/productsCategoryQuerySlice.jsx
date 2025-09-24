import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    page: 1,
    limit: 20,
    categoryId: '',
}


const productsCategoryQuerySlice = createSlice({
    name: "productsCategoryQuerySlice",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
            state.page = 1;
        },
        resetFilters: (state) => {
            state.categoryId = '';
            state.page = 1;
        }
    },
    extraReducers: builder =>
        builder
});

const {reducer: productsCategoryQueryReducer, actions} = productsCategoryQuerySlice;
const productsCategoryQueryActions = {
    ...actions
};

export {
    productsCategoryQueryReducer,
    productsCategoryQueryActions
}