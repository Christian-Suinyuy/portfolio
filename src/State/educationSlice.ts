import type { achievments} from "./experience";
import { createSlice } from "@reduxjs/toolkit";
const initialState:achievments = {
    list: [
        {
            title: "Bachelo of Computer Eng",
            organisation: "The University of Bamenda",
            description:"",
            start: "October 2022",
            stop: "Ongoing"
        },
    ]
}

const educationSlice = createSlice({
    name:"education",
    initialState,
    reducers:{

    }
})

export default educationSlice.reducer