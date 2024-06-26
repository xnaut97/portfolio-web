import Navbar from "./Navbar"
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import React, { useState } from 'react';
import { TypeAnimation } from "react-type-animation";

function Home() {
    const [isHovered, setHovered] = useState(false);

    const getArrow = () => {
        return <div className="inline-block align-middle">
            {isHovered ? <GoChevronDown className="scale-115 animate-bounce" /> : <GoChevronRight />}
        </div>
    }

    const openUrl = (url) => {
        window.open(url, "_blank", "noreferrer");
    }

    const Name = () => {
        return <div className="inline-block text-yellow-400">
            Ho Minh Tuan
        </div>
    }

    return <div>
        <Navbar />
        <div className="z-2 flex w-full h-screen m-auto items-center justify-center lg:px-60 bg-violet-950">
            <div className=" text-white text-lg">
                <ul className=" font-montserrat">
                    <div className="animate-slidein">
                        <li className="
                            text-left text-2xl font-medium
                            px-14 sm:px-20 md:px-4
                        ">
                            Hi there,
                        </li>
                        <li className="text-4xl text-center px-4 sm:text-5xl md:text-7xl lg:text-8xl font-semibold">
                            I'm <Name />
                        </li>
                        <div className="text-lg sm:text-xl md:text-2xl font-medium text-left pt-2 px-14 sm:px-20 md:px-4">
                            I am into {' '}
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    'Plugin Development', 1500,
                                    'Frontend Development', 1500,
                                ]}
                                speed={50}
                                style={{ fontSize: '2m', display: 'inline-block' }}
                                repeat={Infinity}
                                className="text-blue-500"
                            />
                        </div>
                    </div>
                    <div className="
                         text-neutral-400 font-light font-montserrat text-justify 
                        text-xs md:text-base
                        pt-4 px-14 lg:px-4

                    ">
                        <TypeAnimation
                            sequence={[
                                "I am pretty passionate about improving my coding skills & developing plugins & websites.\n" +
                                "Build Websites using ReactJS and make minecraft plugins. Working for myself to improve my skills.\n" +
                                "Love to make plugin and websites."
                            ]}
                            speed={100}
                            style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                        />
                    </div>
                    <div className="animate-hopein text-center pt-10 text-base hover:animate-pulse hover:scale-110"
                        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <a href="/work" className="border rounded-xl border-neutral-400 px-6 py-4 hover:bg-red-400 hover:bg-opacity-35">
                            View work {getArrow()}
                        </a>
                    </div>
                    <div className="pt-14 flex flex-auto items-center justify-center space-x-6">
                        <a href="#/" className="p-1 border rounded-2xl border-neutral-400 hover:scale-110"
                            onClick={() => openUrl("https://www.facebook.com/sweetieheart97")}>
                            <svg className="p-1 text-neutral-200 fill-current" data-name="Layer 1" width="35" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
                            </svg>
                        </a>
                        <a href="#/" className="p-1 border rounded-2xl border-neutral-400 hover:scale-110"
                            onClick={() => openUrl("https://github.com/xnaut97")}>
                            <svg className="p-1 text-neutral-200 fill-current" data-name="Layer 1" width="35" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z" />
                            </svg>
                        </a>
                    </div>
                </ul>
            </div>
        </div>
        {/* <img src={wallpaper}
            className="z-1 fixed none w-full h-full object-over"
            width="w-full" height="h-full"
        ></img> */}

    </div>
}


export default Home