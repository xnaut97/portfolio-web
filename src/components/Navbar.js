import Logo from "./Logo"
import React, { useState, useEffect } from 'react';
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(
        localStorage.getItem('activeItem') || '1'
    );

    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        localStorage.setItem('activeItem', activeItem);
    }, [activeItem]);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const isHighlight = (item) => {
        const highlight = "text-neutral-200 border-neutral-400 border-b-2 py-1 font-bold"
        const unhighlight = "text-neutral-200 hover:text-neutral-400"
        return activeItem === item ? highlight : unhighlight;
    }

    const DropdownMenu = () => {
        return <div className="p-4 right-0 absolute sm:hidden">
            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center text-sm font-medium text-center rounded-lg hover:scale-110 text-neutral-100 fill-current" type="button"
                onClick={() => setHidden(!hidden)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>
            </button>

            <div className={hidden ? "hidden" : ""}>
                <div id="dropdownDots" class="absolute right-4 items-start z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 font-normal">
                    <ul class="py-2 text-sm font-montserrat text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="/" class={activeItem === '1' ? "block px-4 py-2 text-neutral-800 font-semibold" : "block px-4 py-2 text-neutral-800 hover:text-neutral-300"}
                                onClick={() => handleItemClick('1')}>
                                About</a>
                        </li>
                        <li>
                            <a href="/experience" class={activeItem === '2' ? "block px-4 py-2 text-neutral-800 font-semibold" : "block px-4 py-2 text-neutral-800 hover:text-neutral-300"}
                                onClick={() => handleItemClick('2')}>
                                Experience</a>
                        </li>
                        <li>
                            <a href="/work" class={activeItem === '3' ? "block px-4 py-2 text-neutral-800 font-semibold" : "block px-4 py-2 text-neutral-800 hover:text-neutral-300"}
                                onClick={() => handleItemClick('3')}>
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
                            onClick={() => handleItemClick('1')}
                            className={isHighlight('1')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/experience"
                            onClick={() => handleItemClick('2')}
                            className={isHighlight('2')}>
                            Experience</a>
                    </li>
                    <li>
                        <a href="/work"
                            onClick={() => handleItemClick('3')}
                            className={isHighlight('3')}>
                            Work</a>
                    </li>
                </ul>
            </div>
        </div>
    </header >
}

export default Navbar