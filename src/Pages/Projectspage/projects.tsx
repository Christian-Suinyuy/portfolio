// import sample from "/public/images/peace.jpg"
// import type { RootState } from "../../State/store"
// import { useSelector } from "react-redux"
import type { project } from "../../State/projectSlice"
import { db } from "../admin/firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

// import { collection, getDocs } from "firebase/firestore"; 
function Cart(details:project){
    return (
         <div id="project-card" className="group overflow-clip relative grid h-100 border">
                    <div id="project-image" className={`h-55 bg-[url("/images/codeicon.jpg")] bg-cover bg-center`}>
                    </div>
                    <div className="description flex flex-col items-center text-center">
                        <h3>{details?.title}</h3>
                        <p id="description">
                            {details.description}
                        </p>
                    </div>
                    <div id="links" className="group-hover:scale-100 flex transition-all duration-700 justify-around lg:scale-0">
                        <a href={details.deployed} target="blank" className="text-blue-400 hover:scale-90 transition-all duration-700">Deployed <span>&rarr;</span></a>
                        <a href={details.github} target="blank" className="text-blue-400 hover:scale-90 transition-all duration-700">Github <span>&rarr;</span></a>
                    </div>
                        <p id="type" className="absolute lg:scale-0 transition-all duration-300 
                        group-hover:scale-100 top-2 bg-pink-200 z-5 text-black px-2 right-2">{details.crew? "Collaboration": "Solo"}</p>

                </div>
    )
}

function Projects(){
    const [projects, setproducts] = useState<any[]>([])
    useEffect(()=>{
        async function getProjects(){
            // ... (your firebase app initialization)
            const projectsCollection = collection(db, "projects");
            const q = query(projectsCollection); // You can add filters here!

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setproducts((p:any)=> [...p, {data:doc.data()}])
            console.log(doc.id, " => ", doc.data());
        });

    }
    getProjects()
    
}, [])
console.log(projects)
    
    // const projectshardcode = useSelector((state:RootState)=> state.projects)
    // // console.log(projects)
    return (
        <section className="flex flex-col gap-5 my-9 justify-center">
            <div className="text-center">
            <h2>My Projects</h2>
            <p className="text-center">Explor the works of my hands</p>
            </div>
            <div id="projects" className="grid grid-cols-[repeat(auto-fit,minmax(230px,300px))] gap-4 mx-10 justify-center">
                {projects?.map((project )=>
                     <Cart key={project.data.id} {...project.data}/>)}
            </div>
            <div className="flex justify-center gap-5">
                <span className="border-1 w-8 text-center"> &lt; </span>
                <span className="bg-blue-600 px-3">1</span>
                <span className="border-1 text-center w-8">&gt;</span>
            </div>
        </section>
    )
}

export default Projects