// import type { project } from "../../State/projectSlice"
import { useSelector } from "react-redux"
import type { RootState } from "../../State/store"
function Admin(){
    const projects = useSelector((state: RootState)=> state.projects.projects)
    console.log(projects)
    return (
        <section className="flex flex-col gap-4">
            <AddProject />
            <div id="projects">
                <h2>Projects</h2>
                <div>
                    
                </div>
            </div>
        </section>
    )
}
export default Admin

// function ProjectList(){

// }

function AddProject(){

  return(
      <form action="#" className="flex flex-col gap-3 max-w-full mx-4 md:mx-40">
        <h2 className="text-center">Add Project</h2>
        <label htmlFor="title">
            <p>Project title</p>
            <input type="text" placeholder="Project title here" className="border p-2 w-full" />
        </label>

        <label htmlFor="description">
            <p>Project Description</p>
            <textarea placeholder="Project title here" className="border p-2 w-full" />
        </label>

        <label htmlFor="githubLink">
            <p>Github:</p>
            <input type="text" placeholder="Past Link here" className="border-1 p-2 w-full" />
        </label>

        <label htmlFor="githubLink">
            <p>Deployed link:</p>
            <input type="text" placeholder="Past Link here" className="border-1 p-2 w-full" />
        </label>

        <label htmlFor="crew">
            <p>Crew:</p>
            <div className="flex gap-4">
                <p>Solo</p>
                <input value={0} type="radio" name="crew" />
            </div>
            <div className="flex gap-4">
                <p>Team</p>
                <input value={1} type="radio" name="crew" />
            </div>
        </label>
            
            <label htmlFor="image">
                <p>Add image</p>
                <input type="file" accept=", png, svg" className="border p-2" />
            </label>


            <button type="submit" className="bg-blue-200 p-2 px-6 rounded text-xl"> + Add</button>
    </form>
  )
}