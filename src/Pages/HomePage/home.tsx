import elips from "/public/images/Ellipse1.svg"
import line from "/public/images/Line2.svg"
import type { RootState } from "../../State/store"
import { useSelector } from "react-redux"
import type { achievment } from "../../State/experience"
import { Link } from "react-router-dom"

function Hero (){
    return (
        <section className="p-5 border-1 h-auto gap-5 mx-10 sm:mx-30 md:mx-45 
        lg:mx-70 font-bold text-black mt-10 bg-gradient-to-r from-red-200 to-pink-200 via-green-200 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center">Hi, I`m Banboye christian</h1>

            <p className="text-center text-2xl">A junior software developer devoted to designing scalable,
                 user-centric web applications blending engineering precision with creative flair
                  to build impactful digital experiences.
            </p>
            <Link to={"/projects"}>
                <button className="bg-blue-300 text-black text-2xl p-2 w-40 ">View Projects</button>
            </Link>
        </section>
    )
}

function Credential (details:achievment){
    return (
         <div className="grid grid-cols-[.1fr_4fr] gap-2 mb-2">
            <div id="bars" className="flex flex-col justify-center items-center gap-1">
                <img src={elips} alt="" className="mt-2 w-10"/>
                <div className="longbar overflow-hidden h-14">
                    <img src={line} alt="" className="w-1" />
                </div>
            </div>
            <div id="expcontent">
                <div id="uba">
                    <h3>{details.title}</h3>
                    <p className="descriptions">{details.organisation} | {details.start} - {details.stop}</p>
                </div>
            </div>
        </div>
    )
}

function AboutMe(){
    const Skills = useSelector((state: RootState)=> state.skills)
    const exp = useSelector((state: RootState)=>state.experiences)
    const Education = useSelector((state:RootState)=> state.education)
    return (
        <section className="mx-9 sm:mx-20 gap-10 grid sm:grid-cols-[2fr_1fr]">
            {/* about section  */}
            <div id="about" className="grid gap-2 text-xl">
                <h2>About Me</h2>
                <p>I'm a junior software developer
                     with 2 months of hands-on experience in the tech industry, currently focused on 
                     building scalable, user-friendly web applications. My background in computer engineering 
                     fuels my passion for clean code, intuitive interfaces, and efficient backend logic. In this short time,
                      I've contributed to projects ranging from responsive websites to API-driven platforms, applying modern 
                      frameworks and best practices to deliver functional, polished results. My development process emphasizes research,
                       prototyping, and iterative testing to ensure quality and usability. I'm committed to continuous learning—actively 
                       exploring new technologies, refining my skills, and pushing
                      creative boundaries with every line of code.
                      </p>
            </div>

            {/* skiils section  */}
            <div id="skill" className="flex flex-col gap-2">
                <h2> SKills</h2>
                <div id="skill" className="flex gap-5 flex-wrap">
                    {Skills?.map((skill, idx)=><span key={skill+idx} className="p-1 flex justify-center px-8 w-fit rounded
                    bg-pink-200 text-black text-2xl hadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)]">{skill}</span>)}
                </div>
            </div>

             {/* experience section  */}
            <section id="experience" className="flex flex-col gap-2 sm:col-start-2 sm:row-start-1">
                <h2 className="">{exp.list[0]?"Experience": ""}</h2>
                    <section id="container" className="grid gap-1">
                      {exp.list?.map((experience,idx)=> <Credential key={experience.title+idx} {...experience}/>)}
                    </section>
                    
            </section>

            {/* Education section  */}
            <div id="Education " className="flex flex-col gap-2">
                <h2>{Education.list[0]?"Eductaion": ""}</h2>
                <div>
                    {Education.list?.map((one)=> <Credential key={one.title+one.start} {...one}/>)}
                </div>
            </div>

        </section>
    )
}


function Home(){
    return <section className="grid gap-10">
        <Hero />
        <AboutMe />
        <div className="actions flex gap-4 text-black text-xl justify-center">
            <Link to={"/contact"}> <button className="bg-blue-300 p-2"> Contact me</button></Link>
            <Link to={"/projects"}> <button className="bg-blue-300 p-2"> view Projects</button></Link>
        </div>
    </section>
}

export default Home