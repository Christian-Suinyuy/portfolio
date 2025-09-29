import { Link } from "react-router-dom"
import { swapTheme } from "../State/theme"
import { useDispatch } from "react-redux"

function Header(){
    const dispatch = useDispatch()
    return (
        <header className="flex justify-between px-8 shadow h-11 items-center">
            <h2 className="flex">My Portfolio</h2>
            <nav className="flex">
                <ul className="style-none flex gap-5">
                    <Link to={'/'}>
                        <li className="font-semibold">About</li>
                    </Link>
                    <Link to={'/Projects'}>
                        <li className="font-semibold">Projects</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li className="font-semibold">Contact</li>
                    </Link>
                    
                </ul>
            </nav>
            <div className="flex" onClick={()=>dispatch(swapTheme())}>toggle</div>
        </header>
    )
}

export default Header