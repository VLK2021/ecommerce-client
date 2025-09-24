import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productService} from "../../services/index.js";


const getProductsByCategory = createAsyncThunk(
    'productSlice/getProductsByCategory',
    async (params, {rejectWithValue}) => {
        try {
            return await productService.getAllProducts(params);
        } catch (e) {
            return rejectWithValue(e.response?.data?.message || "Something went wrong");
        }
    }
);


const initialState = {
    products: [],
    total: 0,
    status: null,
    error: null,
    trigger: 0,
}


const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getProductsByCategory.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.products = action.payload.items;
                state.total = action.payload.totalItems;
            })
            .addCase(getProductsByCategory.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
});

const {reducer: productReducer, actions} = productSlice;
const productActions = {
    ...actions,
    getProductsByCategory
};

export {
    productReducer,
    productActions,
}
