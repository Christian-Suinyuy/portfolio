import { createSlice } from "@reduxjs/toolkit";

interface Theme {
    Light:boolean,
    light: string,
    dark: string,
}

const initialState:Theme = {
    Light: true,
    light: "bg-slate-100 text-black",
    dark: "bg-slate-900 text-white",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        swapTheme: (state)=>{
            state.Light = !state.Light
        }
    }
})

export const  {swapTheme} = themeSlice.actions
export default themeSlice.reducer