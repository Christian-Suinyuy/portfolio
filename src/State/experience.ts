import { createSlice } from "@reduxjs/toolkit";

export interface achievment {
    title:string,
    organisation:string,
    start:string,
    stop:string,
    description:string
}

export interface achievments {
    list:achievment[]
}

const initialState:achievments = {
    list: [
        {
            title: "FrontEnd internship",
            organisation: "Sky8 tech",
            start: "4 August 2024",
            stop: "Ongoing",
            description: "interned as from end developer for"
        }
    ]
}

const experienceSlice = createSlice({
    name:"experience",
    initialState,
    reducers: {

    }
})

export default experienceSlice.reducer