// import sample from "/public/images/peace.jpg"
import type { RootState } from "../../State/store"
import { useSelector } from "react-redux"
import type { project } from "../../State/projectSlice"
import { db } from "../admin/firebase";
import { useEffect } from "react";
import { getDocs, collection , query, onSnapshot, QuerySnapshot} from "firebase/firestore"; 

//   const docRef = await addDoc(collection(db, "projects"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
function Cart(details:project){
    return (
         <div id="project-card" className="group overflow-clip relative grid h-100 border">
                    <div id="project-image" className={`h-55 bg-[url("public/images/codeicon.jpg")] bg-cover bg-center`}>
                    </div>
                    <div className="description flex flex-col items-center text-center">
                        <h3>{details?.title}</h3>
                        <p id="description">
                            {details.description}
                        </p>
                    </div>
                    <div id="links" className="group-hover:scale-100 flex transition-all duration-700 justify-around lg:scale-0">
                        <a href="" className="text-blue-400 hover:scale-90 transition-all duration-700">Deployed <span>&rarr;</span></a>
                        <a href="" className="text-blue-400 hover:scale-90 transition-all duration-700">Github <span>&rarr;</span></a>
                    </div>
                        <p id="type" className="absolute lg:scale-0 transition-all duration-300 
                        group-hover:scale-100 top-2 bg-pink-200 z-5 text-black px-2 right-2">{details.crew? "Collaboration": "Solo"}</p>

                </div>
    )
}

function Projects(){

    useEffect(()=>{
        async ()=>{
            const querySnapshot = await getDocs(collection(db, "projects"));
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });

        }
        // const p = query(collection(db, 'projects'))
        // const unsubscribe = onSnapshot(p, (QuerySnapshot)=>{
        //     console.log(QuerySnapshot)
        // })
        // console.log(p)
        console.log('waiting')

    }, [])
    const projects = useSelector((state:RootState)=> state.projects)
    // console.log(projects)
    return (
        <section className="flex flex-col gap-5 my-9 justify-center">
            <div className="text-center">
            <h2>My Projects</h2>
            <p className="text-center">Explor the works of my hands</p>
            </div>
            <div id="projects" className="grid grid-cols-[repeat(auto-fit,minmax(230px,300px))] gap-4 mx-10 justify-center">
                {projects.projects?.map((project:project, idx)=>
                     <Cart key={project.title+idx} {...project}/>)}
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