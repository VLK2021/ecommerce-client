import {configureStore} from "@reduxjs/toolkit";

import {categoryReducer} from "./slices/categorySlice.jsx";


const store = configureStore({
    reducer: {
        category: categoryReducer,
    }
});

export default store;