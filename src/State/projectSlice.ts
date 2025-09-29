import { createSlice } from "@reduxjs/toolkit";

export interface project{
    image:string,
    title: string,
    description: string,
    id?:string
    crew: boolean
    links?: {
        gitHub: URL,
        deployed: URL,
    }
}

interface projects{
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
        {
            image:'/public/images/peace.jpg',
            title: "portfolio",
            description: "A portfolio website showcasing my work, skills, and experience with interactive elements.",
            crew: false,
        },
        {
            image:'/public/images/peace.jpg',
            title: "portfolio",
            description: "A portfolio website showcasing my work, skills, and experience with interactive elements.",
            crew: false,
        },
        {
            image:'/public/images/peace.jpg',
            title: "portfolio",
            description: "A portfolio website showcasing my work, skills, and experience with interactive elements.",
            crew: false,
        },
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

    }
})

export default projectsSlice.reducer