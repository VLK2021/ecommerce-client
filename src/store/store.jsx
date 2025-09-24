import {configureStore} from "@reduxjs/toolkit";

import {categoryReducer} from "./slices/categorySlice.jsx";
import {productsCategoryQueryReducer} from "./slices/productsCategoryQuerySlice.jsx";
import {productReducer} from "./slices/productSlice.jsx";


const store = configureStore({
    reducer: {
        category: categoryReducer,
        productsCategoryQuery: productsCategoryQueryReducer,
        products: productReducer,
    }
});

export default store;