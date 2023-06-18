import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "./slices/formDataSlice";
import postDataSlice from "./slices/postDataSlice";

export const store = configureStore({
    reducer: {
        formData: formDataSlice,
        postData: postDataSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch