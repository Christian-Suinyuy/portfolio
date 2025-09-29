import { createSlice } from "@reduxjs/toolkit";4

const initialState: string[] = ["HTML", "CSS", "React", "JavaScript", "Express.js", 'TypScript', "Figma"]

const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers:{

    }
})

export default skillSlice.reducer