function Footer(){
    return <footer className="shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] relative
     bottom-2 items-center h-20 mt-10 justify-around w-full flex flex-col">
        <div className="socials gap-3 flex h-8">
            <a href="https://www.facebook.com/christian.bcs.521749/" className="w-10">
                <img src="/images/Facebook png logo transparent png logo.jpg" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/christian-suinyuy-6679b2327" target="blank" className="w-10">
                <img src="/images/Download LinkedIn logo on transparent isolated background_.jpg" alt="Linked in" />
            </a>
            <a href="https://github.com/Christian-Suinyuy/" target="blank" className="w-10">
                <img src="/images/github.jpg" alt="github" />
            </a>
        </div>

        <div className="copyright flex">
            &copy; 2025 Portfolio. All rights reserved.
        </div>
    </footer>
}

export default Footer