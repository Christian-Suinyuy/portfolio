function Footer(){
    return <footer className="shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] relative
     bottom-2 items-center h-20 mt-10 justify-around w-full flex flex-col">
        <div className="socials gap-3 flex h-8">
            <a href="#" className="w-10">
                <img src="/public/images/Facebook png logo transparent png logo.jpg" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/christian-suinyuy-6679b2327" target="blank" className="w-10">
                <img src="/public/images/Download LinkedIn logo on transparent isolated background_.jpg" alt="Linked in" />
            </a>
            <a href="https://github.com/Christian-Suinyuy/" target="blank" className="w-10">
                <img src="/public/images/github.jpg" alt="github" />
            </a>
        </div>

        <div className="copyright flex">
            &copy; copyright 2025
        </div>
    </footer>
}

export default Footer