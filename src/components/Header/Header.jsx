import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "@/components/Header/Navbar.jsx";

const items = [
    { label: "Home", link: "/" },
    { label: "Day 1", link: "/1" },
    { label: "Day 2", link: "/2" },
    { label: "Day 3", link: "/3" },
];

const Header = () => {
    return (
        <div
            style={{ height: 'fit-content', position: 'relative' }}
            className='flex justify-center items-center py-5 px-4'
        >
            <Navbar items={items} initialActiveIndex={0} />

            <Link to='/signup' className="absolute right-4 md:right-10">
                <span className="material-symbols-outlined bg-transparent hover:cursor-pointer hover:rounded-full hover:bg-white/10 hover:backdrop-blur-lg hover:border-white/2 rounded-2xl shadow-2xl transition-all p-3 hover:py-4 text-white
                    text-4xl md:text-5xl lg:text-6xl">
                    login
                </span>
            </Link>
        </div>
    )
}

export default Header