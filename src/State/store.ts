import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice"
import skillReducer from "./skillSlice"
import experienceReducer from "./experience"
import educatioSlice from "./educationSlice"
import themereducer from "./theme"

export const store = configureStore({
    reducer: {
        projects:projectReducer,
        skills : skillReducer,
        experiences: experienceReducer,
        education: educatioSlice,
        theme: themereducer
    }
})

export type RootState = ReturnType <typeof store.getState>;
export type dispatch = typeof store.dispatch