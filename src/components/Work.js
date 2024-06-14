import { CgCode, CgEye } from "react-icons/cg";
import Navbar from "./Navbar"
import React, { useState } from 'react';
import Utils from "./Utils";


function Work() {
    const [hover, setHover] = useState('-1');

    const [category, setCategory] = useState('All');

    const getIcon = (icon) => {
        return <div className="inline-block align-middle" >
            {icon}
        </div>
    }

    const getButton = (icon, name, link) => {
        return <a href="#/" className="px-4 py-1.5 rounded-sm text-sm font-medium text-white bg-neutral-800 
                                hover:bg-blue-500 hover:shadow-md hover:shadow-neutral-500"
            onClick={() => Utils.openURL(link)}>
            {getIcon(icon)} {name}
        </a>
    }

    const getGridElement = (id, type, name, description, background, resourceLink, githubLink) => {
        return <div className={hover === id ? "ease-in duration-500 shadow-lg shadow-neutral-800 rounded-lg scale-110" : "ease-out duration-500 scale-100"}>
            <div className={category === 'All' || category === type
                ? "relative overflow-hidden rounded-lg ease-in duration-500 scale-100"
                : "relative overflow-hidden ease-out duration-500 scale-0 translate-y-20"}
                onMouseEnter={() => setHover(id)} onMouseLeave={() => setHover(null)}>
                <div class={hover === id ? "ease-in duration-500 scale-125" : "ease-out duration-500 scale-100"}>
                    <img class="h-64 max-w-full w-full rounded-lg object-cover"
                        src={background} alt="">
                    </img>
                </div>
                <div className={hover === id ? "ease-in duration-500" : "ease-out duration-500 translate-y-36"}>
                    <div className={hover === id ? "absolute bg-neutral-900 w-full h-full bottom-0 rounded-lg bg-opacity-50" : ""}></div>
                    <div className={hover === id ? "absolute w-full h-10 bottom-36 flex justify-start items-center space-x-10 bg-yellow-400"
                        : "absolute w-full h-10 bottom-36 flex justify-start items-center space-x-10 bg-yellow-400 delay-500 rounded-b-lg"}>
                        <a className="px-4 font-bold font-montserrat text-white text-xl">{name}</a>
                    </div>
                    <div className="absolute w-full h-20 bottom-16 flex justify-start items-start pt-1 pb-1 space-x-10 bg-white bg-opacity-75 overflow-y-auto no-scrollbar">
                        <a className="flex px-4 space-y-1 font-medium font-montserrat text-neutral-700 text-sm text-wrap"
                            style={{ whiteSpace: "pre-line" }}>
                            {description}
                        </a>
                    </div>
                    <div className="absolute w-full h-16 bottom-0 rounded-b-lg flex justify-center items-center space-x-10 bg-white bg-opacity-75">
                        {getButton(<CgEye />, 'View', resourceLink)}
                        {getButton(<CgCode />, 'Code', githubLink)}
                    </div>

                </div>
            </div >
        </div>
    }

    return <div>
        <Navbar />
        <div className="w-full min-h-screen bg-violet-950">
            <div className="pt-10 pb-10 sm:pt-0 lg:pb-0">
                <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button type="button" class={category === 'All'
                        ? "text-blue-600 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 rounded-xl text-base font-medium px-5 py-2 text-center me-3 mb-3"
                        : "text-gray-900 border border-white hover:border-gray-200 bg-white rounded-xl text-base font-medium px-5 py-2 text-center me-3 mb-3"}
                        onClick={() => setCategory('All')}
                    >
                        All
                    </button>
                    <button type="button" class={category === 'Plugin'
                        ? "text-blue-600 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 rounded-xl text-base font-medium px-5 py-2 text-center me-3 mb-3"
                        : "text-gray-900 border border-white hover:border-gray-200 bg-white rounded-xl text-base font-medium px-5 py-2 text-center me-3 mb-3"}
                        onClick={() => setCategory('Plugin')}
                    >
                        Plugins
                    </button>
                    <button type="button" class={category === 'Website'
                        ? "text-blue-600 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 rounded-xl text-base font-medium px-5 py-2 text-center me-3 mb-3"
                        : "text-gray-900 border border-white hover:border-gray-200 bg-white rounded-xl text-base font-medium px-5 py-2 text-center me-3 mb-3"}
                        onClick={() => setCategory('Website')}
                    >
                        Websites
                    </button>

                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-12 sm:px-16 md:px-20 lg:px-40">
                    {getGridElement(
                        'itemdismantle', 'Plugin',
                        'Item Dismantle',
                        'Plugin that convert items into crafting resources.\n' +
                        'Saving resources from waste items that will be thrown to lava or throw it away.\n' +
                        'Player can craft other items with there resources are convert from items , recycling is better than wasting right?',
                        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/edd8c7d1-f018-45c1-a3c1-54ed4b9d74fa/d8nce5j-52bc1bc6-fb4d-459d-96f7-6db07bad4beb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkZDhjN2QxLWYwMTgtNDVjMS1hM2MxLTU0ZWQ0YjlkNzRmYVwvZDhuY2U1ai01MmJjMWJjNi1mYjRkLTQ1OWQtOTZmNy02ZGIwN2JhZDRiZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pA0T_-k1ajcHFHqdWC0fQjmmsHkiAkCoPC7vk7MOWPw',
                        'https://www.spigotmc.org/resources/%E2%9C%85-item-dismantle-free-version-convert-items-into-resources.84710/'
                    )}
                    {getGridElement(
                        'fishingbonus', 'Plugin',
                        'Fishing Bonus',
                        'Make you get extra random bonus when you caught fish.\n' +
                        'Bonus can be exp , item or worst-case scenario is mythic mob',
                        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08e80be3-6ed8-493f-a694-830dcade6383/d68618e-2e573402-a3b7-4c27-8d4f-abcc6c9bfbbc.png/v1/fill/w_1192,h_670,q_70,strp/fishing_in_the_sunset__minecraft__by_weed_lion_d68618e-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzA4ZTgwYmUzLTZlZDgtNDkzZi1hNjk0LTgzMGRjYWRlNjM4M1wvZDY4NjE4ZS0yZTU3MzQwMi1hM2I3LTRjMjctOGQ0Zi1hYmNjNmM5YmZiYmMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.77AOfLYqQcj7PTKsIIsf0sx6Is9mpPUMNlat9t7MZxw',
                        'https://www.spigotmc.org/resources/%E2%9C%85-fishingbonus-%E2%9C%85-advanced-random-bonus-system.87486/'
                    )}
                    {getGridElement(
                        'colorgradient', 'Plugin',
                        'Color Gradient',
                        'This plugin is just simple create gradient color text in-game.\n' +
                        'Support Hex, Bukkit color\n' +
                        'And lots of amazing funtions, go and try this plugin.',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo68ARtfbugr860jzZLktku2hwCZG_5wJQng&s',
                        'https://www.spigotmc.org/resources/%E2%9A%A1-colorgradient-%E2%9A%A1-make-your-nickname-chat-with-gradient-color.92468/'
                    )}
                    {getGridElement(
                        'timeditemx', 'Plugin',
                        'TimedItemX',
                        'This plugin that allow player to create timed item.\n' +
                        'Schedule expire time for items.\n' +
                        'Support inventory check and world check\n',
                        'https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610017829420-8F7LT353CECDVO035G29/14.jpg',
                        'https://www.spigotmc.org/resources/%E2%9A%A1timeditemx%E2%9A%A1-better-timed-item-plugin-1-8-1-19.97403/'
                    )}
                </div>
            </div>
        </div>

    </div >
}

export default Work