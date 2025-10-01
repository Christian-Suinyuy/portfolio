import { Link } from "react-router-dom"
import { swapTheme } from "../State/theme"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../State/store"

function Header(){
    const dispatch = useDispatch()
    let theme = useSelector((state: RootState)=> state.theme)
    return (
        <header className="flex justify-between px-8 shadow h-11 items-center">
            <p className="flex text-md font-bold md:text-2xl ">My Portfolio</p>
                <div className={`group my-2 sm:my-auto absolute left-1/2 mx-auto hover:cursor-pointer mt-25`}>
                <p className='group-hover: sm:hidden'>Pages</p>
                    <ul className={`relative z-1 p-2 scale-y-0 sm:shadow-none shadow-xl group-hover:scale-y-100 group-active:scale-y-100 sm:scale-y-100 sm:flex sm:gap-5`}>
                        <Link to='/' className='hover:scale-110 ease-in-out'>
                            <li className=''>Home</li>
                        </Link>
                        <Link to='/projects' className='hover:scale-110 ease-in-out'>
                            <li className=''>Products</li>
                        </Link>
                        <Link to='/contact' className='hover:scale-110 ease-in-out'>
                            <li className=''>Contact</li>
                        </Link>
                    </ul>
                </div>

            <div className="flex w-9" onClick={()=>dispatch(swapTheme())}>
                <img src={`${theme.Light ? "public/images/darktheme.svg" : "public/images/lightheme.svg"}`} alt="" />
            </div>
        </header>
    )
}

export default Header