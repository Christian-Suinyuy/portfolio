function Contact(){
    return (
        <section className="flex justify-center flex-col items-center gap-9 min-h-135">
            <div id="hero" className="text-center flex flex-col gap-2">
                <h1>Get in Touch</h1>
                <p className="md:w-160">I`m always open to discaussing new projects, creative ideas, or opurtuinities, fell
                    free to reach out, and i`ll get back to you as soon an possible.    </p>
            </div>

            <form action="#" className="w-3/4 sm:w-100 flex flex-col gap-3 ">
                <label htmlFor="name">
                    <p className="font-semibold">Your name</p>
                    <input type="text" placeholder="Enter your name" className="p-1 focus:outline-blue-300 placeholder:to-white border border-gray-400 w-full" />
                </label>

                <label htmlFor="name">
                    <p className="font-semibold">Your Email</p>
                    <input type="email" placeholder="Enter your email" className="p-1 focus:outline-blue-300 placeholder:to-white border border-gray-400 w-full" />
                </label>

                <label htmlFor="message">
                    <p className="font-semibold">Your Email</p>
                    <textarea name="message" id="message" placeholder="Message to send" className="border focus:outline-blue-300 p-1 placeholder:to-white border-gray-400 w-full min-h-20"></textarea>
                </label>

                <button type="submit" className="p-2 rounded bg-blue-600 mx-auto">Send Message</button>
            </form>
        </section>
    )
}

export default Contact