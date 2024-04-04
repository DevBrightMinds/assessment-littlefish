import { appAPI } from "../api/apiSlice";
import allReducers from "../reducers/Index";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        allReducers,
        [appAPI.reducerPath]: appAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(appAPI.middleware),
});