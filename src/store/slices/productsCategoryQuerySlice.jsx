import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    page: 1,
    limit: 20,
    categoryId: '',
    search: '',
    sortBy: '',
    sortOrder: '',
    sortValue: '',
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
        setSearch: (state, action) => {
            state.search = action.payload;
            state.page = 1;
        },
        setSortBy: (state, action) => {
            const [field, order] = action.payload.split('_');
            state.sortBy = field;
            state.sortOrder = order;
            state.sortValue = action.payload;
            state.page = 1;
        },
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload;
            state.page = 1;
        },
        resetFilters: (state) => {
            state.search = '';
            state.categoryId = '';
            state.sortBy = '';
            state.sortOrder = '';
            state.sortValue = '';
            state.page = 1;
        },
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