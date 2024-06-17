import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(
        localStorage.getItem('activeItem') || '/'
    );

    const [hidden, setHidden] = useState(true);

    const handleClick = (id) => {
        setActiveItem(id);
        localStorage.setItem('activeItem', id);
    }

    const isHighlight = (item) => {
        const highlight = "text-neutral-200 border-neutral-400 border-b-2 py-1 font-bold"
        const unhighlight = "text-neutral-200 hover:text-neutral-400"
        return activeItem === item ? highlight : unhighlight;
    }

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem(activeItem);
        }
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        }
    });

    const DropdownMenu = () => {
        return <div className="p-4 right-0 absolute sm:hidden">
            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center text-sm font-medium text-center rounded-lg hover:scale-110 text-neutral-100 fill-current" type="button"
                onClick={() => setHidden(!hidden)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>
            </button>

            <div className={hidden ? "hidden" : ""}>
                <div id="dropdownDots" className="absolute right-4 items-start z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 font-normal">
                    <ul className="py-2 text-sm font-montserrat text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="/" className={activeItem === "/" ? "block px-4 py-2 text-neutral-800 font-semibold" : "block px-4 py-2 text-neutral-800 hover:text-neutral-300"}
                                onClick={() => console.log("Cliick: " + activeItem)}>
                                About</a>
                        </li>
                        <li>
                            <a href="/experience" className={activeItem === '/experience' ? "block px-4 py-2 text-neutral-800 font-semibold" : "block px-4 py-2 text-neutral-800 hover:text-neutral-300"}
                            >
                                Experience</a>
                        </li>
                        <li>
                            <a href="/work" className={activeItem === '/work' ? "block px-4 py-2 text-neutral-800 font-semibold" : "block px-4 py-2 text-neutral-800 hover:text-neutral-300"}
                            >
                                Work</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    }



    return <header className="sticky top-0 z-40 w-full bg-violet-950 mx-auto text-neutral">
        <DropdownMenu />
        <div className="hidden sm:flex items-center justify-center w-full lg:px-60 py-4 z-50">
            {/* <div className="flex items-center space-x-2">
                <Logo />
                <a href="./index.js" className="text-blue-600 hover:text-blue-300 font-extrabold text-md">Brand Name</a>
            </div> */}
            <div className="flex items-center">
                <ul className="flex flex-row lg:flex text-lg space-x-10">
                    <li>
                        <a href="/"
                            onClick={() => handleClick("/")}
                            className={isHighlight("/")}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/experience"
                            onClick={() => handleClick("/experience")}
                            className={isHighlight("/experience")}>
                            Experience</a>
                    </li>
                    <li>
                        <a href="/work"
                            onClick={() => handleClick("/work")}
                            className={isHighlight("/work")}>
                            Work</a>
                    </li>
                </ul>
            </div>
        </div>
    </header >


}

export default Navbar