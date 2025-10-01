import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface project{
    image?:string,
    title: string,
    description: string,
    id?:string,
    crew: boolean,
    github?: string,
    deployed?: string,
}

export interface projects{
    projects:project[]
}
const initialState:projects = {
    projects: [
        {
            image:'/public/images/peace.jpg',
            title: "portfolio",
            description: "A portfolio website showcasing my work, skills, and experience with interactive elements.",
            crew: false,
        },
]
}

const projectsSlice = createSlice({
    name:"projects",
    initialState,
    reducers:{
        addProject: (state, payload:PayloadAction<project>)=>{
            state.projects = [...state.projects, payload.payload]
        }
    }
})

export default projectsSlice.reducer